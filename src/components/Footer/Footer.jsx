import LinksFooter from "../LinksFooter/LinksFooter";

import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <p>Copyright © 2024 Maksim Grigorev</p>
            <p>Coded with ❤️ by MG</p>
            <LinksFooter />
        </footer>
    )
};

export default Footer;