import Header from "./Header";
import UserClass
 from "./UserClass";
const About = ()=> {
    return(
        <div className="about-card">
       
        <h1>About</h1>
        <h3>This is about the </h3>
        <UserClass name={"Surya(class)"}/>
        </div>
    )
}
export default About;