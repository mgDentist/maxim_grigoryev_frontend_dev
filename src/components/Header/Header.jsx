import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Squash as Hamburger } from 'hamburger-react'
import logo from '../../assets/logoMG.svg';

import './Header.scss';

const Header = () => {
    const [isOpen, setOpen] = useState(false)

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
                <NavLink onClick={() => setOpen()} to='/'>Main Page</NavLink>
                <NavLink onClick={() => setOpen()} to='/my_path'>My Path</NavLink>
                <NavLink onClick={() => setOpen()} to='/projects'>My Projects</NavLink>
                <NavLink onClick={() => setOpen()} to='/contacts'>Contacts</NavLink>
                {/* <NavLink to='/blog'>Blog</NavLink> */}
            </nav>

            <Hamburger
                toggled={isOpen}
                toggle={setOpen}
                rounded
                onToggle={toggled => {
                    if (toggled) {
                        console.log(open)
                        // open a menu
                    } else {
                        // close a menu
                        console.log(close)
                    }
                }}
            />
        </header>
    );
};

export default Header;