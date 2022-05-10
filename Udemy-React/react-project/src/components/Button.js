import React from 'react'

const Button = () => {
    return (
        <div style={{ backgroundColor: "gray", height: "400px" }} onClick={() => {
            console.log()
        }}>
            <input type="text" onChange={(e) => {
                console.log(e.target.value)
            }} />
        </div>
    )
}

export default Button