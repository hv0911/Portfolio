// Experience.js

import React, { useState } from 'react';
import { Typography } from '@mui/material';
import './Experience.css'; // Import your CSS file for styling

const steps = [
    {
        title: 'Step 1',
        imageSrc: 'path_to_image1.jpg',
        description: 'This is the description for Step 1.',
    },
    {
        title: 'Step 2',
        imageSrc: 'path_to_image2.jpg',
        description: 'This is the description for Step 2.',
    },
    {
        title: 'Step 3',
        imageSrc: 'path_to_image3.jpg',
        description: 'This is the description for Step 3.',
    },
];

const Experience = () => {

    return (
        <div className='experience'>

            <div className='step'>
                <div className='connector'></div>
                <div className='step-icon'>
                    <img src="https://www.yttags.com/blog/wp-content/uploads/2023/02/image-urls-for-testing.webp" alt="" />
                </div>
                <div className="step-content">
                    <Typography variant='h5'>Software Engineer</Typography>
                    <div>
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum minima maiores totam quidem illum tempora amet est veniam molestias aperiam cumque, atque dolorem unde numquam pariatur repellat! Neque, enim esse!</li>
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum minima maiores totam quidem illum tempora amet est veniam molestias aperiam cumque, atque dolorem unde numquam pariatur repellat! Neque, enim esse!</li>
                        {/* <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum minima maiores totam quidem illum tempora amet est veniam molestias aperiam cumque, atque dolorem unde numquam pariatur repellat! Neque, enim esse!</li> */}
                    </div>
                </div>
            </div>

            <div className='step'>
                <div className='connector'></div>

                <div className='step-icon'>
                    <img src="https://www.yttags.com/blog/wp-content/uploads/2023/02/image-urls-for-testing.webp" alt="" />
                </div>
                <div className="step-content">
                    <Typography variant='h5'>Software Engineer</Typography>
                    <div>
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum minima maiores totam quidem illum tempora amet est veniam molestias aperiam cumque, atque dolorem unde numquam pariatur repellat! Neque, enim esse!</li>
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum minima maiores totam quidem illum tempora amet est veniam molestias aperiam cumque, atque dolorem unde numquam pariatur repellat! Neque, enim esse!</li>
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum minima maiores totam quidem illum tempora amet est veniam molestias aperiam cumque, atque dolorem unde numquam pariatur repellat! Neque, enim esse!</li>
                    </div>
                </div>
            </div>


            {/* <div className='step'>
                <div className='connector'></div>

                <div className='step-icon'>
                    <img src="https://www.yttags.com/blog/wp-content/uploads/2023/02/image-urls-for-testing.webp" alt="" />
                </div>
                <div className="step-content">
                    <Typography variant='h5'>Software Engineer</Typography>
                    <div>
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum minima maiores totam quidem illum tempora amet est veniam molestias aperiam cumque, atque dolorem unde numquam pariatur repellat! Neque, enim esse!</li>
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum minima maiores totam quidem illum tempora amet est veniam molestias aperiam cumque, atque dolorem unde numquam pariatur repellat! Neque, enim esse!</li>
                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum minima maiores totam quidem illum tempora amet est veniam molestias aperiam cumque, atque dolorem unde numquam pariatur repellat! Neque, enim esse!</li>
                    </div>
                </div>
            </div> */}

        </div>
    );
};

export default Experience;
