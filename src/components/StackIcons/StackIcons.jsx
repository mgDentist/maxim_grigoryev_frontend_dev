import StackIconsDB from "../../DB/DB-stackIcons/DB-stackIcons";

import './StackIcons.scss';

const StackIcons = () => {
    return (
        <ul className="stack-icons-container">
            {StackIconsDB.map((icon) => (
                <li key={icon.name}>
                    <img src={`/${icon.route}`}
                        width='35'
                        height='35'
                        alt={icon.alt}
                    />
                </li>
            ))}
        </ul>
    )
};

export default StackIcons;