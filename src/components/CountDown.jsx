// eslint-disable-next-line no-unused-vars
import React from 'react'
import Countdown from "react-countdown";
export default function CountDown() {

    const handleComplete = () => {
        alert("Countdown finished!");
      };
  return (
    <div className="flex justify-center  items-center">
   
    <div className="">
    <Countdown
        date={Date.now() + 1296000000} 
        onComplete={handleComplete}
        renderer={({ days, hours, minutes, seconds }) => (
          <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
            <div className="flex flex-col p-2  bg-[#ffffffa0] bg-opacity-50 backdrop-blur-sm border-2 solid border-gray-300 rounded-box">
              <span className="countdown font-mono  text-[2.5rem] md:text-5xl">{days}</span>
              days
            </div>
            <div className="flex flex-col p-2 bg-[#ffffffa0] bg-opacity-50 backdrop-blur-sm border-2 solid border-gray-300 rounded-box">
              <span className="countdown font-mono text-[2.5rem] md:text-5xl">{hours}</span>
              hours
            </div>
            <div className="flex flex-col p-2 bg-[#ffffffa0] bg-opacity-50 backdrop-blur-sm border-2 solid border-gray-300 rounded-box">
              <span className="countdown font-mono text-[2.5rem] md:text-5xl">{minutes}</span>
              min
            </div>
            <div className="flex flex-col p-2 bg-[#ffffffa0] bg-opacity-50 backdrop-blur-sm border-2 solid border-gray-300 rounded-box">
              <span className="countdown font-mono text-[2.5rem] md:text-5xl">{seconds}</span>
              sec
            </div>
          </div>
        )}
      />
    </div>
  </div>
  )
}
