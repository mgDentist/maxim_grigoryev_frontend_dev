import ContactAddress from '../../components/ContactAddress/ContactAddress';

import './Contacts.scss';

const Contacts = () => {
    return (
        <section className="contacts">
            <div className="contacts__container">
                <h3>Hello, everybody!</h3>
                <p>Here&apos;s all my contact information to stay in touch.</p>
                <p>Feel free to reach out through any of these channels.</p>

                <ContactAddress />
            </div>
        </section>
    )
}

export default Contacts;