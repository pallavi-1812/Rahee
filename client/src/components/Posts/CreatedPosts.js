import React from 'react';
import { Trash } from 'react-bootstrap-icons';

const CreatedPost = (props) => {
    return (
        <div className="note">
            <h1 style={{ color: '#9c0a97', fontWeight: 'bold', fontSize: '1.3rem' }}>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={() => {
                props.onDelete(props.id)
            }} ><Trash className="trashBtn" /></button>
        </div>
    );
}

export default CreatedPost;