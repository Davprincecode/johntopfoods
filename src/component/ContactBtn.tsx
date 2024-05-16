// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faWhatsapp } from "@fortawesome/free-solid-svg-icons";
import whatsAppLogo from "../assets/images/whatsapp2bg.png";


function ContactBtn() {
  return (
    <div className='contactUs'>
        <p>Need Help? <strong>Chat with us</strong></p>

        <div className="imgWhatapp">
            <img src={whatsAppLogo} alt="" />
        </div>

    </div>
  )
}

export default ContactBtn