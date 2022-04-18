import React from 'react'
import './HelloWorld.css'

const HelloWorld = () => {
    return (
        <div className='helloWorldWrapper'>
            <img className='helloWorldImage' src="https://images.unsplash.com/photo-1646920865283-7ad635281ad9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8aFNQNkp4OHc0WjR8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />
            <button className='helloWorldButton'>Button</button>
            <p className="hellWorldP">Lorem ipsum dolor sit amet.</p>
        </div>
    )
}

export default HelloWorld