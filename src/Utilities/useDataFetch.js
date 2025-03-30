import { useState, useEffect } from "react"
import { resObj } from "../Utilities/mockdata"


const useDataFetch = (resId) =>{

    const [resData, setResData] = useState(null)
    useEffect(()=> {
        setTimeout(()=> {
            setResData(resObj[resId])
        },500)
     },[])

    return resData
}


export default useDataFetch;