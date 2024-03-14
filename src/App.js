import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Skillset from './Components/Skillset';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import ScrollToTopButton from './Components/ScrollToTopButton';
import Loading from './Components/Loading';
import About from './Components/About';
import AnimatedCursor from 'react-animated-cursor';

function App() {
    return (
        <>
            <AnimatedCursor
                innerSize={8}
                outerSize={30}
                innerScale={1}
                outerScale={2}
                outerAlpha={0.2}
                hasBlendMode={true}
                trailingSpeed={6}
                innerStyle={{
                    backgroundColor: '#fff', zIndex: '99999'
                }}
                outerStyle={{
                    border: '3px solid #02BCC3', zIndex: '99999'
                }}
            />
            <Loading />
            <Navbar />
            <Hero />
            <About />
            <Skillset />
            <Projects />
            <Contact />
            <ScrollToTopButton />
        </>
    );
}

export default App;
