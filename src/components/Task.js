import React from "react";
import './../styles/home.css';

const Task = (props) => {
    return (
            <li onClick={()=>{
                props.onSelect(props.id)
            }}>{props.text}</li>
    )
};

export default Task;