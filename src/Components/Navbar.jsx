import { Link } from "react-router-dom"
import Logo from '../assets/Logo.svg'
import Home from '../assets/Home.svg'
import About from '../assets/About.svg'
import Events from '../assets/Events.svg'
import Gallery from '../assets/Gallery.svg'
import Contacts from '../assets/Contacts.svg'
import FeedBack from '../assets/FeedBack.svg'
import './Nav.css'


export default function Navbar(){
    return(
        <>
        <nav className="nav-body">
    <span className="icon"><img src={Logo} alt="Campus Connect Logo"/>CampusConnect</span>
            <ul className="nav-list">
            <li className="nav-items"><img src={Home} alt="Home" /><Link className="route" to="/">Home</Link></li>
            <li className="nav-items"><img src={About} alt="About" /><Link className="route" to="/about">About</Link></li>
            <li className="nav-items"><img src={Events} alt="Events" /><Link className="route" to="/events">Events</Link></li>
            <li className="nav-items"><img src={Gallery} alt="Gallery" /><Link className="route" to="/gallery">Gallery</Link></li>
            <li className="nav-items"><img src={Contacts} alt="Contacts" /><Link className="route" to="/contact">Contact</Link></li>
            <li className="nav-items"><img src={FeedBack} alt="FeedBack" /><Link className="route" to="/feedback">Feedback</Link></li>
            </ul>
        </nav>
        </>
    )
}