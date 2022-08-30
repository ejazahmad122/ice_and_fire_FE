import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useDispatch } from 'react-redux';
import { updateBook } from '../store/bookSlice';
import { Input } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function UpdateBookModel(props) {
    const book = props.book
    const [open, setOpen] = useState(true);
    const [name, setname] = useState(book.name);
    const [isbn, setisbn] = useState(book.isbn);
    const [country, setcountry] = useState(book.country);
    const [number_of_pages, setnumber_of_pages] = useState(book.number_of_pages);
    const [publisher, setpublisher] = useState(book.publisher);
    const [release_date, setrelease_date] = useState(book.release_date);
    const [author, setauthor] = useState(book.authors)

    const dispatch = useDispatch()
    function handleClose() {
        setOpen(false)
        props.closeUpdatedBookForm()
    }
    function makeEmptyFields() {
        setname('')
        setauthor('')
        setisbn('')
        setcountry('')
        setnumber_of_pages('')
        setpublisher('')
        setrelease_date('')
    }
    function onSubmitHandler(e) {
        e.preventDefault()
        dispatch(updateBook({
            name,
            isbn,
            country,
            number_of_pages,
            publisher,
            release_date,
            author
        }, book.id))
        makeEmptyFields()
        props.closeUpdatedBookForm()
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div>
                        <form onSubmit={onSubmitHandler}>
                            <Input type="text" value={name} onChange={e => setname(e.target.value)} placeholder='enter book name' required />
                            <Input type="text" value={author} onChange={e => setauthor(e.target.value)} placeholder='enter book author' required />
                            <Input type="text" value={isbn} onChange={e => setisbn(e.target.value)} placeholder='enter isbn' required />
                            <Input type="text" value={country} onChange={e => setcountry(e.target.value)} placeholder='enter book country' required />
                            <Input type="number" value={number_of_pages} onChange={e => setnumber_of_pages(e.target.value)} placeholder='enter book number of pages' required />
                            <Input type="text" value={publisher} onChange={e => setpublisher(e.target.value)} placeholder='enter book publisher' required />
                            <Input type="date" value={release_date} onChange={e => setrelease_date(e.target.value)} placeholder='enter book release date' required />
                            <button type='onsubmit'> Submit </button>
                        </form>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
