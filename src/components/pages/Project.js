import React from 'react';
import './Project.css'
import weather from '../../assets/weathercrop.png';

function projectCard() {
    return (

            <div className='container project-card'>
                <img src={weather} alt='Screenshot of weather tracking app' />
                <div className='work-title'><a href='https://eawiggans.github.io/weather-tracker/'><p className='main-link'>Weather Tracker App</p></a>
                <p><a href='https://github.com/eawiggans/weather-tracker'>Github Repo</a></p>
                </div>

        </div>
    )
}

export default projectCard;