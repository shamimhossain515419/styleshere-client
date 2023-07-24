import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const initialCountdown = 250 * 86400; // 250 days converted to seconds
  const [countdown, setCountdown] = useState(initialCountdown);
  const [intervalId, setIntervalId] = useState(null);


  const formatTime = (timeInSeconds) => {
    const days = Math.floor(timeInSeconds / 86400);
    const hours = Math.floor((timeInSeconds % 86400) / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;


    return ` ${days} days   ${hours} hours  ${minutes} minutes   ${seconds} seconds`;
  };

  const startCountdown = () => {
    if (intervalId === null) {
      const id = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
      setIntervalId(id);
    }
  };

  const pauseCountdown = () => {
    if (intervalId !== null) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  const resetCountdown = () => {
    clearInterval(intervalId);
    setIntervalId(null);
    setCountdown(initialCountdown);
  };

  useEffect(() => {
    if (countdown === 0) {
      resetCountdown();
    }
  }, [countdown]);

  useEffect(() => {
    startCountdown();

    return () => pauseCountdown();
  }, []);

  return (
    <div>
      <div className=' flex justify-center items-center gap-4'>
        <div className=' text-3xl font-normal '>{formatTime(countdown)}</div>

      </div>

    </div>
  );
};

export default CountdownTimer;
