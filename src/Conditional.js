import React from 'react'

export default function Conditional(props) {
    console.log(props)
    if(props.isLoading === true) {
        return (
            <h1>Loading </h1>
        )
    }
    else {
        return (
            <div>
                
                Hello
                {props.unreadMessages}
            </div> 
        )
    }
}
