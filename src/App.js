import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Skillset from './Components/Skillset';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import ScrollToTopButton from './Components/ScrollToTopButton';
import Loading from './Components/Loading';

function App() {
    return (
        <>
            <Loading />
            <Navbar />
            <Hero />
            <Skillset />
            <Projects />
            <Contact />
            <ScrollToTopButton />
        </>
    );
}

export default App;
