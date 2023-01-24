// imports
import { useState } from "react";


function BookCreate({ onCreate }) {
    // states
    const [title, setTitle] = useState('');


    // event handling
    const handleChange = (event) => {
        setTitle(event.target.value);
    }


    // handling submission - sending the title back to the parent - App.js
    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(title);
        setTitle('');
    }


    return (
        <div className="book-create">
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input className="input" onChange={handleChange} value={title} />
                <button className="button">Create Book</button>
            </form>
        </div>
    )
}


// exports
export default BookCreate;