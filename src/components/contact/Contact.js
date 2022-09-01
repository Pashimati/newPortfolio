import MyForm from "../my-form/My-form";
import './Contact.scss'

import location from "../../assets/img/cons-cons-Icons-location.png"
import mail from "../../assets/img/cons-mail.png"
import mobile from "../../assets/img/Icons-Icons-Mobile.png"


const Contact = () => {
    return (
        <div className="contact-wrap">
               <div className="contact-form">
                   <h3 className="contact-title">Leave Us Your Info</h3>
                   <div className="form-wrap">
                       <MyForm/>
                   </div>
               </div>
            <div className="contact-info">
                <h3 className="contact-title">Contact Information</h3>
                <div className="contact-info__wrap">
                    <div className="contact-info__item">
                        <img className="contact-info__img" src={location} alt="icon-location"/>
                        <div className="contact-info__label">
                            <label>Country:</label>
                            <span>22</span>
                        </div>
                        <div className="contact-info__label">
                            <label>City:</label>
                            <span>22</span>
                        </div>
                        <div className="contact-info__label">
                            <label>Street:</label>
                            <span>22</span>
                        </div>
                    </div>
                    <div className="contact-info__item">
                        <img className="contact-info__img" src={mail} alt="icon-mail"/>
                        <div className="contact-info__label">
                            <label>Country:</label>
                            <span>22</span>
                        </div>
                        <div className="contact-info__label">
                            <label>City:</label>
                            <span>22</span>
                        </div>
                        <div className="contact-info__label">
                            <label>Street:</label>
                            <span>22</span>
                        </div>
                    </div>

                    <div className="contact-info__item">
                        <img className="contact-info__img" src={mobile} alt="icon-mobile"/>
                        <div className="contact-info__label">
                            <label>Country:</label>
                            <span>22</span>
                        </div>
                        <div className="contact-info__label">
                            <label>City:</label>
                            <span>22</span>
                        </div>
                        <div className="contact-info__label">
                            <label>Street:</label>
                            <span>22</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;