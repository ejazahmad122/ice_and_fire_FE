import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const bookSlice = createSlice({
    name: 'book',
    initialState: {
        books: [],
    },
    reducers: {
        getALlBooks(state, action) {
            state.books = action.payload
        },
        deleteBook(state, action) {
            const id = action.payload.id
            state.books = state.books.filter(book => book.id !== id)
        },
        addBook(state, action) {
            const newBook = action.payload.book
            state.books.push({
                ...newBook
            })
        },
        updateBook(state, action) {
            const book = action.payload.book
            const id = action.payload.id
            const existBook = state.books.find(item => id === item.id)
            if (existBook) {
                existBook.name = book.name
                existBook.isbn = book.isbn
                existBook.country = book.country
                existBook.number_of_pages = book.number_of_pages
                existBook.publisher = book.publisher
                existBook.release_date = book.release_date
                existBook.authors = book.author
            }
        }
    }
})
export const getAllBooks = () => {
    return dispatch => {
        axios('http://127.0.0.1:8000/api/v1/books/')
            .then(res => {
                dispatch(bookActions.getALlBooks(res.data.data))
            }).catch(err => {
                alert("something went wrong !!!")
            })
    };
};
export const deleteBook = (id) => {
    return dispatch => {
        axios.delete(`http://127.0.0.1:8000/api/v1/books/${id}/`)
            .then(res => {
                dispatch(bookActions.deleteBook({ id }))
            }).catch(err => {
                alert("something went wrong while Deleting book!!!")
            })
    };
};
export const addBook = (book) => {
    return dispatch => {
        axios.post(`http://127.0.0.1:8000/api/v1/books/`, {
            ...book
        }).then(res => {
            dispatch(bookActions.addBook({ book: res.data.data.book }))
        }).catch(err => {
            alert("something went wrong while Adding book!!!")
        })
    };
};
export const updateBook = (book, id) => {
    return dispatch => {
        axios.patch(`http://127.0.0.1:8000/api/v1/books/${id}/`, {
            ...book
        }).then(res => {
            dispatch(bookActions.updateBook({ book, id }))
        }).catch(err => {
            alert("something went wrong while Updating book!!!")
        })
    };
};


export const bookActions = bookSlice.actions
export default bookSlice
