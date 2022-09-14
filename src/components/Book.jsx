import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../store/bookSlice'

const Book = (props) => {

    const dispatch = useDispatch()
    const book = props.book
    function updateBook(e) {
        e.preventDefault()
        props.updateHandler(book)
        props.showUpdateHandler()
    }
    function bookDelete(e) {
        e.preventDefault()
        console.log("bookDelete", book)
        dispatch(deleteBook(book.id))
    }
    return (
        <div>
            <div className='container border mb-4 p-3' style={{ background: "lightGrey", borderRadius:'10px' }}>
                <div className='d-flex justify-content-around'>
                    <h4 className='d-inline'>Name : </h4>
                    <h4 className='d-inline'>{book.name}</h4>
                </div>
                <div className='d-flex justify-content-around'>
                    <h4 className='d-inline'>Author : </h4>
                    <h4 className='d-inline'>{book.authors}</h4>
                </div>
                <div className='d-flex justify-content-around'>
                    <h4 className='d-inline'>ISBN : </h4>
                    <h4 className='d-inline'>{book.isbn}</h4>
                </div>
                <div className='d-flex justify-content-around'>
                    <h4 className='d-inline'>Country : </h4>
                    <h4 className='d-inline'>{book.country}</h4>
                </div>
                <div className='d-flex justify-content-around'>
                    <h4 className='d-inline'>Number of Pages : </h4>
                    <h4 className='d-inline'>{book.number_of_pages}</h4>
                </div>
                <div className='d-flex justify-content-around'>
                    <h4 className='d-inline'>Publisher : </h4>
                    <h4 className='d-inline'>{book.publisher}</h4>
                </div>
                <div className='d-flex justify-content-around'>
                    <h4 className='d-inline'>Release Date : </h4>
                    <h4 className='d-inline'>{book.release_date}</h4>
                </div>
                <div className='d-flex justify-content-around'>
                    <button className='btn btn-primary w-25' onClick={updateBook}>Update</button>
                    <button className='btn btn-danger w-25' onClick={bookDelete}>Delete</button>
                </div>
            </div>
        </div>
    );
}

export default Book;
