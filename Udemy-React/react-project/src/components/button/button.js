import React from 'react'
import PropTypes from 'prop-types'
import './button.css'

const Button = ({onClick,text}) => {
    return (
        <button className='custom-button' onClick={onClick}>{text}</button>
    )
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string
}

Button.defaultProps = {
    text: "Klikle"
}

export default Button