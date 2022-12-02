import React from "react";
import { FaPlus ,FaGenderless } from "react-icons/fa";
import {  AiFillDelete} from "react-icons/ai";

function Task(props)
{
   
    console.log(props.today);
    return(
        <>
        
    
                    
       <div className="mt-1 mb-1  p-2">
         <FaGenderless className="text-xl text-white cursor-pointer"
          onClick={ () => 
          {props.selected(props.id,props.val)}
          }/>
       </div>


       <div className="Items w-4/5   rounded-lg text-white text-lg">

         <p>{props.val}</p>
         <p>{props.today}</p>
         
         

       </div>
    

       <div className="  flex  justify-end ">
        <AiFillDelete className="text-red-600 text-2xl mr-4 cursor-pointer  " 
        onClick = {() => {props.deleted(props.id,props.val)}}/>
       </div>
    
 </>
    )
}
export default Task;