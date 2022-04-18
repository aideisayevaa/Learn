import React from 'react'
import './HelloWorld.css'

const HelloWorld = (props) => {
   
    return (
        <div className='helloWorldWrapper'>
            <img className='helloWorldImage' src={props.resim} alt="" />
            <button className='helloWorldButton'>{props.button}</button>
            <p className="hellWorldP">{props.yazi}</p>



            <div className="helloWorldRedArea">
                {props.children}
            </div>
        </div>
    )
}

export default HelloWorld