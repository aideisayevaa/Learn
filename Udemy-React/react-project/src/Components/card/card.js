import React from 'react'
import './card.css'
import CardTitle from '../cardTitle/cardTitle'
import CardImage from '../cardImage/cardImage'
import CardInfo from '../cardInfo/cardInfo'


const Card = () => {
    return (
        <div className="card">
            <div className="card-body">

                <CardTitle title={"Men Kart basligiyam"} />

                <CardImage url="https://images.unsplash.com/photo-1653170916927-a2aa6e60db3c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500" />

                <CardInfo info="mehsul haqqinda melumat - 1" />

            </div>
        </div>

    )
}

export default Card