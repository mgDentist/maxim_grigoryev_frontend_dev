import { useState } from "react";
import { contactsAddresses, contactsQRs } from "../../DB/DB-contacts-addresses";

import './ContactAddress.scss';

const ContactAddress = () => {

    const [clicked, setClicked] = useState(false);
    const [btnIndex, setBtnIndex] = useState(0)

    const handleClick = (index) => {
        setBtnIndex(index)
        setClicked(prevState => !prevState);
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
                            className={`btn ${btnIndex === index ? "btn--clicked" : ""}`}
                            onClick={() =>handleClick(index)}
                        >
                            {clicked ? "Hide QR code" : "Show QR code"}
                        </button>

                        <div
                            className="qr-code__img-container"
                        >
                            <img
                                src={qr.route}
                                width="300"
                                height="400"
                            ></img>
                        </div>

                    </li>
                ))}
            </ul>
        </div>
    )
};

export default ContactAddress;