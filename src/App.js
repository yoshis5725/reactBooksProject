// imports
import './Styles/index.css';
import { useState, useEffect } from 'react';
import BookCreate from './Components/BookCreate';
import BookList from './Components/BookList';
import axios from 'axios';


function App() {
    // states
    const [ books, setBooks ] = useState([]);


    // -- props --


    const fetchBooks = async () => {
        var apiResponse = await axios.get('http://localhost:3001/books'); 

        setBooks(apiResponse.data);
    };


    // calling the fetchbooks function only on init to retrieve all books
    useEffect(() => {
        fetchBooks();
    }, []);


    const deleteBookById = async(id) => {
        await axios.delete(`http://localhost:3001/${id}`);
    
        const updatedBooks = books.filter((book) => {
            return book.id !== id
        });

        setBooks(updatedBooks);
    };


    const createBook = async (title) => {
        var apiResponse = await axios.post('http://localhost:3001/books', { title });

        const updatedBooks = [
            ...books,
            apiResponse.data
        ];

        setBooks(updatedBooks);
    };


    const editBookById = async (id, newTitle) => {
        var apiResponse = await axios.put(`http://localhost:3001/books/${id}`, { 
            title: newTitle,
        });

        const updatedBooks = books.map(book => {
            if (book.id === id) {
                return { ...book, ...apiResponse.data };
            };

            return book;
        });

        setBooks(updatedBooks);
    };


    return (
        <div className='app'>
            <h1>Reading List</h1>
            <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
            <BookCreate onCreate={createBook} />
        </div>
    );
}


// exports
export default App;