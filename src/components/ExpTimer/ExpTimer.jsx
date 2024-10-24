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
                My experience in frontend development:&nbsp;
            </h3>
            <div className="timer-numbers">
                <div className="timer-numbers__item timer-numbers__years">
                    <p>{elapsedTime.years}</p>
                    <span>{elapsedTime.years < 2 ? 'year' : 'years'}</span>
                </div>
                <div className="timer-numbers__item timer-numbers__months">
                    <p>{elapsedTime.months}</p>
                    <span>{elapsedTime.months < 2 ? 'month' : 'months'}</span>
                </div>
                <div className="timer-numbers__item timer-numbers__days">
                    <p>{elapsedTime.days}</p>
                    <span>{elapsedTime.days < 2 ? 'day' : 'days'}</span>
                </div>
                <div className="timer-numbers__item timer-numbers__hours">
                    <p>{elapsedTime.hours}</p>
                    <span>{elapsedTime.hours < 2 ? 'hour' : 'hours'}</span>
                </div>
                <DoubleDots className="timer-numbers__dots"/>
                <div className="timer-numbers__item timer-numbers__minutes">
                    <p>{elapsedTime.minutes}</p>
                    <span>{elapsedTime.minutes < 2 ? 'minute' : 'minutes'}</span>
                </div>
                <DoubleDots className="timer-numbers__dots"/>
                <div className="timer-numbers__item timer-numbers__seconds">
                    <p>{elapsedTime.seconds}</p>
                    <span>{elapsedTime.seconds < 2 ? 'second' : 'seconds'}</span>
                </div>
            </div>
        </div>
    )
};

export default ExpTimer;
