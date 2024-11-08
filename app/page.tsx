"use client";
import { useState, useEffect } from "react";

export default function UpcomingPage() {
  const targetDate = new Date("2024-12-31T23:59:59").getTime(); // Adjust date as needed
  const [timeLeft, setTimeLeft] = useState(targetDate - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(targetDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const getTimeUnits = (time: number) => {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);
    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = getTimeUnits(timeLeft);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-bounce">
        We&apos;re Launching Soon!
      </h1>
      <p className="text-xl md:text-2xl mb-12 text-gray-300">
        Stay tuned for something amazing.
      </p>
      <div className="flex space-x-4 text-center">
        <div className="bg-gray-800 p-4 rounded-lg">
          <p className="text-5xl font-bold animate-pulse">{days}</p>
          <span className="text-gray-400">Days</span>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <p className="text-5xl font-bold animate-pulse">{hours}</p>
          <span className="text-gray-400">Hours</span>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <p className="text-5xl font-bold animate-pulse">{minutes}</p>
          <span className="text-gray-400">Minutes</span>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <p className="text-5xl font-bold animate-pulse">{seconds}</p>
          <span className="text-gray-400">Seconds</span>
        </div>
      </div>
    </div>
  );
}
