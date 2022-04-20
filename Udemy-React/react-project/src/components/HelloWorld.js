import React from 'react'
import PropTypes from 'prop-types'
import './HelloWorld.css'

const HelloWorld = ({ resim, buttonyazisi, say, children,secim }) => {

    return (
        <div className='helloWorldWrapper'>
            <img className='helloWorldImage' src={resim} alt="" />
            <button className='helloWorldButton'>{buttonyazisi}</button>
            <p className="hellWorldP">{say}</p>
            
            {/* <h4>{secim = true ? "Aktivdir" : "Aktiv deyil"}</h4> */}
            



            <div className="helloWorldRedArea">
                {children}
            </div>
        </div>
    )
}


HelloWorld.propTypes = {
    resim: PropTypes.string,
    buttonyazisi: PropTypes.string,
    say: PropTypes.number,
    children: PropTypes.node,
    secim: PropTypes.bool
}


HelloWorld.defaultProps = {
    buttonyazisi: "Default button adi",
    say: 1000
}

export default HelloWorld;