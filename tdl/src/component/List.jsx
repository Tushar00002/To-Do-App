import React from "react";
import {useState} from 'react';
import { FaPlus} from "react-icons/fa";
import Task from "./Task";





    

function List()
{
   

    const [Items,setItems] = useState("");

    const [task,setTask] = useState([]);

    const [toggle , setToggle] = useState(true);

    const [Completed ,setCompleted] = useState([]);

    const [date,setDate] = useState([]);

    const [idate,setIdate]= useState("");

    const inputItems = (event) =>{
        setItems(event.target.value);
    };
    

    const addItems = () =>{

        
        setTask((olditems) => {
            return [...olditems , Items];

           
        });
        

        
          setDate((old) => {
            return [...old , idate]
          })
       
        
       setItems('');
        
    };

    function  completeTask (id,items){
        setTask((olditems) => {
               return olditems.filter((arrE,index)=> {

                
                    return  (index !== id);
               })
        })
         
        setCompleted((previosT)=>
        {
         return [...previosT , items ]
        })   
        

        
    };

    const  deleteItems = (id,items) => {

      setTask((olditems) => {
        return olditems.filter((arrE,index)=> {

         
             return  (index !== id);
        })
 })
      
  };

   

   const inputDate = (event) => {
    setIdate(event.target.value);
   } 

  

   



    return (
        <>
             <div className="List flex flex-col ">
                   <div className="Input bg-gray-100 flex flex-row justify-around items-center pt-4 pb-4 mr-1 ml-1 ">
                         
                         <div className="input  flex flex-row justify-between gap-5 ">
                         <input className="input_items p-2 rounded-lg w-5/6 shadow-lg" placeholder="Add Task" value={Items}
                          
                          onChange={inputItems}
                         
                         >

                         </input>

                         <input className="input_date mt-1 mb-1 ml-1 p-2 rounded-lg " type="date" onChange={inputDate}></input>
                         </div>
                          
                          <div className="rounded-xl  shadow-lg  ">
                                 <FaPlus className=" bg-gray-800 p-1 rounded-full cursor-pointer text-3xl text-white" onClick={addItems}/>
                          </div>

                          
                   </div>
                   <div className="d bg-gray-100  flex     gap-5 mr-1 ml-1 ">
                   <h1 className={` font-bold  rounded-lg p-2 m-1 cursor-pointer  ${toggle ? 'bg-white text-black' : 'bg-gray-800 text-white '}`} onClick = {() => setToggle(!toggle)} >Pending</h1>
                  <h1 className={` font-bold  rounded-lg p-2 m-1 cursor-pointer ${toggle ? 'bg-gray-800 text-white ' : 'bg-white text-black' }`} onClick = {() => setToggle(!toggle)}>Completed</h1>
                   </div>
                  
                
            

                <div className={`Pending bg-gradient-to-r from-gray-200 via-gray-200 to-gray-200   ${toggle ? 'hidden' : ''}`}>
                  {task.map( (val,index) =>{
                        
                        const todate = date[index];

                        console.log(todate);
                        
                               
                                 return (
                                    <>
                                    <div className="list bg-gray-600 m-3 rounded-lg flex justify-between items-center">
                                       
                                       <Task
                                          val = {val}
                                          key = {index}
                                          id  = {index}
                                          selected = {completeTask}
                                          today = {todate}
                                          deleted = {deleteItems}
                                          
                                         
                                       />
                                      
                                       </div>
                                    </>
                                 )
                                 
                           })}

                          
                </div>   

                <div className={`Pending  ${toggle ? ''  : 'hidden'}`}>
                 

                  

                  {Completed.map( (val) => {
                       
                       return(
                        <>
                        <div className=" bg-gradient-to-r from-green-400 to-green-200 m-3 rounded-lg flex justify-between items-center p-2 text-white ">
                        <p className="text-lg pl-2">{val}</p>
                        
                        </div>

                        </>
                       )
                        
                  })}                 
                                       
                  
                
                </div>        
              </div>
        </>
    )
}

export default List;