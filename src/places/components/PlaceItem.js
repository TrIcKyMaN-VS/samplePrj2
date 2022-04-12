import React from 'react'

import './PlaceItem.css'
import Card from '../../shared/components/UIElements/Card'

function PlaceItem(props) {
  return (
    <li className='place-item'>
        <Card className='place-item__content'>
            <div className='place-item__image'>
                <img src={props.image}></img>
            </div>
            <div className='pace-item__info'>
                <h2>{PlaceItem.title}</h2>
                <h3>{props.address}</h3>
                <p>{props.description}</p>
            </div>
            <div className='place-item__actions'>
                <button>VIEW ON MAP</button>
                <button>EDIT</button>
                <button>DELETE</button>
            </div>
        </Card>
        
    </li>
 )
}

export default PlaceItem