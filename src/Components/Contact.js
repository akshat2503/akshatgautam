import { Box, Typography } from '@mui/material'
import React from 'react'

export default function Contact() {
    return (
        <Box id='contact' sx={{
            display: 'flex',
            mt: 5,
            flexDirection: { xs: 'column', md: 'row' },
            borderTop: '3px solid rgba(255,255,255,0.2)'
        }}>
            <Box sx={{
                width: {xs: '100%', md: '60%'},
                p: { xs: 4, md: 10 },
            }}>
                <Typography sx={{
                    fontFamily: 'Inter',
                    fontSize: { xs: '1.7rem', md: '2.5rem' },
                    textAlign: {xs: 'center', md:'start'},
                    fontWeight: '600',
                    color: 'white',
                    lineHeight: 1,
                    mb: 4
                }}>
                    Available for freelance opportunities
                </Typography>
                <Typography sx={{
                    fontFamily: 'Inter',
                    fontSize: { xs: '1.3rem', md: '1.5rem' },
                    textAlign: {xs: 'center', md:'start'},
                    fontWeight: '500',
                    color: 'white',
                    lineHeight: 1.3,
                }}>
                    Have an exciting project you need help with?
                    <br />Send me an email or contact me via instant message!
                </Typography>
            </Box>
            <Box sx={{
                width: {xs: '100%', md: '40%'},
                p: { xs: 4, md: 10 },
            }}>
                <a style={{
                    textDecoration: 'none',
                    
                }} href='mailto: ronitakki3@gmail.com'>

                    <Typography sx={{
                        color: 'white',
                        fontFamily: 'Inter',
                        fontSize: { xs: '1.6rem', md: '1.7rem' },
                        m: {xs: 'auto', md: '0'},
                        fontWeight: '700',
                        width: 'max-content',
                        background: 'linear-gradient(180deg, rgba(26,25,29,1) 0%, rgba(26,25,29,1) 79%, rgba(188,96,251,1) 80%, rgba(188,96,251,1) 100%)',
                        '&:hover': { background: 'linear-gradient(180deg, rgba(26,25,29,1) 0%, rgba(26,25,29,1) 0%, rgba(188,96,251,1) 0%, rgba(188,96,251,1) 100%)' }
                    }}>
                        ronitakki3@gmail.com
                    </Typography>
                </a>
                <a style={{
                    textDecoration: 'none',
                }} href='https://linkedin.com/in/akshatgautam/'>
                    <Typography sx={{
                        color: 'white',
                        fontFamily: 'Inter',
                        fontSize: { xs: '1.4rem', md: '1.3rem' },
                        textAlign: {xs: 'center', md:'start'},
                        fontWeight: '500',
                        mt: 2,
                    }}>
                        LinkedIn
                    </Typography>
                </a>
                <a style={{
                    textDecoration: 'none',
                }} href='https://github.com/akshat2503'>
                    <Typography sx={{
                        color: 'white',
                        fontFamily: 'Inter',
                        fontSize: { xs: '1.4rem', md: '1.3rem' },
                        textAlign: {xs: 'center', md:'start'},
                        fontWeight: '500',
                    }}>
                        GitHub
                    </Typography>
                </a>
                <a style={{
                    textDecoration: 'none',
                }} href='https://instagram.com/maybe_akshat'>
                    <Typography sx={{
                        color: 'white',
                        fontFamily: 'Inter',
                        fontSize: { xs: '1.4rem', md: '1.3rem' },
                        textAlign: {xs: 'center', md:'start'},
                        fontWeight: '500',
                    }}>
                        Instagram
                    </Typography>
                </a>
            </Box>
        </Box>
    )
}
