import Shimmer from "./Shimmer"
import { useState } from "react"
import { useParams } from "react-router-dom"
import useDataFetch from "../Utilities/useDataFetch"
import ResMenuAccordian from "./ResMenuAccordian"


const RestaurantMenu = ({resobj}) => {
 
const [showMenu, setShowMenu] = useState(false)
const [showLoc, setShowLoc] = useState(false)

 const {resId} = useParams()

 const dropDown = "🔻"
 const closeDropDown ="🔺"


 const handleClick = ()=> {
  showMenu?setShowMenu(false) : setShowMenu(true)
 }

 const handleLoc = ()=> {
  showLoc?setShowLoc(false) : setShowLoc(true)
 }
 
 const resData = useDataFetch(resId)

 if(resData == null) return <Shimmer/>
 const {name,costForTwo, cuisines,sla,areaName,totalRatingsString,foodMenu,locality} = resData.card.card.info;
  return (
    <div className="text-center">
        <h1 className="font-extrabold m-4 mr-56 ">{name}</h1>
        <div className="border-1 rounded-[15px] max-w-[400px] m-auto mb-10 shadow-md p-5 bg-gray-200">
        <h3 className="font-bold mb-2">{cuisines.join(" ,")} - {costForTwo} </h3>
        <p> Deliverable within <strong className="text-red-400">{sla.slaString}</strong> </p>
        <p>Total Ratings - <strong className="text-red-400">{totalRatingsString}</strong></p>
      
        </div>
        <hr className="max-w-[600px] m-auto mb-3"/>

        <div className="m-auto bg-gray-50 border-gray-200 w-[50%] p-2 rounded-[10px] shadow-lg cursor-pointer transition-all duration-300 ease-in-out ">
            <div className="flex justify-between bg-gray-200 rounded-lg px-2 " onClick={handleClick}>
            <h2 className="font-medium text-lg">Menu</h2>
            <span>{showMenu? closeDropDown:dropDown }</span>
            </div>
            { showMenu && <ResMenuAccordian data={foodMenu}/>}
            {console.log(foodMenu)}
        </div>
        <div className="m-auto bg-gray-50 border-gray-200 w-[50%] p-2 rounded-[10px] shadow-lg cursor-pointer mt-4">
            <div className="flex justify-between bg-gray-200 rounded-lg px-2" onClick={handleLoc}>
            <h2 className="font-medium text-lg">Address</h2>
            <span>{showLoc? closeDropDown:dropDown }</span>
            </div>
            { showLoc &&
            <div>
            <h3>Located at - <strong>{areaName}</strong></h3>
            <h3 className="font-medium">{locality}</h3>
            </div>
              }
            </div>
     </div>
    
  )
}

export default RestaurantMenu;
