import React from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Typography } from '@mui/material';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import './Experience.css'

const steps = [
    'Select master blaster campaign settings',
    'Create an ad group',
    'Create an ad',
];

const CustomStepIcon = ({ icon }) => (
    <img src={icon} alt="Step icon" className='stepper_img' />
);

const CustomStepConnector = () => (
    <StepConnector
        style={{
            // Add your custom styles here
            textAlign: "center"
        }}
    />
);

const Experience = () => {
    return (
        <Box sx={{ width: '100%', padding: '4vmax' }}>
            <Stepper activeStep={1} orientation='vertical'>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel
                            StepIconComponent={() => (
                                <CustomStepIcon
                                    icon="https://www.yttags.com/blog/wp-content/uploads/2023/02/image-urls-for-testing.webp"
                                // icon={index === 0 ? 'path/to/facebook-icon.png' : 'path/to/other-icon.png'} // Set the correct path dynamically
                                />)} // Adjust the size as needed
                            sx={{
                                alignItems: 'flex-start', // Adjust alignment as needed
                            }}
                            // connector={<CustomStepConnector />}
                        >
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Box>)
}

export default Experience