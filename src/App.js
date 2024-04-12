import './App.css';
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Testimonials from "./components/testimonials/Testimonials";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";

function App() {
    return (
        <>
            <Header/>
            <Nav/>
            <About/>
            <Experience/>
            <Services/>
            <Portfolio/>
            <Testimonials/>
            <Contact/>
            <Footer/>
        </>
    );
}

export default App;
