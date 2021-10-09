import React from 'react';

const Notes = (props) => {
    const { _id, user_id, title, description, tag, date } = props.notes;
    return (
        <> <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body">
                    <h5 className="card-title">{title}
                        {/* <span className="position-absolute badge top-0 start-0 bg-dark bg-opacity-75" >{tag}</span> */}
                    </h5>
                    <p className="card-text">{description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex odit perspiciatis velit non? Asperiores consectetur, ducimus dolores maxime fugiat eligendi amet deserunt officia eveniet quisquam illum, eum molestias iure nihil minus beatae neque perferendis?</p>
                    {/* <p className="card-text"><small className="text-muted">By {user_id} on {new Date(date).toGMTString()} </small></p> */}
                    {/* <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-dark">Read more..</a> */}
                </div>
            </div>
        </div>
        </>
    )
}

export default Notes
