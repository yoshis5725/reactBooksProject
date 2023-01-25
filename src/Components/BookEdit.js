// -- imports --
import { useState } from "react";
import useBooksContext from "../Hooks/useBooksContext";


function BookEdit({ book, onSubmit }) {
    // getting access to the edit function from the custom hook
    const { editBookById } = useBooksContext();

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