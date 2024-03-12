import React, { useEffect, useState } from 'react'
import { Button } from 'react-scroll';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsVisible(scrollTop > 300);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <Button
            variant="contained"
            color="primary"
            onClick={scrollToTop}
            style={{ position: 'fixed', bottom: '20px', right: '20px', display: isVisible ? 'block' : 'none', padding: 10, border: 'none' }}
        >
            <ArrowUpwardIcon sx={{color: 'rgba(188, 96, 251, 1)'}}/>
        </Button>
    )
}
