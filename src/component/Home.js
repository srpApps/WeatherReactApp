import React, { useState } from 'react';
import axios from 'axios';
import './Home.css'
function Home() {
  const [location,setLocation] = useState('');
  const [data,setData] = useState({});

  const url = 'https://weatherapit.azurewebsites.net/weather/getWeather/'+location;

  const searchLocation = (event) =>{
    
   // alert(url);
   // alert("Testing the button click " + location);
    axios.get(url).then( (response) =>{
         setData(response.data);
    }).catch((error)=>{
        alert(error);
    });

    setLocation('');
  }

  return (
    <div className='app'>
        <div className='top'>
            <div className='searchbox'>
               <input
                 value={location}
                 onChange={event=> setLocation(event.target.value)}
                 placeholder='Enter Location'
               ></input>
               <button onClick={searchLocation} >Search</button>
            </div>
            
        </div>
        <div className='location'>{data.error}</div>
        
        <div className='location'>{data.city}</div>


       <div className='Mid'>
            

                {
                    data.statusImg? <img src={data.statusImg} alt='img'/> : ''
                    
                }
                   

              <h1>{data.temperature} °C</h1>
              
                         
       </div>
       
       <div className='bottom'> 
           <div className='discription'> 
              <p>{data.status}</p>
            </div>
            
            <div className='feels'>
                <p>{data.feelsTemperature} °C</p>
                <p>Feels Like</p>
            </div>

            <div className='humidity'>
                <p>{data.humidity} %</p>
                <p>Humidity</p>
            </div>
       </div>    

        

    </div>
  )
}

export default Home