import React from 'react'
import "./Card.css"
const Card = (props) => {
    return (
        <div className='card'>
            <img height={"200px"} width={"250px"} src="https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Image_not_found" />
            <div>
                <h1>{props.title}</h1>
                <p>{props.desription} </p>
            </div>

            <button style={{ width: "100px", height: "40px", backgroundColor: "green", color: "white" }}>{props.btnText}</button>
        </div>
    )
}

export default Card
