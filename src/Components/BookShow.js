// imports
import { useState } from "react";
import BookEdit from "./BookEdit";


function BookShow({ book, onDelete, onEdit }) {
    // vars
    var content = <h3>{book.title}</h3>


    // states
    const [ showEdit, setShowEdit ] = useState(false);


    // -- handlers --

    const handleDeleteClick = () => {
        onDelete(book.id)
    };


    const handleSubmit = (id, newTitle) => {
        setShowEdit(false);
        onEdit(id, newTitle);
    };


    // Toggling the edit button from true to false and vise versa
    const handleEditClick = () => {
        setShowEdit(!showEdit);
    };


    // logic on what to display - determined by the showEdit state
    if (showEdit) {
        content = <BookEdit book={book} onSubmit={handleSubmit} />;
    }


    return (
        <div className="book-show">
            <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="books" />
            <div>
                {content}
            </div>
            <div className="actions">
                <button className="edit" onClick={handleEditClick}>
                    Edit
                </button>
                <button className="delete" onClick={handleDeleteClick}>
                    Delete
                </button>
            </div>
        </div>
    )
}


// exports
export default BookShow;