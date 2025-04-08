import React from "react";
import UserContext from "../Utilities/UserContext.js"
class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            info:{
                login:"",
                avatar_url:"http://hi"
                
            }
        }
        
    }
    
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/Jayasuriya-R");
        const json = await data.json()

        this.setState({
            info: json,
         })
     }


    render(){
        

        const {login,avatar_url} = this.state.info
        return(
            <div className="mt-5">
            <h1><strong>Name: </strong> {login}</h1>
            <h3><strong>Location : </strong> Coimbatore</h3>
            <img className="w-25 h-25 ml-[55px] my-2 p-2" src={avatar_url}/>
             <h1 className="font-serif p-3">Web Developer</h1>
           

            </div>
        )
    }
}
export default UserClass;