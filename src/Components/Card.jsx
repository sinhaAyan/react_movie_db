import React from 'react'
import '../Components/card.css';
import { imageBase_URL } from '../request';

function Card({ castDetails }) {
    return (
        <div className="card">
            <img className="card_image" src={`${imageBase_URL}${castDetails.profile_path}`} alt="" />
            <div className="card_container">
                <h3>{castDetails.name}</h3>
                <p>{castDetails.character}</p>
            </div>

        </div>
    )
}

export default Card
