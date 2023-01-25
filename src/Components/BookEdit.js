// -- imports --
import { useContext, useState } from "react";
import BooksContext from "../Context/Books";


function BookEdit({ book, onSubmit }) {
    // getting access to the edit function from the provider
    const { editBookById } = useContext(BooksContext);

    // state
    const [ title, setTitle ] = useState(book.title);


    // event handler 
    const handleChange = (event) => {
        setTitle(event.target.value)
    }


    // handling the submission
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit();
        editBookById(book.id, title);
    }


    return (
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input className="input" value={title} onChange={handleChange} />
            <button className="button is-primary">
                Save
            </button>
        </form>
    );
}


// exports
export default BookEdit;