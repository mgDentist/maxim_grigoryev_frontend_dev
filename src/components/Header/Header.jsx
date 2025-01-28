import { NavLink } from 'react-router-dom';

import logo from '../../assets/logoMG.svg';

import './Header.scss';

const Header = () => {
    return (
        <header className='header'>
            <NavLink to='/' className='logo-wrapper'>
                <img width="100" height="100" src={logo} alt="Logo MG"></img>
                <div className='text-logo-wrapper'>
                    <span className='gradient-text'>frontend</span>
                    <span className='gradient-text'>developer</span>
                </div>
            </NavLink>
            <nav className='nav'>
                <NavLink to='/my_path'>My Path</NavLink>
                <NavLink to='/projects'>My Projects</NavLink>
                <NavLink to='/contacts'>Contacts</NavLink>
                {/* <NavLink to='/blog'>Blog</NavLink> */}
            </nav>
        </header>
    );
};

export default Header;