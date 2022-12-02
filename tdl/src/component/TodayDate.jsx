const React = require('react');



let current_date = new Date().toLocaleDateString();

let current_time = new Date().toLocaleTimeString();

let cur_date  = new Date();

cur_date = cur_date.getHours();

let wish = "";

if(cur_date>12 && cur_date<17)
wish = "Good Afternoon";

else if(cur_date>=0  && cur_date<12)
wish = "Good Morning";

else if(cur_date>17)
wish= "Good Evening";

else 
wish = "Hello"


function TodayDate()
{
    return(
        <>
         
  
   
  
    
        
        <h1 class="g  bg-red-400 p-2 m-4  rounded-lg text-xl text-white font-bold ">{current_date}</h1>
        
    
    
   

   
    <p class="w m-4 bg-gradient-to-r from-orange-500 to-orange-300 text-white font-bold text-xl  rounded-lg flex  items-center p-2 ">{wish}</p>
  



        </>
    )

    }



    export default TodayDate;

