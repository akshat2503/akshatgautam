import { Box, Typography } from '@mui/material'
import React from 'react'
import codepic from '../Images/code.webp'


export default function Skillset() {
    return (
        <Box id='skillset' sx={{
            height: 'auto',
            width: '100%',
            background: 'linear-gradient(180deg, rgba(35,38,47,1) 0%, rgba(26,25,29,1) 100%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            // border: '2px solid red'
        }}>
            <Typography sx={{
                fontFamily: 'Inter',
                fontSize: { xs: '3rem', md: '5rem' },
                fontWeight: '700',
                color: 'white',
                mt: 5,
                mb: 5,

            }}>
                My Skill Set
            </Typography>
            <Box sx={{
                border: '2px solid grey',
                borderRadius: '0.5rem',
                width: { xs: '90%', md: '70%' },
                height: 'auto',
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
            }}>
                <Box sx={{
                    width: { xs: '100%', md: '50%' },
                    p: 5,
                    borderRight: { xs: '0px', md: '2px solid grey' },
                    borderBottom: { xs: '2px solid grey', md: '0px' },
                }}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: 2
                    }}>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42"><path d="M18,34.111l-1.667,6.667L14.111,43H31.889l-2.222-2.222L28,34.111M3,25.222H43M7.444,34.111H38.556A4.444,4.444,0,0,0,43,29.667V7.444A4.444,4.444,0,0,0,38.556,3H7.444A4.444,4.444,0,0,0,3,7.444V29.667A4.444,4.444,0,0,0,7.444,34.111Z" transform="translate(-2 -2)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg> */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="44.964" viewBox="0 0 40 44.964"><path d="M21.087,20.97a4.015,4.015,0,1,0,5.485,1.469A4.015,4.015,0,0,0,21.087,20.97Zm18,4.356q-.4-.452-.834-.906.307-.322.594-.644c3.61-4.056,5.134-8.124,3.722-10.57-1.354-2.345-5.381-3.044-10.422-2.063q-.745.146-1.482.329-.141-.486-.3-.967C28.65,5.351,25.887,2,23.064,2c-2.708,0-5.325,3.141-6.994,8q-.246.719-.456,1.449-.493-.121-.989-.223c-5.319-1.092-9.6-.373-11.013,2.074-1.351,2.347.062,6.182,3.436,10.054q.5.575,1.032,1.124c-.417.429-.812.859-1.18,1.285-3.293,3.817-4.625,7.59-3.276,9.927,1.393,2.413,5.617,3.2,10.758,2.191q.625-.124,1.243-.279.226.79.5,1.567c1.662,4.76,4.264,7.8,6.963,7.8,2.786,0,5.58-3.266,7.272-8.226.134-.392.26-.8.38-1.218q.8.2,1.607.353c4.954.937,8.886.2,10.232-2.138,1.39-2.415-.043-6.466-3.495-10.408ZM5.276,14.257c.867-1.506,4.369-2.094,8.961-1.151q.44.091.9.2a46.005,46.005,0,0,0-.947,6.02,46.956,46.956,0,0,0-4.73,3.807q-.493-.51-.96-1.045h0C5.6,18.773,4.462,15.671,5.276,14.257Zm8.738,12.878c-1.148-.869-2.215-1.76-3.183-2.655.968-.89,2.035-1.777,3.18-2.644q-.062,1.325-.061,2.651t.064,2.648Zm0,8.859a16.269,16.269,0,0,1-5.935.209,3.97,3.97,0,0,1-2.79-1.476c-.818-1.418.251-4.447,3.067-7.712q.531-.614,1.1-1.2a46.066,46.066,0,0,0,4.737,3.822,46.768,46.768,0,0,0,.958,6.1q-.564.141-1.135.254ZM29.977,17.92q-1.131-.713-2.29-1.38-1.141-.656-2.308-1.264c1.333-.561,2.644-1.039,3.909-1.429a40.955,40.955,0,0,1,.69,4.073Zm-12.092-7.3c1.43-4.162,3.547-6.7,5.179-6.7,1.738,0,4,2.739,5.473,7.189q.144.435.272.875a46.038,46.038,0,0,0-5.681,2.183,45.1,45.1,0,0,0-5.663-2.208Q17.659,11.286,17.886,10.622Zm-.9,3.2a41.159,41.159,0,0,1,3.889,1.443q-2.362,1.219-4.6,2.656C16.452,16.488,16.692,15.114,16.986,13.823Zm-.711,17.223q1.117.715,2.267,1.378,1.173.675,2.377,1.294A40.909,40.909,0,0,1,17,35.212C16.7,33.9,16.457,32.505,16.275,31.046ZM28.54,38.117a16.267,16.267,0,0,1-2.783,5.245h0a3.97,3.97,0,0,1-2.672,1.679c-1.637,0-3.727-2.439-5.148-6.509q-.251-.722-.462-1.457a45.207,45.207,0,0,0,5.686-2.27,46.762,46.762,0,0,0,5.727,2.2q-.16.56-.347,1.111Zm.814-2.977c-1.28-.4-2.609-.882-3.962-1.451q1.144-.6,2.3-1.271,1.191-.687,2.32-1.409a40.811,40.811,0,0,1-.663,4.132Zm1-10.662q0,2.048-.128,4.093c-1.108.75-2.277,1.482-3.494,2.184s-2.412,1.342-3.59,1.924q-1.859-.891-3.646-1.92T16.028,28.58q-.155-2.044-.156-4.1h0q0-2.05.153-4.1c1.107-.756,2.268-1.488,3.468-2.181s2.421-1.336,3.63-1.917q1.836.892,3.606,1.912t3.482,2.155q.147,2.056.147,4.118Zm2.151-11.45c4.319-.84,7.576-.275,8.392,1.138.869,1.505-.377,4.83-3.493,8.333h0q-.258.29-.536.582a45.1,45.1,0,0,0-4.82-3.795,45.055,45.055,0,0,0-.912-5.955q.7-.172,1.369-.3Zm-.292,8.733a40.837,40.837,0,0,1,3.285,2.67,40.735,40.735,0,0,1-3.275,2.716q.052-1.335.051-2.672,0-1.358-.062-2.715Zm8.7,13.014c-.817,1.419-3.974,2.011-8.211,1.209q-.728-.137-1.494-.327a45.12,45.12,0,0,0,.871-6.029,44.826,44.826,0,0,0,4.8-3.858q.4.412.755.82h0a16.264,16.264,0,0,1,3.154,5.031,3.969,3.969,0,0,1,.121,3.153Z" transform="translate(-3.104 -2)" fill="#fff"></path></svg>
                        <Typography sx={{
                            marginLeft: 2,
                            fontFamily: 'Inter',
                            fontSize: { xs: '1.7rem', md: '2rem' },
                            fontWeight: '600',
                            color: 'white',
                            lineHeight: 1.1,
                        }}>
                            <span style={{ textDecoration: 'underline #DF058D 7px', textUnderlineOffset: '1px' }}>Website</span><br />Development
                        </Typography>
                    </Box>
                    <Box>
                        <Typography sx={{ color: 'white', fontFamily: 'Inter', opacity: 0.3 }}>&lt;h3&gt;</Typography>
                        <Box sx={{ display: 'flex' }}>
                            <Box sx={{
                                mx: 2.5,
                                width: '1px',
                                border: '1px solid white',
                                height: 'auto',
                                opacity: 0.3
                            }}></Box>
                            <Typography sx={{ color: 'white', fontFamily: 'Inter', fontStyle: 'italic', lineHeight: 2 }}>Continuously expanding expertise in MERN Stack.<br />Developing modern and scalable applications using React.js, Express, Node.js and MongoDB</Typography>
                        </Box>
                        <Typography sx={{ color: 'white', fontFamily: 'Inter', opacity: 0.3 }}>&lt;h3&gt;</Typography>
                    </Box>
                </Box>
                <Box sx={{
                    width: { xs: '100%', md: '50%' },
                    p: 5
                }}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: 2
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42"><path d="M18,34.111l-1.667,6.667L14.111,43H31.889l-2.222-2.222L28,34.111M3,25.222H43M7.444,34.111H38.556A4.444,4.444,0,0,0,43,29.667V7.444A4.444,4.444,0,0,0,38.556,3H7.444A4.444,4.444,0,0,0,3,7.444V29.667A4.444,4.444,0,0,0,7.444,34.111Z" transform="translate(-2 -2)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>
                        <Typography sx={{
                            marginLeft: 2,
                            fontFamily: 'Inter',
                            fontSize: { xs: '1.7rem', md: '2rem' },
                            fontWeight: '600',
                            color: 'white',
                            lineHeight: 1.1,
                        }}>
                            <span style={{ textDecoration: 'underline #FF6B2B 7px', textUnderlineOffset: '1px' }}>Data Structures</span><br />and Algorithms
                        </Typography>
                    </Box>
                    <Box>
                        <Typography sx={{ color: 'white', fontFamily: 'Inter', opacity: 0.3 }}>&lt;h3&gt;</Typography>
                        <Box sx={{ display: 'flex' }}>
                            <Box sx={{
                                mx: 2.5,
                                width: '1px',
                                border: '1px solid white',
                                height: 'auto',
                                opacity: 0.3
                            }}></Box>
                            <Typography sx={{ color: 'white', fontFamily: 'Inter', fontStyle: 'italic', lineHeight: 2 }}>Eagerly understanding DSA concepts and proficient in using C++ for implementing them.<br />Applied knowledge of algorithms and data structures to solve complex problems efficiently.</Typography>
                        </Box>
                        <Typography sx={{ color: 'white', fontFamily: 'Inter', opacity: 0.3 }}>&lt;h3&gt;</Typography>
                    </Box>
                </Box>
            </Box>
            <Box sx={{
                width: { xs: '100%', md: '40%'},
                transform: {xs: 'translateY(-40px)', md: 'translateY(-20px)'},
                opacity: 0.2,
                px: 3
            }}>
                <img src={codepic} style={{
                    width: "100%",
                    
                }} />
            </Box>
        </Box>
    )
}
