import React from "react";
import ReactDOM from "react-dom/client";

const Title = ()=>
    {
       return <h1>Title</h1>
    }


const Heading = ()=>
{
    
   return (
    <div>
    <Title/>
   <h1>From functional component</h1>
   </div>)
}



const root = ReactDOM.createRoot(document.getElementById('root'))

    

    root.render(<Heading/>);