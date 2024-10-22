import { Link } from 'react-router-dom';

import logo from '../../assets/logoMG.svg';

import './Header.scss';

const Header = () => {
    return (
        <header className='header'>
            <Link to='/' className='logo-wrapper'>
                <img width="100" height="100" src={logo} alt="Logo MG"></img>
                <div className='text-logo-wrapper'>
                    <span className='gradient-text'>frontend</span>
                    <span className='gradient-text'>developer</span>
                </div>
            </Link>
            <nav className='nav'>
                <Link to='/projects'>My projects</Link>
                <Link to='/contacts'>Contacts</Link>
                <Link to='/blog'>Blog</Link>
            </nav>
        </header>
    );
};

export default Header;