import React from "react";
import List from "./List"
import Header from "./Header";
import Top from "./Top";


   

function Layout()
{



    

    return(
    <>
        <div className="Main bg-gray-700 w-full h-[1000px] flex flex-col  items-center ">
              <Top/>

         
           <div className="App bg-gray-200   border-2  lg:w-1/3  md:w-1/2  sm:w-full xs:w-full  h-4/5 rounded-lg shadow-lg ">
              <Header/>
              <List/>
           
         </div>

        
        </div>
    </>
    )

}

export default Layout;