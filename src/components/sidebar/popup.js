import React from 'react'

const Popup = (props) => {
    console.log(props)
    return (
    <div className="popup">
        <div className="popup-content z-depth-5">
            <h3>{props.restaurant.name}</h3>
            <h4>Address: {props.restaurant.vicinity}</h4>
        </div>
    </div>
    )
}

export default Popup