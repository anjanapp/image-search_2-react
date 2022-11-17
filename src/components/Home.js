import React, { useState } from 'react'
import axios from 'axios'
import './Home.css'


function Home() {

    const [data, setData] = useState({})
    const [location, setLocation] = useState('')

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=74b9137242f9ac328bd42edc35ba696a`


    const searchLocation = (event) => {
        if (event.key === 'Enter') {
            axios.get(url).then((response) => {
                setData(response.data)
                console.log(response.data);
            })
            setLocation('')

        }


    }

    return (
        <div>

            <div className="app">
                <div className='search'>
                    <input value={location}
                        onChange={event => setLocation(event.target.value)}
                        onKeyPress={searchLocation}
                        placeholder="Enter Location"
                        type='text' />
                </div>
                <div className='containerr'>
                    <div className='top'>
                        <div className='location'>
                            <p>{data.name}</p>
                        </div>
                        <div className='temp'>
                            {data.main ?  <h1 style={{color:'#fff'}}>{data.main.temp}K</h1> : null}
                            

                        </div>
                        <div className='description'>
                            {data.weather ? <p style={{fontSize:70,color:'#E6C7C2'}}>{data.weather[0].main}</p> : null}
                        </div>
                    </div>
                    <div className='bottom'>
                        <div className='feels'>
                            {data.main ? <p className='bold'>{data.main.feels_like}°</p> : null}
                            <p>Feels Like</p>
                        </div>
                        <div className='humidity'>
                            {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
                            <p>Humidity</p>
                        </div>
                        <div className='wind'>
                            {data.wind ? <p className='bold'>{data.wind.speed} MPH</p> : null}
                            <p>Wind Speed</p>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Home