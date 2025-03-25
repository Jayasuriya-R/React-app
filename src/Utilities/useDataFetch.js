import { useState, useEffect } from "react"
import { resObj } from "../Utilities/mockdata"


const useDataFetch = (resId) =>{

    const [resData, setResData] = useState(null)
    return(
        useEffect(()=> {
            setTimeout(()=> {
                setResData(resObj[resId])
            },500)
         },[])
    )
}

export default useDataFetch;