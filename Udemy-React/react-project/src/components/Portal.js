import React from "react";

import ReactDOM from "react-dom";


const Portal = ({target,text})=>{
    return ReactDOM.createPortal(
        <div>
            Portal componenti, hedef text
        </div>,target,text
    )
}

export default Portal