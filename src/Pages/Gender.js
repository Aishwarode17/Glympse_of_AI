import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Partistl from '../components/Partistl'
import './Weather.css'


export default function Gender() {

    const [name, setname] = useState("");

    const [gender, setgender] = useState("");
    const [genderprob, setgenderprob] = useState("")

    const checkGender = ()=>{

        fetch(`https://api.genderize.io?name=${name}`).then(
                response => response.json()
            ).then(
                data => {setgender(data.gender);
                         setgenderprob(data.probability) ;  }
            )
    }

    return (
        <div style={{height:"100vh",overflowY:"scroll"}}>
            <Partistl></Partistl>
            <Navbar></Navbar>
            <div className='flex up mt5'>
            <h2 className='center mb3' style={{fontStyle:"italic",fontWeight:"bold",fontFamily:'cursive'}}>Gender predictor</h2>

            <input className='input center pa2' style={{fontWeight:"bold",fontFamily:"cursive"}} 
                placeholder='Enter name' 
                onChange={e => setname(e.target.value)} 
                value={name}
                />
                <button onClick={checkGender} className="mv2 shadow-1 center w-25 btnd grow f4 link ph3 pv2 white line bg-light-purple">Check Gender</button>
            </div>
            <div className='down flex up mt3 ' style={{textAlign:"center"}}>
                <h3 className='center pa2' style={{textAlign:"center",fontSize:"large",fontStyle:"italic",color:'red',fontWeight:"bold",border:"1px solid black", backgroundColor:'white' }} >{`Gender : ${gender} with probability of ${genderprob} `}</h3>
            </div>
        </div>
    )
}
