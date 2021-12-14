import React from 'react'
import Navbar from '../components/Navbar'
import Partistl from '../components/Partistl'

export default function About() {
    return (
        <div style={{height:"100vh",overflowY:"scroll"}}>
            <Partistl></Partistl>
            <Navbar></Navbar>
            <div className="mh2 ph2"> 
                <h3 className='center mv4 pl2' style={{fontStyle:"italic", fontWeight:"bold"}}>This web application is made to showcase the ground breaking power of deep learning and giving a glympse or a general idea of Artificial Inteligence<br/>Apart from this it has many fun games (jokes genertor) , Gender predictor and a Real Time weather detector made with openweather api.</h3>
                <a className='mt2 link dim pa2' style={{fontSize:"XX-large"}}  href={"https://github.com/Aishwarode17/Glympse_of_AI"} rel="noreferrer" target= "_blank">Github</a>
                <h4 className='bold pa2' style={{fontStyle:"italic", fontWeight:"bold"}}>check my github for code.<br/> Soon I will add an e-commerce feature in here where, one can buy merchandise. I will also add an online chat feature, and some other ml classificaion models. Stay tuned, and make sure to signin via google coz in this way I can monitor the number of users. Thankyou.</h4>
            </div>
        </div>
    )
}
