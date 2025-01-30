import style from './UnderNda.module.scss';

const UnderNda = () => {
    return (
        <div className={style.ndaContainer}>
            <h2>
                Due to legal and ethical obligations under <b className={style.ndaBoldText}>NDAs</b>, I am unable to showcase my projects. Instead, I present my technology stack and the tasks I have performed:</h2>
            <div className={style.ndaInnerContainer}>
                <h3>Skills</h3>
                <ul>
                    <li>ReactJS, Redux</li>
                    <li>JavaScript (ES5, ES6)</li>
                    <li>HTML, PUG</li>
                    <li>CSS, SCSS</li>
                    <li>BEM Methodology</li>
                    <li>Git, GitHub, GitLab</li>
                    <li>Gulp, Webpack, Vite</li>
                    <li>Figma, Pixso</li>
                </ul>
            </div>

            <div className={style.ndaInnerContainer}>
                <h3>Responsibilities & Achievements</h3>
                <ul>
                    <li>Utilized plugins and libraries</li>
                    <li>Met quality standards</li>
                    <li>Ensured cross-browser compatibility</li>
                    <li>Conducted self-testing</li>
                    <li>Created interactive UI components</li>
                    <li>Built responsive websites and landing pages</li>
                    <li>Optimized and styled React apps</li>
                    <li>Integrated APIs with frontend/backend</li>
                    <li>Enhanced web performance</li>
                    <li>Performed cross-browser testing</li>
                    <li>Managed code with Git</li>
                    <li>Implemented pixel-perfect designs</li>
                    <li>Automated with linters and tools</li>
                    <li>Communicated with clients effectively</li>
                    <li>Completed remote Frontend training</li>
                    <li>Participated in grading and assessments</li>
                    <li>Executed projects with testing and design</li>
                    <li>Developed responsive, high-quality applications</li>
                </ul>
            </div>

        </div>
    )
}

export default UnderNda;

