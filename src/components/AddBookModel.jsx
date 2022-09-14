import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useDispatch } from 'react-redux';
import { addBook } from '../store/bookSlice';
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

export default function AddBookModel() {

    const [open, setOpen] = React.useState(false);

    const [name, setname] = useState();
    const [isbn, setisbn] = useState('');
    const [country, setcountry] = useState('');
    const [number_of_pages, setnumber_of_pages] = useState('');
    const [publisher, setpublisher] = useState('');
    const [release_date, setrelease_date] = useState('');
    const [author, setauthor] = useState('');
    
    const dispatch = useDispatch()
    
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
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
        dispatch(addBook({
            name,
            isbn,
            country,
            number_of_pages,
            publisher,
            release_date,
            author
        }))
        makeEmptyFields()
        setOpen(false)
    }

    return (
        <div>
            <Button onClick={handleOpen} sx={{marginLeft:'12%',background:'green',color:'white'}}>Add Book</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div>
                        <form onSubmit={onSubmitHandler}>
                            <Input type="text" onChange={e => setname(e.target.value)} placeholder='enter book name' required />
                            <Input type="text" onChange={e => setisbn(e.target.value)} placeholder='enter isbn' required />
                            <Input type="text" onChange={e => setauthor(e.target.value)} placeholder='enter book author' required />
                            <Input type="text" onChange={e => setcountry(e.target.value)} placeholder='enter book country' required />
                            <Input type="number" onChange={e => setnumber_of_pages(e.target.value)} placeholder='enter book number of pages' required />
                            <Input type="text" onChange={e => setpublisher(e.target.value)} placeholder='enter book publisher' required />
                            <Input type="date" onChange={e => setrelease_date(e.target.value)} placeholder='enter book release date' required />
                            <button type='onsubmit'> Submit </button>
                        </form>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
