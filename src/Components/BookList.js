// -- imports --
import BookShow from './BookShow';
import { useContext } from 'react';
import BooksContext from '../Context/Books';


function BookList() {
    // getting access to the books array from the provider
    const { books } = useContext(BooksContext);


    // mapping over the array of books
    const renderedBooks = books.map(book => {
        return <BookShow key={book.id} book={book} />
    })


    return (
        <div className='book-list'>
            {renderedBooks}
        </div>
    )
}


// exports
export default BookList;