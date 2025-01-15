import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default App
