import './Header.scss'
import img from '../../assets/img/me.png'

const Header = () => {
    return (
        <header id="pageHeader" className="container">
            <div className="header-content">
                <h1 className="header-content__title">I’m Pavel Kashubovich
                    <br/>
                    <span className="header-content__title-color">Front-end</span> Developer
                </h1>
                <p className="header-content__description">I am a self-developing person. I want to reach all the peaks and I am making every effort to this. I want to leave behind not only money and therefore I have a lot of energy, ambition and desire to grow! Further more.</p>
                <button className="header-content__button">HIRE ME &#10144;</button>
            </div>
            <img className="img" src={img} alt="me"/>
        </header>
);
};

export default Header;