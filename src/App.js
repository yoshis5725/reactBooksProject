// -- imports --
import './Styles/index.css';
import { useEffect, useContext } from 'react';
import BookCreate from './Components/BookCreate';
import BookList from './Components/BookList';
import BooksContext from './Context/Books';


function App() {
    const { fetchBooks } = useContext(BooksContext);


    // calling the fetchbooks function only on init to retrieve all books
    useEffect(() => {
        fetchBooks();
    }, []);


    return (
        <div className='app'>
            <h1>Reading List</h1>
            <BookList />
            <BookCreate />
        </div>
    );
}


// exports
export default App;