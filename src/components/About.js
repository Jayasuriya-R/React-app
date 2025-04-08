import Header from "./Header";
import UserClass from "./UserClass";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

class About extends React.Component{
     constructor(props){
        super(props)
        
     }
    render(){
    
        return(
            <div className="relative">
            <div className="h-60 bg-pink-800 border-2 relative flex justify-center ">
            <h1 className="font-bold justify-center text-xl mt-10 font-stretch-expanded">About</h1>
            </div>
            <div className="border-2 ml-[500px] w-52 h-60 text-center absolute top-[0.25px] left-10 mt-[120px] bg-black text-white shadow-xl rounded-2xl">
            
           
            <UserClass name={"Web Developer(class)"}/>
            </div>
            <div className="mt-44 ml-[300px]">
            <p className="font-extrabold pb-2">“Passionate about crafting responsive, user-friendly websites with a focus on modern design.”</p>
            <div className="flex justify-between w-32 ml-[280px] cursor-pointer">
            <a href="https://github.com/yourprofile" >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>   

        <a href="https://www.linkedin.com/in/jayasuriya-r/" >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          </div>
        </div>
            </div>
        )
    
    }
}

   
export default About;