import StackIcons from '../StackIcons/StackIcons';
import ExpTimer from '../ExpTimer/ExpTimer';

import maxLogo from '../../assets/MG-avatar.jpg';
import './Main.scss';

const Main = () => {
    return (
        <section className="main">
            <div className='main__container'>
                <img
                    src={maxLogo}
                    className='main__img'
                    width='250'
                    height='250'
                    alt='автор контента Максим Григорьев'
                />
                <p>Hello! I’m Maxim Grigoryev, a frontend developer specializing in React. My goal is to create modern, fast, and intuitive user interfaces. I transform complex challenges into elegant solutions, making web applications not just functional, but impressive. With a focus on crafting seamless user experiences, I’m ready to apply my skills to bring your project to life!</p>
                <StackIcons />
            </div>
            <ExpTimer />
        </section>
    )
};

export default Main;