import StackIcons from '../StackIcons/StackIcons';
import ExpTimer from '../ExpTimer/ExpTimer';

import maxLogo from '../../assets/MG-avatar.webp';
import './Main.scss';

const Main = () => {
    return (
        <section className="main">
            <div className='main__container'>
                <img
                    src={maxLogo}
                    className='main__img'
                    width='200'
                    height='200'
                    alt='Content author Maxim Grigoryev'
                />
                <div className='main__text'>
                    <p>
                        Hi, I’m Maksim Grigorev — a frontend developer focused on clean, scalable, and responsive React interfaces. I turn Figma designs into pixel-perfect, maintainable components using React, Tailwind CSS / Styled Components, and Vite.
                    </p>
                    <p>
                        I care about accessibility, performance, and developer experience. From landing pages to full SPAs, I deliver consistent quality and support projects after launch — helping teams move faster without compromising on code or design.
                    </p>
                </div>
                <StackIcons />
            </div>
            <ExpTimer />
        </section>
    )
};

export default Main;