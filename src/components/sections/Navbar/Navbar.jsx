import { useRef, useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { logo } from '../../../assets';
import { navLinks } from '../../../constants';
import './navbar.css';

function Navbar() {
    const navRef = useRef();
    const [navbar, setNavbar] = useState(false)

    const showNavBar = () => {
        navRef.current.classList.toggle('responsive-nav');
    }

    const changeNavbackground = () => {
        if (window.scrollY >= 48) {
            setNavbar(true);
        }
        else {
            setNavbar(false);
        }
    }

    useEffect(() => {
        changeNavbackground();
        window.addEventListener('scroll', changeNavbackground);

        return () => {
            window.removeEventListener('scroll', changeNavbackground);
        }
    });

    return (
        <header className={navbar ? 'navbar active' : 'navbar'}>
            <h3>
                <img src={logo} alt='logo' className='nav-logo' />
            </h3>
            <nav ref={navRef}>
                {navLinks.map((link) => (
                    <a href={`#${link.id}`}>{link.title}</a>
                ))}
                <button onClick={showNavBar} className='nav-btn nav-close'>
                    <FaTimes />
                </button>
            </nav>
            <button className='nav-btn' onClick={showNavBar}>
                <FaBars />
            </button>
        </header>
    )
}

export default Navbar;