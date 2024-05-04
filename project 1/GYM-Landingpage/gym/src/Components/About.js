
import React from 'react';
import './About.css'
import about from '../images/about.png';
const About = () => {
    let learnmore = () => {
        prompt('Do you want to learn more?');
    }
    return (
        <>
            <div className='container' id='about'>
                <br /><br /><br />
                <div className='row mt-5 mb-5 justify-content-center'>
                    <div className='offset-md-1 col-md-4 anicontent'>
                        <img src={about} className=' imgabout ' />
                    </div>
                    <div className='col-md-5 anicontent '>
                        <span className='maincontent text-center '>
                            <h1 style={{ color: 'red' }}>Learn More About <br /> Us</h1>
                            <br />
                            <p className='text-light'>Sentiments two occasional affronting solicitude travelling and one contrasted. Fortune day out married parties. Happiness remainder joy but earnestly for off. Took sold add play may none him few. </p>
                            <br />

                            <button onClick={learnmore} className=' button1 text-center'>Read more</button>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About