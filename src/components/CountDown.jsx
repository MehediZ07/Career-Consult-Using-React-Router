import React from 'react'
import Countdown from "react-countdown";
export default function CountDown() {

    const handleComplete = () => {
        alert("Countdown finished!");
      };
  return (
    <div className="flex justify-center  items-center">
    {/* Adjusting padding to reduce space */}
    <div className="">
    <Countdown
        date={Date.now() + 1296000000} // 15 days from now (in milliseconds)
        onComplete={handleComplete}
        renderer={({ days, hours, minutes, seconds }) => (
          <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
            <div className="flex flex-col p-2 bg-neutral rounded-box">
              <span className="countdown font-mono text-5xl">{days}</span>
              days
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-box">
              <span className="countdown font-mono text-5xl">{hours}</span>
              hours
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-box">
              <span className="countdown font-mono text-5xl">{minutes}</span>
              min
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-box">
              <span className="countdown font-mono text-5xl">{seconds}</span>
              sec
            </div>
          </div>
        )}
      />
    </div>
  </div>
  )
}
