import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import logo from '../Images/logo.png';
import { Link } from 'react-scroll';
import { Drawer } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const pages = ['home', 'about', 'projects', 'contact'];

export default function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="fixed" color="transparent" style={{ boxShadow: 'none', backdropFilter: 'blur(18px) brightness(70%)' }} >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                        <img width={70} src={logo} alt='' style={{ marginRight: 10 }} onClick={handleOpenNavMenu} />
                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                        <img width={70} src={logo} alt='' style={{ marginRight: 10 }} />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'Inter',
                                fontWeight: 500,
                                fontSize: '1.5rem',
                                color: 'white',
                                textDecoration: 'none',
                            }}
                        >
                            Akshat Gautam
                        </Typography>
                        <Typography
                            variant="h6"
                            noWrap
                            sx={{
                                pr: 2.5,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'Caveat',
                                fontWeight: 400,
                                fontSize: '1.3rem',
                                color: 'white',
                                alignSelf: 'flex-end',
                                lineHeight: 1
                            }}
                        >
                            ~ Code is poetry
                        </Typography>
                    </Box>




                    {/* Menu Icon and Sidebar controls */}
                    <Drawer open={Boolean(anchorElNav)} onClose={handleCloseNavMenu} PaperProps={{ sx: { backgroundColor: 'whitesmoke' } }}>
                        <CloseIcon sx={{ fontSize: 30, mx: 3, my: 4 }} onClick={handleCloseNavMenu} />
                        {pages.map((page) => (
                            <Box sx={{ width: '20em' }}>
                                <Button
                                    key={page}
                                    sx={{ my: 0.5, mx: 3, color: 'black', display: 'block', textTransform: 'lowercase', fontFamily: 'Inter', fontSize: '1rem', fontWeight: '600', letterSpacing: '-0.5px' }}
                                >
                                    <Link
                                        onClick={handleCloseNavMenu}
                                        to={page}
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                    >
                                        {"// " + page}
                                    </Link>
                                </Button>
                            </Box>
                        ))}
                        <Typography sx={{
                            fontFamily: 'Inter',
                            fontSize: '0.8rem',
                            marginLeft: 4,
                            my: 4,
                            lineHeight: 2
                        }}>©2024<br />Made with passion by <Typography sx={{
                            display: 'inline',
                            fontFamily: 'Caveat',
                            fontSize: '1.2rem',
                            fontWeight: 'bolder'
                        }}>Akshat Gautam</Typography></Typography>
                    </Drawer>




                    <Box sx={{ display: 'flex', flexDirection: 'column', my: 1.5 }}>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'Inter',
                                fontWeight: 500,
                                fontSize: '1.5rem',
                                color: 'white',
                                textDecoration: 'none',
                            }}
                        >
                            Akshat Gautam
                        </Typography>
                        <Typography
                            variant="h6"
                            noWrap
                            sx={{
                                pr: 2.5,
                                display: { xs: 'flex', md: 'none' },
                                fontFamily: 'Caveat',
                                fontWeight: 400,
                                fontSize: '1.3rem',
                                color: 'white',
                                alignSelf: 'flex-end',
                                lineHeight: 1
                            }}
                        >
                            ~ Code is poetry
                        </Typography>
                    </Box>


                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                sx={{ my: 2, mx: 2, color: '#02BCC3', display: 'block', textTransform: 'lowercase', fontFamily: 'Inter', fontSize: '1.1rem', fontWeight: '500', letterSpacing: '-0.5px' }}
                            >
                                <Link
                                    to={page}
                                    spy={true}
                                    smooth={true}
                                    offset={-70} // Adjust this value to offset the scroll position
                                    duration={500}
                                >
                                    {"// " + page}
                                </Link>
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ display: 'flex', flexGrow: 0.1, justifyContent: 'center' }}>
                        <Button variant='outlined' sx={{ color: '#02BCC3', borderColor: '#02BCC3', display: { xs: 'none', md: 'block' } }} href='/Resume.pdf'>Download CV</Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
