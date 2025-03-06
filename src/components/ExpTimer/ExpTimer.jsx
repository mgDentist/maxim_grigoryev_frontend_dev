import { useState, useEffect } from "react";

import DoubleDots from "../SVG/DoubleDots";

import './ExpTimer.scss';

const ExpTimer = () => {
    const [elapsedTime, setElapsedTime] = useState({});
    const [isUpdated, setIsUpdated] = useState(false);

    useEffect(() => {
        const startDate = new Date('2023-01-16T00:00:00');

        const updateCounter = () => {
            const now = new Date();
            const difference = now - startDate;

            const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
            const months = Math.floor((difference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
            const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            setElapsedTime({ years, months, days, hours, minutes, seconds });
            setIsUpdated(prev => !prev);
        };

        updateCounter(); // Initial update
        const timer = setInterval(updateCounter, 1000); // Update every second

        return () => clearInterval(timer); // Cleanup on component unmount
    }, []);

    return (
        <div className="timer">
            <h3 className="timer__title">
                My experience in frontend development:
            </h3>
            <div className="timer-numbers-wrapper">
                <ul className="timer-numbers">
                    <li className="timer-numbers__item timer-numbers__item--years">
                        <p>{elapsedTime.years < 10 ? `0${elapsedTime.years}` : elapsedTime.years}</p>
                        <span>{elapsedTime.years === 1 ? 'year' : 'years'}</span>
                    </li>
                    <li className="timer-numbers__item timer-numbers__item--months">
                        <p>{elapsedTime.months < 10 ? `0${elapsedTime.months}` : elapsedTime.months}</p>
                        <span>{elapsedTime.months === 1 ? 'month' : 'months'}</span>
                    </li>
                    <li className="timer-numbers__item timer-numbers__item--days">
                        <p>{elapsedTime.days < 10 ? `0${elapsedTime.days}` : elapsedTime.days}</p>
                        <span>{elapsedTime.days === 1 ? 'day' : 'days'}</span>
                    </li>
                </ul>

                <ul className="timer-numbers timer-numbers__little">
                    <li className="timer-numbers__item timer-numbers__item--hours">
                        <p>{elapsedTime.hours < 10 ? `0${elapsedTime.hours}` : elapsedTime.hours}</p>
                        <span>{elapsedTime.hours === 1 ? 'hour' : 'hours'}</span>
                    </li>
                    <li className="timer-numbers__item timer-numbers__item--dots timer-numbers__item--dots-1">
                        <DoubleDots className={`timer-numbers__dots ${isUpdated ? 'updated' : ''}`} />
                    </li>
                    <li className="timer-numbers__item timer-numbers__item--minutes">
                        <p>{elapsedTime.minutes < 10 ? `0${elapsedTime.minutes}` : elapsedTime.minutes}</p>
                        <span>{elapsedTime.minutes === 1 ? 'minute' : 'minutes'}</span>
                    </li>
                    <li className="timer-numbers__item timer-numbers__item--dots timer-numbers__item--dots-2">
                        <DoubleDots className={`timer-numbers__dots ${isUpdated ? 'updated' : ''}`} />
                    </li>
                    <li className="timer-numbers__item timer-numbers__item--seconds">
                        <p>{elapsedTime.seconds < 10 ? `0${elapsedTime.seconds}` : elapsedTime.seconds}</p>
                        <span>{elapsedTime.seconds === 1 ? 'second' : 'seconds'}</span>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default ExpTimer;
