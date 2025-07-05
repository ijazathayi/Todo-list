import React from 'react'
import BasicExample from './Navbar'
import './css/homepage.css'

const Homepage = () => {
    const handleadd = () =>{
        console.log("adding")
    }
    return (
        <div id='body'>
            <div id="nav" className='app-division'></div>
            <div id="input" className='app-division'>
                <input type="text" id='text-input' placeholder='enter your task' />
                 <button onClick={handleadd} id='add-button'>ADD</button>
            </div>
            <div id="notes" className='app-division'>
                <ol>
                    <li></li>
                </ol>
            </div>
        </div>
    )
}

export default Homepage
