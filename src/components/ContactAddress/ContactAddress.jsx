import { useState } from "react";
import { contactsAddresses, contactsQRs } from "../../DB/DB-contacts-addresses";

import './ContactAddress.scss';

const ContactAddress = () => {

    const [activeQR, setActiveQR] = useState(0);

    const handleClick = (index) => {
        setActiveQR((currentIndex) => (currentIndex === index ? null : index));
    };

    return (
        <div className="contacts-block">
            <ul className="contacts-block__list">
                {contactsAddresses.map((item) => (
                    <li
                        className="contacts-block__item"
                        key={item.key}>
                        <span><b>{item.label}:</b></span>
                        {item.key === 'email' ?
                            <a
                                href="mailto:maxgrigorev.front@gmail.com"
                                className="contacts-block__link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >{item.description}</a> :
                            <span>{item.description}</span>}
                    </li>
                ))}
            </ul>
            <div className="qr-code__container">
                <ul >
                    {contactsQRs.map((qr, index) => (
                        <li
                            key={qr.name}
                        >
                            <a
                                href={qr.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >{qr.name}</a>
                            <button
                                className={`btn ${activeQR === index ? "btn--clicked" : ""}`}
                                onClick={() => handleClick(index)}
                            >
                                {activeQR === index ? "Hide QR" : "Show QR"}
                            </button>

                            <div className="qr-code__img-container">
                                <div
                                    className={`qr-code__img-wrapper ${activeQR === index ? 'qr-code__img-wrapper--visible' : ''
                                        }`}
                                >
                                    <img
                                        src={qr.route}
                                        width="300"
                                        height="400"
                                        alt={qr.alt}
                                    />
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
};

export default ContactAddress;