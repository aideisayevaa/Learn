import React from 'react'

const Button = () => {

    function Clicked (e,deyisen) {
        console.log(e,deyisen)
    }

    return (
        <div>
            <button onClick={(e)=>{
                Clicked(e,"Aida")
            }}>Click</button>
        </div>
    )
}

export default Button