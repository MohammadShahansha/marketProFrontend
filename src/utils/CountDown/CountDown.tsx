"use client";
import React, { useEffect, useState } from "react";

export type CountdownProps = {
  targetDate: Date;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  style: any;
};

const CountDown = ({ targetDate, style }: CountdownProps) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +targetDate - +new Date();
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      return null; // Countdown complete
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, [targetDate]);

  if (!timeLeft) return <p>Countdown complete!</p>;
  return (
    <div className="flex flex-col md:flex-row gap-1">
      <div className="flex gap-1 text-center text-sm font-medium">
        <div
          className=" flex justify-center items-center gap-2 bg-white  rounded-lg px-3 py-2"
          style={{ ...style }}
        >
          <p>{timeLeft.days}</p>
          <p>Days</p>
        </div>
        {/* <p className="font-bold">:</p> */}
        <div
          className="flex justify-center items-center gap-2 bg-white  rounded-lg px-3 py-2 "
          style={{ ...style }}
        >
          <p>{timeLeft.hours}</p>
          <p>Hours</p>
        </div>
        {/* <p className="font-bold">:</p> */}
      </div>
      <div className="flex gap-1 text-center text-sm font-medium">
        <div
          className="flex justify-center items-center gap-2 bg-white  rounded-lg px-3 py-2"
          style={{ ...style }}
        >
          <p>{timeLeft.minutes}</p>
          <p>Min</p>
        </div>
        {/* <p className="font-bold">:</p> */}
        <div
          className="flex justify-center items-center gap-2 bg-white  rounded-lg px-3 py-2"
          style={{ ...style }}
        >
          <p>{timeLeft.seconds}</p>
          <p>Sec</p>
        </div>
      </div>
      {/* <div className="flex justify-start ">
        <div
          className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 w-[50px] text-center"
          style={{ ...style }}
        >
          <p>{timeLeft.seconds}</p>
          <p>Sec</p>
        </div>
      </div> */}
    </div>
  );
};

export default CountDown;
