import React from "react";
import UserContext from "../Utilities/UserContext.js"
class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            info:{
                login:"dumy",
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
            <div >
            <h1>Name: {login}</h1>
            <h3>Location : CBE</h3>
            <img src={avatar_url}/>
            <UserContext.Consumer>
                {
                    ({loggedIn})=> <h1>{loggedIn}</h1>

                    
                }
            </UserContext.Consumer>
            <button></button>

            </div>
        )
    }
}
export default UserClass;