import React from 'react'
import './Card.css'

const Card = props => (
    <div className="Card">
        <div className="CardInfo">
            <img className="CardAvatar" src={props.image} />
            <h3>{props.title}</h3>
            <p className="CardAuthor">{props.author}</p>            
        </div>

        <p className="CardText">{props.text}</p>
        <p className="CardTag">{props.tag}</p>
    </div>
)

export default Card