import footerLinks from "../../DB/DB-footerLinks";

import './LinksFooter.scss';

const LinksFooter = () => {
    return (
        <ul className="footer__links-container">
            {footerLinks.map((link) => (
                <li key={link.name}>
                    <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={`/${link.iconSvgRoute}`}
                            width='25'
                            height='25'
                            alt={link.alt}
                        />
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default LinksFooter;