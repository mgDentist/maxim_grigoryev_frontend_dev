import contactsAddresses from "../../DB/DB-contacts-addresses";

// eslint-disable-next-line react/prop-types
const ContactAddress = ({ className }) => {

    return (
        <div className={className}>
            <ul>
                {contactsAddresses.map((item) => (
                    <li
                        className=""
                        key={item.key}>
                        <b>{item.label}:</b>
                        <span>{item.description}</span>
                    </li>
                ))}
            </ul>

        </div>
    )
};

export default ContactAddress;