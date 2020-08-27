import React from 'react'

export default function TodoItem(props) {
    return (
        <div className="todo-item">
            <input type="checkbox"  
                   checked={props.item.completed}
                   onChange={() => props.handleChange(props.item.id)}/>
             {/*  when an event is fired it is going to get the event property. 
             It's not good enough to just say props.handleChange as it is not going to recieve id property 
             its going to recieve event object instead*/}
         <p>{props.item.text}</p>
        </div>
    )
}
