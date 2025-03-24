import React
 from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count : 0,
        }
    }
    render(){
        return(
            <div >
            <h1>Name: {this.props.name}</h1>
            <h3>Location : CBE</h3>
            <button  onClick={ () => {
                this.setState ({
                    count: this.state.count +1
                })
            }}>Click : {this.state.count}</button>
            {console.log("render")}
            </div>
        )
    }
}
export default UserClass;