import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBooks } from '../store/bookSlice';
import AddBookModel from './AddBookModel';
import Book from './Book'
import UpdateBookModel from './UpdateBookModel'
import SearchField from './SearchField';

const AllBooks = () => {
    const dispatch = useDispatch()
    const [showUpdateBook, setshowUpdateBookk] = useState(false)
    const [updateBook, setupdateBook] = useState({})
    const [search, setsearch] = useState('')
    const [filteredBooks, setfilteredBooks] = useState([]);

    useEffect(() => {
        dispatch(getAllBooks())
    }, [dispatch]);
    const books = useSelector(state => state.book.books)
    function updateBookHandler(book) {
        setupdateBook({ ...book })
    }
    function searchHandler(searchedValue) {    
        setsearch(searchedValue)
        const filtered = books.filter(book=>book.name.includes(searchedValue))
        setfilteredBooks([...filtered])
    }
    const mappingBooks = search.length ? filteredBooks : books; //for applyong filter on books

    return (
        <div className='justify-content-around'>
            <div style={{textAlign:'center'}}>
                <h1 >All Books</h1>
            </div >
            <div style={{float:'right',marginRight:'10%'}}>
                <SearchField searchHandler = {searchHandler}></SearchField>
            </div>
            <div>
                <AddBookModel></AddBookModel>
            </div>
            <div>
                {showUpdateBook && <UpdateBookModel book={updateBook} closeUpdatedBookForm={() => setshowUpdateBookk(!showUpdateBook)}></UpdateBookModel>}      
            </div>
            <ul>
                {
                    mappingBooks.map(book =>
                        <li key={book.id}>
                            <Book book={book} updateHandler={updateBookHandler} showUpdateHandler={() => setshowUpdateBookk(!showUpdateBook)}></Book>
                        </li>
                    )
                }
            </ul>
        </div>
    );
}

export default AllBooks;
