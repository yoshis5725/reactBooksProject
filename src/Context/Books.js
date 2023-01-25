// -- imports --
import { createContext, useState } from "react";
import axios from 'axios';


var BooksContext = createContext();


function Provider({ children }){
    // states
    const [ books, setBooks ] = useState([]);


    // -- props --


    const fetchBooks = async () => {
        var apiResponse = await axios.get('http://localhost:3001/books'); 

        setBooks(apiResponse.data);
    };


    const deleteBookById = async(id) => {
        await axios.delete(`http://localhost:3001/books/${id}`);
    
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


    const valueToShare = {
        books,
        deleteBookById,
        editBookById,
        createBook,
        fetchBooks,
    };

    return (
        <BooksContext.Provider value={ valueToShare }>
            { children }
        </BooksContext.Provider>
    );
}


// -- exports --
export { Provider };
export default BooksContext;