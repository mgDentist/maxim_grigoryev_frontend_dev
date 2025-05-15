import LinksFooter from "../LinksFooter/LinksFooter";

import './Footer.scss';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <p>Copyright © {currentYear} Maksim Grigorev</p>
            <p>Coded with ❤️ by MG</p>
            <LinksFooter />
        </footer>
    )
};

export default Footer;