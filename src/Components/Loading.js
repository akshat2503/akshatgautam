import React, { useEffect, useState } from 'react'
import loading from '../Images/loading.json'
import Lottie from 'react-lottie'
import { Box, Typography } from '@mui/material'



export default function Loading() {

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const handleLoad = () => {
            // Set loaded to true when the window has finished loading
            setTimeout(() => {
                setLoaded(true);
                // setVisible(false);
            }, 3000);
        };

        if (document.readyState === 'complete') {
            handleLoad();
        }

        // Attach the event listener for window.onload
        window.addEventListener('load', handleLoad);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, []);

    return (
        <Box sx={{
            width: '100%',
            height: '100vh',
            position: 'fixed',
            zIndex: '10000',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#16202a',
            transform: `translateY(${loaded ? '-100%' : '0'})`, // Apply translation based on loaded state
            transition: 'transform 1s ease-in', // Add a smooth transition,
            paddingBottom: { xs: 20, md: 0 }
        }}>
            <Lottie options={{ loop: true, animationData: loading }} height={400} />
            <Typography sx={{ color: 'white', opacity: '0.7', fontFamily: 'Inter', fontSize: '1.8rem', fontWeight: '700', fontStyle: 'italic', animation: `${!loaded ? 'fade-in 1s ease-in' : ''}` }}>Develop... Test... Deploy...</Typography>
        </Box>
    )
}
