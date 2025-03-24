import { resObj } from "../Utilities/mockdata"
import Shimmer from "./Shimmer"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const RestaurantMenu = ({resobj}) => {
 const [resData, setResData] = useState(null)
 const {resId} = useParams()
 useEffect(()=> {
    setTimeout(()=> {
        setResData(resObj[resId])
    },500)
 },[])
 

 if(resData == null) return <Shimmer/>
 const {name,costForTwo, cuisines,sla,areaName,totalRatingsString,foodMenu} = resData.card.card.info;
  return (
    <div className="menu">
        <h1>{name}</h1>
        <h3>{cuisines.join(" ,")} - {costForTwo} </h3>
        <p> Deliverable within <strong>{sla.slaString}</strong> </p>
        <p>Total Ratings - <strong>{totalRatingsString}</strong></p>
        <p>Located at - {areaName}</p>
        <h2>Menu</h2>
        <ul>
            {foodMenu.map((x,index) => {
                return <li key={index}>{x}</li>
            } )}
        </ul>
    </div>
  )
}

export default RestaurantMenu
