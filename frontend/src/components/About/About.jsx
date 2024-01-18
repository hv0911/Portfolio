import React from 'react'
import './About.css'
import { Typography } from '@mui/material'
import moon from '../../assets/moon.jpg'

const About = () => {
    return (
        <div className='about'>
            <div className="aboutContainer">
                <blockquote>
                    <Typography>
                        "Programming isn't about what you know; it's about what you can figure out"
                    </Typography>
                </blockquote>
            </div>
            <div className="aboutContainer2">
                <div>
                    <img src={moon} alt="Harsh Verma" className='aboutAvatar' />

                    <Typography variant='h4' style={{ padding: '1vmax 0', color: 'black' }}>Harsh Verma</Typography>

                    <Typography >Frontend Developer</Typography>
                </div>
                <div>
                    <Typography style={{
                        wordSpacing: "5px",
                        lineHeight: '50px',
                        letterSpacing: '5px',
                        textAlign: 'right'
                    }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ab error, dolor ex nulla consequatur, nesciunt esse non est fugiat corrupti, omnis nisi sint illo.
                    </Typography>
                </div>
            </div>
        </div>
    )
}

export default About