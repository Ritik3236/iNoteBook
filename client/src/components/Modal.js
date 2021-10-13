import React from 'react';

const Modal = (props) => {

    const { note, onChange, onSubmit, refEdit, refClose, } = props.noteProps;

    return (
        <>
            <button ref={refEdit} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">...</button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="my-3">
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" name="title" className="form-control" id="title" value={note.title} onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <input type="text" className="form-control" name="description" id="description" value={note.description} onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" name="tag" value={note.tag} id="tag" onChange={onChange} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary d-none" data-bs-dismiss="modal">Close</button>
                            <button disabled={note.title.length < 5 || note.description.length < 5} type="button" className="btn btn-primary" onClick={onSubmit}>Update Note</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal