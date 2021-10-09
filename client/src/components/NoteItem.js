import React from 'react';

const NoteItem = (props) => {
    const { _id, user_id, title, description, tag, date } = props.notes;
    return (
        <>
            <div className="col-md-3">
                <div className="card my-3">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <i class="fa-solid fa-trash-can mx-2"></i>
                        <i class="fa-solid fa-pen-to-square mx-2"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NoteItem;
