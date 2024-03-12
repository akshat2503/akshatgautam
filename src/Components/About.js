import { Box, LinearProgress, Typography } from '@mui/material'
import React from 'react'
import me from '../Images/me2.jpg'

export default function About() {
    return (
        <Box id='about' sx={{
            height: 'auto',
            width: '100%',
            background: 'linear-gradient(180deg, rgba(35,38,47,1) 0%, rgba(26,25,29,1) 100%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 5
        }}>
            <Typography sx={{
                fontFamily: 'Inter',
                fontSize: { xs: '3rem', md: '5rem' },
                fontWeight: '700',
                color: 'white',
                mt: 5,
                mb: 5,
            }}>
                About Me
            </Typography>
            <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                px: {xs: 0, md: 15}
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    px: 5,
                }}>
                    <img src={me} alt='Me' style={{
                        width: '300px',
                        clipPath: 'polygon(25% 0, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0 50%)',
                    }}></img>
                    <Typography sx={{
                        fontFamily: 'Inter',
                        fontSize: { xs: '1rem', md: '1.7rem' },
                        fontWeight: '700',
                        color: 'white',
                        mt: 3,
                    }}>Who's This Guy ?</Typography>
                    <Typography sx={{
                        fontFamily: 'Inter',
                        fontSize: { xs: '1rem', md: '1rem' },
                        fontWeight: '400',
                        color: 'white',
                        textAlign: 'center',
                    }}>I am a Full Stack Developer from Rewari, Haryana. Passionately learning and creating beautiful and robust web applications.</Typography>
                </Box>
                <Box sx={{
                    width: '100%',
                    px: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    mt: {xs: 7, md: 0}
                }}>
                    <Box sx={{ pb: 2 }}>
                        <Box sx={{
                            position: 'absolute',
                            zIndex: '2',
                            background: '#04C2C9',
                            height: 30,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontFamily: 'Inter',
                            color: 'white',
                            px: 2,
                            width: {xs: '18%', md: '8%'},
                            fontSize: {xs: 12, md: 16},
                            textAlign: 'center'
                        }}>HTML</Box>
                        <LinearProgress variant="determinate" value={90} sx={{ height: 30 }} />
                    </Box>
                    <Box sx={{ pb: 2 }}>
                        <Box sx={{
                            position: 'absolute',
                            zIndex: '2',
                            background: '#04C2C9',
                            height: 30,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontFamily: 'Inter',
                            color: 'white',
                            px: 2,
                            width: {xs: '18%', md: '8%'},
                            fontSize: {xs: 12, md: 16},
                            textAlign: 'center'
                        }}>CSS</Box>
                        <LinearProgress variant="determinate" value={90} sx={{ height: 30 }} />
                    </Box>
                    <Box sx={{ pb: 2 }}>
                        <Box sx={{
                            position: 'absolute',
                            zIndex: '2',
                            background: '#04C2C9',
                            height: 30,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontFamily: 'Inter',
                            color: 'white',
                            px: 2,
                            width: {xs: '18%', md: '8%'},
                            fontSize: {xs: 12, md: 16},
                            textAlign: 'center'
                        }}>React</Box>
                        <LinearProgress variant="determinate" value={75} sx={{ height: 30 }} />
                    </Box>
                    <Box sx={{ pb: 2 }}>
                        <Box sx={{
                            position: 'absolute',
                            zIndex: '2',
                            background: '#04C2C9',
                            height: 30,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontFamily: 'Inter',
                            color: 'white',
                            px: 2,
                            width: {xs: '18%', md: '8%'},
                            fontSize: {xs: 12, md: 16},
                            textAlign: 'center'
                        }}>Javascript</Box>
                        <LinearProgress variant="determinate" value={75} sx={{ height: 30 }} />
                    </Box>
                    <Box sx={{ pb: 2 }}>
                        <Box sx={{
                            position: 'absolute',
                            zIndex: '2',
                            background: '#04C2C9',
                            height: 30,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontFamily: 'Inter',
                            color: 'white',
                            px: 2,
                            width: {xs: '18%', md: '8%'},
                            fontSize: {xs: 12, md: 16},
                            textAlign: 'center'
                        }}>Express</Box>
                        <LinearProgress variant="determinate" value={75} sx={{ height: 30 }} />
                    </Box>
                    <Box sx={{ pb: 2 }}>
                        <Box sx={{
                            position: 'absolute',
                            zIndex: '2',
                            background: '#04C2C9',
                            height: 30,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontFamily: 'Inter',
                            color: 'white',
                            px: 2,
                            width: {xs: '18%', md: '8%'},
                            fontSize: {xs: 12, md: 16},
                            textAlign: 'center'
                        }}>Node.JS</Box>
                        <LinearProgress variant="determinate" value={70} sx={{ height: 30 }} />
                    </Box>
                    <Box sx={{ pb: 2 }}>
                        <Box sx={{
                            position: 'absolute',
                            zIndex: '2',
                            background: '#04C2C9',
                            height: 30,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontFamily: 'Inter',
                            color: 'white',
                            px: 2,
                            width: {xs: '18%', md: '8%'},
                            fontSize: {xs: 12, md: 16},
                            textAlign: 'center'
                        }}>PHP</Box>
                        <LinearProgress variant="determinate" value={70} sx={{ height: 30 }} />
                    </Box>
                    <Box sx={{ pb: 2 }}>
                        <Box sx={{
                            position: 'absolute',
                            zIndex: '2',
                            background: '#04C2C9',
                            height: 30,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontFamily: 'Inter',
                            color: 'white',
                            px: 2,
                            width: {xs: '18%', md: '8%'},
                            fontSize: {xs: 12, md: 16},
                            textAlign: 'center'
                        }}>MongoDB</Box>
                        <LinearProgress variant="determinate" value={55} sx={{ height: 30 }} />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
