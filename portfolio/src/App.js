import { Box } from '@mui/material';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Skillset from './Components/Skillset';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <Skillset />
            <Projects />
            <Contact />
            {/* <Box height={'400vh'}></Box> */}
        </>
    );
}

export default App;
