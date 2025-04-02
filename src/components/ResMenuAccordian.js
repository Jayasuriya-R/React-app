import { useState } from "react"
import { useId } from 'react';


const ResMenuAccordian = ({data})=>{
    const id = useId()
  
    const[showBtn, setShowBtn] = useState(false)
    return(  
            <ul>  
            {data.map((x,index) => {
                return (<div className="">
                <div key={index} className="flex justify-between border-b-1 px-2"> <li className="my-4 py-2  border-gray-300 text-stone-900 font-medium">{x.name} - ₹ {x.price}</li> 
                <button className="border-1 max-h-9 m-4 min-w-[50px] rounded-lg bg-orange-300 text-black cursor-pointer border-b-0" > Add </button>
    
                </div>
                {showBtn &&
                
                <div key={id} className="flex justify-end relative bottom-6 right-3">
                    <button className="bg-black text-white mx-1 border border-black w-8 h-4 flex items-center justify-center rounded-xs mt-[5px] cursor-pointer">-</button>  <button className="bg-black text-white mx-1 border border-black w-8 h-4 flex items-center justify-center rounded-xs mt-[5px] cursor-pointer">+</button>
                    </div>
                    }
                </div>)
                
            } )}
            </ul>   
    )
}

export default ResMenuAccordian