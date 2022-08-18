import './Header.scss'
import img from '../../assets/img/me.png'

const Header = () => {
    return (
        <div className="container">
            <div className="content">
                <h1 className="content__title">I’m Pavel Kashubovich
                    <br/>
                    <span className="content__title-color">Front-end</span> Developer
                </h1>
                <p className="content__description">I am a self-developing person. I want to reach all the peaks and I am making every effort to this. I want to leave behind not only money and therefore I have a lot of energy, ambition and desire to grow! Further more.</p>
                <button className="content__button">HIRE ME &#10144;</button>
            </div>
            <img className="img" src={img} alt="me"/>
        </div>
);
};

export default Header;