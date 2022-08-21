import './Aside.scss'
import contrast from '../../assets/img/contrast.png'
import home from '../../assets/img/Icons-Home.png'
import cv from '../../assets/img/Icons-cv.png'
import contact from '../../assets/img/Icons-contact.png'
import job from '../../assets/img/Icons-job.png'
import education from '../../assets/img/Icons-education.png'

const Aside = () => {
    return (
        <aside className="asd">
            <div className="asd__container">
                <button className="asd__btn">
                    <img src={contrast} alt="button-contrast"/>
                </button>
                <ul className="asd__list list">
                    <li className="list__item">
                        <a href="#" className="list__link">
                            <img src={home} alt="home" className="list__img"/>
                        </a>
                    </li>
                    <li className="list__item">
                        <a href="#" className="list__link">
                            <img src={cv} alt="download-cv" className="list__img"/>
                        </a>
                    </li>
                    <li className="list__item">
                        <a href="#" className="list__link">
                            <img src={education} alt="education" className="list__img"/>
                        </a>
                    </li>
                    <li className="list__item">
                        <a href="" className="list__link">
                            <img src={job} alt="job" className="list__img"/>
                        </a>
                    </li>
                    <li className="list__item">
                        <a href="" className="list__link">
                            <img src={contact} alt="contact" className="list__img"/>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default Aside;