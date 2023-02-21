import React from 'react';
import weather from '../assets/weathercrop.png';

function projectCard() {
    return (

        <div className='container project-card'>
            <img src={weather} alt='Screenshot of weather tracking app' />
            <div className='work-box'>
                <p>
                <a href='https://eawiggans.github.io/weather-tracker/' className='project-link main-link'>
                    Weather Tracker App
                </a>

                <a href='https://github.com/eawiggans/weather-tracker' className='project-link github-link'>Github Repo</a>
                </p>
               

            </div>

        </div>
    )
}

export default projectCard;