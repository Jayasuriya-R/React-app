import Header from "./Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Contact = () => {
  return (
    <div className="bg-gray-800 w-screen h-screen flex justify-center items-center">
    <div className="bg-[#FCE9D7] border-2 border-black absolute w-11/12 h-10/12 ">
        
        <h2 className="p-8 mt-24 font-extrabold text-4xl">Contact us</h2>

        <p className="px-8 ml-5 font-bold text-2xl">Have Queries ? 😋😉🤖👉 
          Let's get connected ! <a href="https://www.linkedin.com/in/jayasuriya-r/" >
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a></p>
        
      <div className="p-10 ml-5 font-medium">
        <p className="my-2">
          <FontAwesomeIcon icon={faMapMarkerAlt} /><span className="p-3">Accenture, coimbatore.</span> 
        </p>
        <p className="my-2">
          <FontAwesomeIcon icon={faPhone} /> <span className="p-2"> +45 71 99 77 07</span>
        </p>
        <p>
          <FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:mail@sleeknote.com" className="p-2">mail@sleeknote.com</a>
        </p>
      </div>
     </div>

    </div>
  )
}

export default Contact
