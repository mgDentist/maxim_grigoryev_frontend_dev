import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Squash as Hamburger } from 'hamburger-react'
import logo from '../../assets/logoMG.svg';

import './Header.scss';

const Header = () => {
    const [isOpen, setOpen] = useState(false)

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    return (
        <header className='header'>
            <div className='logo-wrapper'>
                <img width="100" height="100" src={logo} alt="Logo MG"></img>
                <div className='text-logo-wrapper'>
                    <span className='gradient-text'>frontend</span>
                    <span className='gradient-text'>developer</span>
                </div>
            </div>
            <nav className={`nav ${isOpen ? 'is-open' : ''}`}>
                <NavLink onClick={() => setOpen(false)} to='/'>Main Page</NavLink>
                <NavLink onClick={() => setOpen(false)} to='/my_path'>My Path</NavLink>
                <NavLink onClick={() => setOpen(false)} to='/projects'>My Projects</NavLink>
                <NavLink onClick={() => setOpen(false)} to='/contacts'>Contacts</NavLink>
                {/* <NavLink to='/blog'>Blog</NavLink> */}
            </nav>

            <Hamburger
                toggled={isOpen}
                toggle={setOpen}
                size={25}
                rounded
            />
        </header>
    );
};

export default Header;