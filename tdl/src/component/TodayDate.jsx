const React = require('react');



let current_date = new Date().toLocaleDateString();

let cur_date  = new Date();

cur_date = cur_date.getHours();






function TodayDate()
{
    return(
        <>        
        <h1 class="g  bg-red-400 m-4 p-2  rounded-lg  text-white font-bold ">{current_date}</h1>
        </>
    )

    }



    export default TodayDate;

