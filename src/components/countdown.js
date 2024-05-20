import React, { useEffect, useState } from 'react';

function CountdownTimer({ dateTime }) {
  const [timeLeft, setTimeLeft] = useState(() => {
    const difference = new Date(dateTime) - new Date();
    return Math.max(0, Math.floor(difference / 1000)); // Convert milliseconds to seconds
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTimeLeft) => Math.max(0, prevTimeLeft - 1)); // Decrease time left by 1 second
    }, 1000); // Update every second

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      // Send notification when time is zero
      if (Notification.permission === "granted") {
        new Notification("Time's up!");
      } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then((permission) => {
          if (permission === "granted") {
            new Notification("Time's up!");
          }
        });
      }
    }
  }, [timeLeft]);

  // Convert timeLeft to hours, minutes, and seconds
  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <p>
      Time Left: {hours.toString().padStart(2, '0')}:{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
    </p>
  );
}

export default CountdownTimer;
