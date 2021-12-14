import React from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import './talk.css'

let redirect = "ye redirect hai";

function Talk({talk,talkstate}) {

    const commands = [ {
        command:['go to ' , "Open "],
    }]


    const {transcript} = useSpeechRecognition({commands});
    redirect = transcript;
    return (
        <div className='mt2'>
            <button onClick={()=>{SpeechRecognition.startListening(); setTimeout(talk,4000)}}  className="tk w-30 shadow-1 btnd ml3 w-10 btnd grow f4 link ph3 pv2 white line bg-light-purple">{`talk`}</button>
            
            <h3 className='mt1  btnd ml3' id='transcript'>transcript : {talkstate?transcript:"command not found"}</h3>
        </div>
    )
}

export {redirect , Talk}