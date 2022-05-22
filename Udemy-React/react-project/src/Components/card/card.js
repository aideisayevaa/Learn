import React from 'react'
import './card.css'
import CardTitle from '../cardTitle/cardTitle'

const Card = () => {
    return (
       <div className="card">
           <div className="card-body">
               <CardTitle title={"Men Kart basligiyam"}/>
           </div>
       </div>

    )
}

export default Card