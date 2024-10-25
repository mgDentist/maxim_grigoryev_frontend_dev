import { useState, useEffect } from "react";
import StackIconsDB from "../../DB/DB-stackIcons";

import './StackIcons.scss';

const StackIcons = () => {
    const [visibleIcons, setVisibleIcons] = useState([]);

    useEffect(() => {
        StackIconsDB.forEach((icon, index) => {
            setTimeout(() => {
                setVisibleIcons(prev => [...prev, icon.name])
            }, 150 * index)
        })

        // Очистка таймеров при размонтировании
        return () => {
            StackIconsDB.forEach((_, index) => {
                clearTimeout(150 * index);
            });
        };
    }, [])

    return (
        <ul className="stack-icons-container">
            {StackIconsDB.map((icon) => {
                return (
                    <li
                        key={icon.name}
                        className={`icon-item ${visibleIcons.includes(icon.name) ? 'visible' : ''}`}
                    >
                        <a
                            href={icon.href}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={`/${icon.route}`}
                                width='30'
                                height='30'
                                alt={icon.alt}
                            />
                        </a>
                    </li>
                )
            })}
        </ul>
    )
};

export default StackIcons;