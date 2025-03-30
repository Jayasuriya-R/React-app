

const ResMenuAccordian = ({data})=>{

    return(  
            <ul>  
            {data.map((x,index) => {
                return <li key={index} className="my-4 py-2 border-b-1 border-gray-300 text-stone-900 font-medium">{x.name} - ₹ {x.price}</li>
            } )}
            </ul>   
    )
}

export default ResMenuAccordian