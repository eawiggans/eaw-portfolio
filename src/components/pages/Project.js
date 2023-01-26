import React from 'react';
import './Project.css'
import weather from '../../assets/weathercrop.png';

function projectCard() {
    return (
        
        <div className='container'>
            <div className='container'>
                <img src={weather} alt='Screenshot of weather tracking app' /><div className='work-title'><a href='https://eawiggans.github.io/weather-tracker/'><h3>Weather Tracker App</h3></a><p><a href='https://github.com/eawiggans/weather-tracker'>Github Repo</a></p></div></div>
        </div>
    )
}

export default projectCard;