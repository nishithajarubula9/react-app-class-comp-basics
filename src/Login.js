import React from 'react'

export default function login(props) {
    console.log(props.isLoggedIn,"login comp")
    return (
        <div>
            {props.isLoggedin ?
            <div>
            <button>LogIn</button>
            <p>LoggedIn</p>
            </div>
            :
            <div>
            <button>LogOff</button>
            <p>LoggedOff</p>
            </div>
            }
        </div>
    )
}
