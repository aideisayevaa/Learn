import React from "react";
import './cardImage.css'

const CardImage = ({ url }) => {
    return (
      <div className="card-image">
          <img src={url} />
      </div>
    )
}


export default CardImage