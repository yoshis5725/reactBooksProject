// -- imports --
import BookShow from './BookShow';
import useBooksContext from '../Hooks/useBooksContext';


function BookList() {
    // getting access to the books array from the custom hook
    const { books } = useBooksContext();


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