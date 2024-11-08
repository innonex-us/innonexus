"use client";
import { useState, useEffect } from "react";

export default function UpcomingPage() {
  const targetDate = new Date("2024-11-16T23:59:59").getTime();
  const [timeLeft, setTimeLeft] = useState<number | null>(null);

  useEffect(() => {
    const calculateTimeLeft = () => targetDate - new Date().getTime();
    setTimeLeft(calculateTimeLeft());

    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
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

  // Only calculate time units if timeLeft is not null
  const { days, hours, minutes, seconds } = timeLeft
    ? getTimeUnits(timeLeft)
    : { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-6">
      <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-bounce text-center">
        InnoNexus - Empowering Innovation Across the Digital Spectrum
      </h1>
      <p className="text-lg md:text-xl mb-8 text-gray-300 text-center">
        Our website is launching soon. Stay tuned!
      </p>
      <div className="flex space-x-4 md:space-x-8 text-center">
        <div className="bg-gray-800 p-4 rounded-lg min-w-[70px] md:min-w-[100px]">
          <p className="text-3xl md:text-4xl font-bold animate-pulse">{days}</p>
          <span className="text-gray-400">Days</span>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg min-w-[70px] md:min-w-[100px]">
          <p className="text-3xl md:text-4xl font-bold animate-pulse">{hours}</p>
          <span className="text-gray-400">Hours</span>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg min-w-[70px] md:min-w-[100px]">
          <p className="text-3xl md:text-4xl font-bold animate-pulse">{minutes}</p>
          <span className="text-gray-400">Minutes</span>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg min-w-[70px] md:min-w-[100px]">
          <p className="text-3xl md:text-4xl font-bold animate-pulse">{seconds}</p>
          <span className="text-gray-400">Seconds</span>
        </div>
      </div>
      {/* <p className="mt-10 text-gray-400 text-center">
        Follow us on social media for updates:{" "}
        <a href="#" className="underline text-blue-400">Twitter</a>,{" "}
        <a href="#" className="underline text-blue-400">LinkedIn</a>,{" "}
        <a href="#" className="underline text-blue-400">GitHub</a>
      </p> */}
    </div>
  );
}
