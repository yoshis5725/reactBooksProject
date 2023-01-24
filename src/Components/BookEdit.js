import { useState } from "react";

function BookEdit({ book, onSubmit }) {
    // state
    const [ title, setTitle ] = useState(book.title);


    // event handler 
    const handleChange = (event) => {
        setTitle(event.target.value)
    }


    // handling the submission
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(book.id, title);
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