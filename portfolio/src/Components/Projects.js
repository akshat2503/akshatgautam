import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import project1pic from '../Images/sslaptop.png'
import project2pic from '../Images/sslaptop2.png'
// import project1pic from '../Images/sslaptop.png'



export default function Projects() {
    const projects = [
        {
            name: "Real-Time Chat Web App",
            description: "Web Application made to send and recieve messages in real-time using Socket.io. Learnt about real-time communication",
            image: project1pic,
        },
        {
            name: "Note Keeping Web App",
            description: "Web Application made to store notes on cloud. Made using the MERN Stack. Learnt a lot about State Management and REST APIs.",
            image: project2pic,
        },
        {
            name: 'School Website',
            description: 'Static Website made for a local school. Using HTML, CSS and Bootstrap. Learnt about end user satisfaction and cooperation.',
            image: project1pic,
        },
    ];

    return (
        <Box sx={{
            height: 'auto',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Typography sx={{
                fontFamily: 'Inter',
                fontSize: { xs: '3rem', md: '5rem' },
                fontWeight: '700',
                color: 'white',
                mb: 5,
            }}>
                My Projects
            </Typography>
            <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {projects.map((project) => (

                    <Card sx={{ maxWidth: 345, backgroundColor: 'black', mx: { xs: '', md: 3 }, my: { xs: 3, md: '' }, '&:hover': { boxShadow: '0px 0px 20px 0px rgba(255,255,255,0.5)', transition: 'box-shadow 0.3s ease-in-out' } }}>
                        <CardMedia
                            sx={{ height: 240 }}
                            image={project.image}
                            title=""
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" color={"white"} fontFamily={'Inter'}>
                                {project.name}
                            </Typography>
                            <Typography variant="body2" color={"white"} sx={{ opacity: 0.7, fontFamily: 'Inter', fontStyle: 'italic' }} >
                                {project.description}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    )
}
