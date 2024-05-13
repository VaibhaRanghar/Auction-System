import React, { useState, useEffect } from "react";

function Timer({ time }) {
  const [targetTime, setTargetTime] = useState(time); // Target time in HH:MM:SS format
  const [currentTime, setCurrentTime] = useState(new Date()); // Current time state
  const [timeRemaining, setTimeRemaining] = useState(null); // Remaining time in milliseconds

  useEffect(() => {
    const calculateRemainingTime = () => {
      const targetTimeMs = new Date(
        currentTime.getFullYear(),
        currentTime.getMonth(),
        currentTime.getDate(),
        targetTime.split(":")[0],
        targetTime.split(":")[1],
        targetTime.split(":")[2]
      ).getTime();
      const currentMs = currentTime.getTime();
      const remainingMs = targetTimeMs - currentMs;

      setTimeout(() => {
        if (remainingMs > 0) {
          setTimeRemaining(remainingMs);
        } else {
          // Target time has passed
          setTimeRemaining(0);
        }
      }, 100);
    };

    calculateRemainingTime();

    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
      calculateRemainingTime();
    }, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup function to clear interval on unmount
  }, [timeRemaining, currentTime, targetTime]); // Empty dependency array to run effect only once

  const getFormattedTime = (ms) => {
    const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((ms / (1000 * 60)) % 60);
    const seconds = Math.floor((ms / 1000) % 60);

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div>
      {timeRemaining === null ? (
        <p>Calculating...</p>
      ) : timeRemaining === 0 ? (
        <p>Target Time Reached!</p>
      ) : (
        <p> {getFormattedTime(timeRemaining)}</p>
      )}
    </div>
  );
}

export default Timer;
