import React from 'react'
import Partistl from '../components/Partistl'
import Register from '../components/Register'
import Logo from '../components/Logo'

export default function RegEntry() {
    return (
        <div style={{height:"100vh",overflowY:"scroll"}}>
            <Partistl />
            <h1 className='white ba1 mb2 ml3'>{
                `Glympse of Ai -by Eaishawarya Malviya`
            }</h1>
            <Logo></Logo>
            <Register></Register>
            
        </div>
    )
}
