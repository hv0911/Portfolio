import React from 'react'
import moon from '../../assets/moon.jpg'
import { Button, Typography } from '@mui/material'
import { Delete } from '@mui/icons-material'
import './ProjectCard.css'

const ProjectCard = ({
    url,
    projectImage,
    projectTitle,
    description,
    technologies,
    isAdmin = false,
    id,
}) => {
    return (
        <>
            <div className="projectCard" target="black">
                <div>
                    <img src={projectImage} alt="Project" width='120px' height='120px' />
                    <Typography variant="h5">{projectTitle}</Typography>
                </div>
                <div>
                    <Typography variant="h4"> About Project</Typography>
                    <Typography>{description}</Typography>
                    <Typography variant="h6">Tech Stack: {technologies}</Typography>
                </div>
            </div>

            {isAdmin && (
                <Button
                    style={{ color: "rgba(40,40,40,0.7)" }}
                    onClick={() => deleteHandler(id)}
                >
                    <Delete />
                </Button>
            )}
        </>
    )
}

export default ProjectCard