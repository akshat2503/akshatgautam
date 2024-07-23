import { Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'



export default function Certifications() {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "//cdn.credly.com/assets/utilities/embed.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <Box id="certifications" sx={{
            height: 'auto',
            width: '100%',
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
                mb: 5,
            }}>
                My Certifications
            </Typography>

            <Box sx={{ flexDirection: 'row', display: { xs: 'none', md: 'flex' } }}>
                <Box sx={{ backgroundColor: 'white', borderRadius: '5px', height: '240px', mx: 3 }}>
                    <div data-iframe-width="345" data-iframe-height="270" data-share-badge-id="c622394a-510b-4047-bcb5-2012d82206e8" data-share-badge-host="https://www.credly.com"></div>
                </Box>
                <Box sx={{ backgroundColor: 'white', borderRadius: '5px', height: '240px', mx: 3 }}>
                    <div data-iframe-width="345" data-iframe-height="270" data-share-badge-id="fa33c5d2-69f4-4972-b753-4d343165e410" data-share-badge-host="https://www.credly.com"></div>
                </Box>
            </Box>

            <Box sx={{ flexDirection: 'column', display: { xs: 'flex', md: 'none' } }}>
                <Box sx={{ backgroundColor: 'white', borderRadius: '5px', height: '240px', my: 3 }}>
                    <div data-iframe-width="345" data-iframe-height="270" data-share-badge-id="c622394a-510b-4047-bcb5-2012d82206e8" data-share-badge-host="https://www.credly.com"></div>
                </Box>
                <Box sx={{ backgroundColor: 'white', borderRadius: '5px', height: '240px', my: 3 }}>
                    <div data-iframe-width="345" data-iframe-height="270" data-share-badge-id="fa33c5d2-69f4-4972-b753-4d343165e410" data-share-badge-host="https://www.credly.com"></div>
                </Box>
            </Box>


        </Box>

    )
}
