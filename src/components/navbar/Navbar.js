import "./Navbar.scss"
import img from '../../assets/img/me.png'
import inst from '../../assets/img/instagram.png'
import github from '../../assets/img/github.png'
import mail from '../../assets/img/email.png'
import linkedIn from '../../assets/img/linked-big-square-logo.png'
import telegram from '../../assets/img/telegram.png'
import { Line } from 'rc-progress';
const Navbar = () => {
    return (
        <nav id="mainNav">
            <div className="nav-grid-container">
                <div className="grid-item">
                   <div className="item-content">
                       <div className="item-content__img">
                           <img className="nav-img" src={img} alt="me"/>
                       </div>
                       <h4 className="item-content__title">
                           Pavel Kashubovich
                       </h4>
                       <span className="item-content__job">
                           Front-end developer
                       </span>
                       <ul className="item-content__contacts nav-list-contacts">
                           <li className="nav-list-contacts__item">
                               <img src={inst} alt="icon-instagram"/>
                           </li>
                           <li className="nav-list-contacts__item">
                               <img src={telegram} alt="icon-telegram"/>
                           </li>
                           <li className="nav-list-contacts__item">
                               <img src={mail} alt="icon-mail"/>
                           </li>
                           <li className="nav-list-contacts__item">
                               <img src={linkedIn} alt="icon-linkedIn"/>
                           </li>
                           <li className="nav-list-contacts__item">
                               <img src={github} alt="icon-github"/>
                           </li>
                       </ul>
                   </div>
                </div>
                <div className="grid-item info-me">
                    <div className="info-me__content">
                        <label>Age:</label>
                        <span>22</span>
                    </div>
                    <div className="info-me__content">
                        <label>Residence:</label>
                        <span>BY</span>
                    </div>
                    <div className="info-me__content">
                        <label>Freelance:</label>
                        <span className="active">Available</span>
                    </div>
                    <div className="info-me__content">
                        <label>Address:</label>
                        <span>Grodno, Belarus</span>
                    </div>
                </div>

                <div className="grid-item abilities">
                    <h4 className="abilities__title">Languages</h4>
                    <div className="progress-bar">
                        <label>English</label>
                        <Line percent={78} strokeWidth={3} strokeColor="#FFB400" />
                        <span>78%</span>
                    </div>
                    <div className="progress-bar">
                        <label>English</label>
                        <Line percent={33} strokeWidth={3} strokeColor="#FFB400" />
                        <span>33%</span>
                    </div>
                    <div className="progress-bar">
                        <label>English</label>
                        <Line percent={16} strokeWidth={3} strokeColor="#FFB400" />
                        <span>16%</span>
                    </div>
                </div>

                <div className="grid-item abilities">
                    <h4 className="abilities__title">Skills</h4>
                    <div className="progress-bar">
                        <label>English</label>
                        <Line percent={78} strokeWidth={3} strokeColor="#FFB400" />
                        <span>78%</span>
                    </div>
                    <div className="progress-bar">
                        <label>English</label>
                        <Line percent={33} strokeWidth={3} strokeColor="#FFB400" />
                        <span>33%</span>
                    </div>
                    <div className="progress-bar">
                        <label>English</label>
                        <Line percent={16} strokeWidth={3} strokeColor="#FFB400" />
                        <span>16%</span>
                    </div>
                </div>

                <div className="grid-item abilities">
                    <h4 className="abilities__title">Extra Skills</h4>
                    <ul className="skills-list">
                        <li className="skills-list__item">
                            <span>Materialaze, Bootstrap</span>
                        </li>
                        <li className="skills-list__item">
                            <span>Sass, Less, Stylus</span>
                        </li>
                        <li className="skills-list__item">
                            <span>Sass, Less, Stylus</span>
                        </li>
                        <li className="skills-list__item">
                            <span>Materialaze, Bootstrap</span>
                        </li>
                    </ul>
                </div>
                <button
                    className="nav-grid-container__btn">
                    Download cv
                    <span>&#128190;</span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;