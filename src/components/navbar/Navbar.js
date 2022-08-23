import "./Navbar.scss"
import img from '../../assets/img/me.png'

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
                               <img src="" alt="icon-instagram"/>
                           </li>
                           <li className="nav-list-contacts__item">
                               <img src="" alt="icon-telegram"/>
                           </li>
                           <li className="nav-list-contacts__item">
                               <img src="" alt="icon-mail"/>
                           </li>
                           <li className="nav-list-contacts__item">
                               <img src="" alt="icon-linkedIn"/>
                           </li>
                           <li className="nav-list-contacts__item">
                               <img src="" alt="icon-github"/>
                           </li>
                       </ul>
                   </div>
                </div>
                <div className="grid-item">
                    <div className="item-content">
                        <img src="" alt=""/>
                        <h4 className="item-content__title">
                            Pavel Kashubovich
                        </h4>
                        <span className="item-content__job">
                           Frontend developer
                       </span>
                        <ul className="item-content__contacts nav-list-contacts">
                            <li className="nav-list-contacts__item">
                                <img src="" alt="icon-instagram"/>
                            </li>
                            <li className="nav-list-contacts__item">
                                <img src="" alt="icon-telegram"/>
                            </li>
                            <li className="nav-list-contacts__item">
                                <img src="" alt="icon-mail"/>
                            </li>
                            <li className="nav-list-contacts__item">
                                <img src="" alt="icon-linkedIn"/>
                            </li>
                            <li className="nav-list-contacts__item">
                                <img src="" alt="icon-github"/>
                            </li>
                        </ul>
                    </div>
                </div>
                {/*<div className="grid-item"></div>*/}
                {/*<div className="grid-item"></div>*/}
                {/*<div className="grid-item"></div>*/}
            </div>
        </nav>
    );
};

export default Navbar;