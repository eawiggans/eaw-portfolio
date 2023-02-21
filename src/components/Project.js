import React from 'react';
import weather from '../assets/weathercrop.png';

function projectCard() {
    return (

        <div className='container project-card'>
            <img src={weather} alt='Screenshot of weather tracking app' />
            <div className='work-box p-2'>
                
                <span className='title-span'>Weather Tracker</span>
                <br></br>
                <span className='description-span'>This is the project description.</span>
                <div className='container workbox-links d-flex'>
                <a href='https://eawiggans.github.io/weather-tracker/' className='project-link main-link me-2'>
                    View Site
                </a>
                <br></br>
                <a href='https://github.com/eawiggans/weather-tracker' className='project-link github-link ms-2'>View Github Repo</a>
                </div>
                
                
               

            </div>

        </div>
    )
}

export default projectCard;