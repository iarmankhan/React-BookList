import React, {useContext, useState} from 'react'
import { BookContext } from '../contexts/BookContext';

const BookForm = (props) => {
    const {addBook} = useContext(BookContext);
    const [newBook, setNewBook] = useState({
        title: '',
        author: ''
    });

    const handleChange = e => {
        setNewBook({
            ...newBook,
            [e.target.id]: e.target.value
        })
    };

    const handleSubmit = e => {
        e.preventDefault();
        addBook(newBook.title, newBook.author);
        setNewBook({
            title: '',
            author: ''
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Book Title" id="title" value={newBook.title} onChange={handleChange} required />
            <input type="text" placeholder="Book Author" id="author" value={newBook.author} onChange={handleChange} required />
            <input type="submit" value="Add Book" />
        </form>
    );
}
 
export default BookForm;