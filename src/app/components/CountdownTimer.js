"use client";
import { useEffect, useState } from 'react';
import styled, {keyframes} from 'styled-components';
import { formatDistanceToNow } from 'date-fns';

// Define keyframes for the colorful flow animation
const colorfulFlow = keyframes`
    0% {
        background-position: 0 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0 50%;
    }
`;

const TimerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background:
            url('/beach.svg') no-repeat center center fixed,  /* Background image */
            linear-gradient(270deg, #ff6f61, #6a11cb, #2575fc, #ff6f61);   /* Colorful overlay */
    background-size: 800% 800%;
    color: white;
    font-family: 'Arial', sans-serif;
    animation: ${colorfulFlow} 20s linear infinite;
    text-align: center;
    padding: 20px;

    @media (max-width: 768px) {
        padding: 10px;
    }
`;

const TimeDisplay = styled.div`
  font-size: 2rem;
  margin: 10px 0;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }

    @media (max-width: 480px) {
        font-size: 1rem;
    }
`;

const Title = styled.h1`
  font-size: 3rem;

    @media (max-width: 768px) {
        font-size: 2rem;
    }

    @media (max-width: 480px) {
        font-size: 1.5rem;
    }
`;

const calculateTimeRemaining = (targetDate) => {
    const now = new Date();
    const distance = new Date(targetDate) - now;

    if (distance <= 0) {
        return {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };
    }
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
};

const CountdownTimer = ({ targetDate }) => {
    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining(targetDate));

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeRemaining(calculateTimeRemaining(targetDate));
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <TimerWrapper>
            <Title>Global Wave Technology Beach Trip Countdown</Title>
            <TimeDisplay>
                {timeRemaining.days} days {timeRemaining.hours} hours {timeRemaining.minutes} minutes {timeRemaining.seconds} seconds
            </TimeDisplay>
        </TimerWrapper>
    );
};

export default CountdownTimer;
