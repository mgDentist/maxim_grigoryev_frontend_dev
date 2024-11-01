import { useState } from "react";
import { contactsAddresses, contactsQRs } from "../../DB/DB-contacts-addresses";

import './ContactAddress.scss';

const ContactAddress = () => {

    const [activeQR, setActiveQR] = useState(null);

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
                        <span>{item.description}</span>
                    </li>
                ))}
            </ul>

            <ul className="qr-code__container">
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
                            {activeQR === index ? "Hide QR code" : "Show QR code"}
                        </button>

                        <div className="qr-code__img-container">
                            <p>You can see here my QR's</p>
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
    )
};

export default ContactAddress;