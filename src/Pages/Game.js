import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Partistl from '../components/Partistl'


export default function Game() {

    const [joke, setJoke] = useState("")

    const generate = () =>{

            fetch(`http://api.icndb.com/jokes/random`).then(
                response => response.json()
            ).then(
                data => setJoke(data.value.joke)
            )
    }


    return (
        <div style={{height:"100vh",overflowY:"scroll"}}>
            <Partistl></Partistl>
            <Navbar></Navbar>
            <div >
            <h1 style={{textAllign:"center",fontWeight:"bold",fontFamily:"cursive"}} className='mt5 center ph4'>Random Jokes generator Game</h1>
            <button onClick={generate} className="mv2 shadow-1 center w-25 btnd grow f4 link ph3 pv2 white line bg-light-purple">generate</button>
            <h2 className='center' style={{fontStyle:"italic",textAlign:'center',fontWeight:"bold"}}>Click generate to see the joke</h2>
            <div className='center w-80'><h2 className='center' style={{textAlign:"center",fontSize:"large",fontStyle:"italic",color:'red',fontWeight:"bold",border:"1px solid black", backgroundColor:'white' }} >{joke}</h2></div>
            
            </div>
        </div>
    )
}
