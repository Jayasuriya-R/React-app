import { useState, useContext } from "react"
import { useId } from 'react';
import { useDispatch } from "react-redux";
import { addItem } from "../Utilities/cartSlice";


const ResMenuAccordian = ({data})=>{
    const id = useId()
    const[showBtn, setShowBtn] = useState(false)
    
    const dispatch = useDispatch()

    const handleAddItem = (item)=>{
        dispatch(addItem(item))
    }

    return(  
            <ul>  
            {data.map((x,index) => {
                return (<div key={index} className="">
                <div key={id} className="flex justify-between border-b-1 px-2 h-24"> <li className="my-4 py-2  border-gray-300 text-stone-900 font-medium">{x.name} - ₹ {x.price}</li> 
                <div className="my-2 absolute ml-[420px] transition-transform duration-300 hover:scale-105" ><img className="w-24 h-20 rounded-2xl" src={x.imgid}/></div>
                {console.log(x.imgid)}
                <button className="border-1 max-h-9 mt-7 mr-4 min-w-[50px] rounded-lg bg-orange-300 text-black cursor-pointer border-b-0 hover:bg-orange-600" 
                onClick={() => handleAddItem(x)} > Add </button>
                
                </div>
                </div>)
                
            } )}
            </ul>   
    )
}

export default ResMenuAccordian