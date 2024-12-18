import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import bgpic from '../Images/akshat-home-cover.jpg';
import Lottie from 'react-lottie'
import scrollAnim from '../Images/scroll.json'
import { Link } from 'react-scroll';

export default function Hero() {
    return (
        <Box id='home' sx={{
            width: '100%',
            height: '100vh',
            backgroundSize: { xs: 'cover', md: 'cover' },
            backgroundPosition: 'center center',
            backgroundImage: `url(${bgpic})`,
            animation: { xs: 'vibrateBackgroundMobile 5s infinite ease-in-out', md: 'vibrateBackgroundDesktop 5s infinite ease-in-out' },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Typography sx={{
                display: { xs: 'none', md: 'block' },
                fontFamily: 'Inter',
                fontSize: { xs: '2.5rem', md: '8rem' },
                fontWeight: '800',
                color: 'white',
            }}>
                AKSHAT GAUTAM
            </Typography>
            <Typography sx={{
                display: { xs: 'block', md: 'none' },
                fontFamily: 'Inter',
                fontSize: { xs: '5rem', md: '8rem' },
                fontWeight: '800',
                color: 'white',
            }}>
                AKSHAT
            </Typography>
            <Typography sx={{
                display: { xs: 'none', md: 'block' },
                fontFamily: 'Inter',
                fontSize: { xs: '1.1rem', md: '2rem' },
                fontWeight: '500',
                color: 'white',
                mb: { xs: 3, md: '0' }
            }}>
                CERTIFIED CLOUD ENGINEER & DEVOPS ENTHUSIAST
            </Typography>
            <Typography sx={{
                display: { xs: 'block', md: 'none' },
                fontFamily: 'Inter',
                fontSize: { xs: '1.1rem', md: '2rem' },
                fontWeight: '500',
                color: 'white',
                mb: { xs: 3, md: '0' },
                textAlign: 'center'
            }}>
                CERTIFIED CLOUD ENGINEER <br /> AND <br /> DEVOPS ENTHUSIAST
            </Typography>
            <Button variant='outlined' sx={{ color: '#02BCC3', borderColor: '#02BCC3', mb: 8, display: { xs: 'block', md: 'none' }, '&:hover': {borderColor: '#02BCC3'} }} href='https://storage.googleapis.com/resume-bucket-portfolio/Resume.pdf'>Download CV</Button>
            <Link to="about" offset={-70} smooth={true} duration={1500} style={{ position: 'absolute', bottom: '10%', cursor: 'pointer' }}>
                <Lottie options={{ loop: true, animationData: scrollAnim }} height={70} />
            </Link>
        </Box>
    )
}
