import React from "react";
import { useState } from "react";
import TodayDate from "./TodayDate";
import Quotes from "./Quote";





function Top()
{
  
  let random = Quotes[Math.floor(Math.random()*Quotes.length)];
    
    return (
         
        <>
          <div className="Top bg-gradient-to-r from-cyan-500 to-blue-500 w-full h-20 mb-20 flex justify-between">
            <div className="Date  flex justify-between  w-1/4 shadow-lg">
               
               
               <TodayDate/>
                
            </div>

            <div className="Quote  w-1/2 shadow-lg flex justify-center items-center text-white text-lg font-bold">
               <p>{random}</p>
            </div>

            <div className="Quote  w-1/4 shadow-lg flex justify-center items-center text-3xl text-white">
               <p className="font-bold bg-white text-blue-800 rounded-2xl p-2">To Do List</p>
            </div>
          </div>
        </>
    )

}

export default Top;