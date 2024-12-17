import { useState, useEffect } from "react";
import StackIconsDB from "../../DB/DB-stackIcons";

import './StackIcons.scss';

const StackIcons = () => {
    const [visibleIcons, setVisibleIcons] = useState([]);
    const [remainingIcons, setRemainingIcons] = useState([...StackIconsDB]); // Копия всех иконок

    useEffect(() => {
        const showRandomIcon = () => {
            if (remainingIcons.length === 0) return; // Завершаем, если все иконки показаны

            // Выбираем случайную иконку
            const randomIndex = Math.floor(Math.random() * remainingIcons.length);
            const [selectedIcon] = remainingIcons.splice(randomIndex, 1);

            // Добавляем иконку в видимые
            setTimeout(() => {
                setVisibleIcons((prev) => [...prev, selectedIcon.name]);

                // Рекурсивно запускаем показ следующей иконки
                showRandomIcon();
            }, 150); // Интервал между иконками (200 мс)
        };

        showRandomIcon(); // Запускаем первую итерацию

        return () => {
            setRemainingIcons([]); // Очистка массива при размонтировании компонента
        };
    }, []);

    return (
        <ul className="stack-icons-container">
            {StackIconsDB.map((icon) => (
                <li
                    key={icon.name}
                    className={`icon-item ${visibleIcons.includes(icon.name) ? 'visible' : ''}`}
                >
                    <a
                        href={icon.href}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={`/${icon.route}`}
                            width="30"
                            height="30"
                            alt={icon.alt}
                        />
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default StackIcons;
