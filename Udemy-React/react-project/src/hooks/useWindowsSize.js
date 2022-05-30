import React, { useEffect, useState } from "react";

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0
    })


    const changeWindowSize = () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }


    /* custom bir hook yaratmaq ucun reactin hazir hooklarindan istifade edirik */

    useEffect(() => {
        window.addEventListener('resize', changeWindowSize) /* window resive olunanda changeWindowSize funksiyasi ise dusur */

        return () => {
            window.removeEventListener('resize', changeWindowSize)
        }
    }, [])

    return windowSize
}

export default useWindowSize