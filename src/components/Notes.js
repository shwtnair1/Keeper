import React,{useState} from 'react';

const Note = (props)=>{

    const handleClick = (e)=>{
        e.preventDefault();
        props.delNote(props.index)
    }
    return(
        <div className='note'>
            <h1>{props.note.title}</h1>
            <p>{props.note.content}</p>
            <button onClick={handleClick}>Del</button>
        </div>
    )
}

export default Note;