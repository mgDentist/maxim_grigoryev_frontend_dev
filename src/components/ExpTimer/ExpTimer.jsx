import { useState, useEffect } from "react";

import './ExpTimer.scss';

const ExpTimer = () => {
    const [elapsedTime, setElapsedTime] = useState({});

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
        };

        updateCounter(); // Initial update
        const timer = setInterval(updateCounter, 1000); // Update every second

        return () => clearInterval(timer); // Cleanup on component unmount
    }, []);

    return (
        <div className="timer__wrapper">
            <p>
                My experience in frontend development:&nbsp;
            </p>
            <span>
                {elapsedTime.years} {elapsedTime.years < 2 ? 'year' : 'years'}, &nbsp;
                {elapsedTime.months} {elapsedTime.months < 2 ? 'month' : 'months'}, &nbsp;
                {elapsedTime.days} {elapsedTime.days < 2 ? 'day' : 'days'}, &nbsp;
                {elapsedTime.hours} {elapsedTime.hours < 2 ? 'hour' : 'hours'}, &nbsp;
                {elapsedTime.minutes} {elapsedTime.minutes < 2 ? 'minute' : 'minutes'}, &nbsp;
                {elapsedTime.seconds} {elapsedTime.seconds < 2 ? 'second' : 'seconds'} &nbsp;
            </span>
        </div>
    )
};

export default ExpTimer;