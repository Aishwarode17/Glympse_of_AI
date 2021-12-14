import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Partistl from '../components/Partistl';
import './Weather.css'

export default function Weather() {

    const apiKey = '606bfb29136fa1d6a1d1085838c2162c';

    const [weatherData, setWeatherData] = useState([{}]);
    const [city, setCity] = useState("")

    const getWeather = (event)=>{

        if(event.key === "Enter"){
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.trim()}&units=metric&APPID=${apiKey}`).then(
                response => response.json()
            ).then(
                data => setWeatherData(data)
            )
        }
    }

    const check = (event) =>{

        if(city !== ""){
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.trim()}&units=metric&APPID=${apiKey}`).then(
                response => response.json()
            ).then(
                data => setWeatherData(data)
            )
        }

    }

    return (
        <div style={{height:"100vh",overflowY:"scroll"}}>
            <Navbar></Navbar>
            <Partistl/>
            <h1 className='mt5 center' style={{fontWeight:"bold"}}>Check weather</h1>
            <div className='flex center pt2 container'>

                <input className='input pa2' 
                placeholder='Enter city name' 
                onChange={e => setCity(e.target.value)} 
                value={city}
                onKeyPress={getWeather} />

<button onClick={check} className="mv2 shadow-1 center w-25 btnd grow f4 link ph3 pv2 white line bg-light-purple">check</button>
                
                {
                    typeof weatherData.main === 'undefined' ? (
                        <div className='center' style={{textAlign:'center',fontStyle:'italic'}}>
                            <p style={{fontSize:"large",fontWeight:"bold"}}>{`Welcome to see the weather magic in action. Please enter any city(with correct spelling) then press enter or click check button and you will see the current weather displayed.`}</p>
                        </div>
                    ): (
                    <div className='weatherData mt4 flex'>
                        <p className='city'>{weatherData.name}</p>
                        <p className='temp pa2'>{Math.round(weatherData.main.temp)} Celcius </p>
                        <p className='weather'>{weatherData.weather[0].main} </p>
                    </div>)
                }
            </div>

        </div>
    )
}
