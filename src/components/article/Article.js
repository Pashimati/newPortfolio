import './Article.scss'
import me from '../../assets/img/me.png'
import test from '../../assets/img/ImageTEST.png'
import Carousel from 't-a-e-3d-carousel-reactjs'
import Contact from "../contact/Contact";
const Article = () => {

    const Images = [
        {
            title: 'title 1',
            url: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y2Fyc3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
            title: 'title 2',
            url: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
        },
        {
            title: '',
            url: 'https://images.unsplash.com/photo-1517672651691-24622a91b550?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1189&q=80'
        },
        {
            url: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },
    ]

    return (
        <article id="mainArticle">
            <div className="container-wrap">
                <section className="section">
                    <h2 className='section__title'>Education</h2>
                    <p className='section__description'>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum
                    </p>
                    <div className="section-box">
                        <div className="section-box__left">
                            <h4 className='box-title'>University Of Toronto</h4>
                            <div className="box-label">
                                <label>Student</label>
                                <span>Jan 2016 - Dec 2021</span>
                            </div>
                        </div>
                        <div className="section-box__right">
                            <h4 className='box-title'>Certificate of Web Training</h4>
                            <p className='box-text'><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consectetur dolores, excepturi iure laboriosam laudantium magni minus necessitatibus nisi placeat possimus quam quibusdam quidem reiciendis, soluta suscipit tempora, tenetur voluptate!</span></p>
                        </div>
                    </div>

                    <div className="section-box">
                        <div className="section-box__left">
                            <h4 className='box-title'>University Of Toronto</h4>
                            <div className="box-label">
                                <label>Student</label>
                                <span>Jan 2016 - Dec 2021</span>
                            </div>
                        </div>
                        <div className="section-box__right">
                            <h4 className='box-title'>Certificate of Web Training</h4>
                            <p className='box-text'><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consectetur dolores, excepturi iure laboriosam laudantium magni minus necessitatibus nisi placeat possimus quam quibusdam quidem reiciendis, soluta suscipit tempora, tenetur voluptate!</span></p>
                        </div>
                    </div>


                    <div className="section-box">
                        <div className="section-box__left">
                            <h4 className='box-title'>University Of Toronto</h4>
                            <div className="box-label">
                                <label>Student</label>
                                <span>Jan 2016 - Dec 2021</span>
                            </div>
                        </div>
                        <div className="section-box__right">
                            <h4 className='box-title'>Certificate of Web Training</h4>
                            <p className='box-text'><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consectetur dolores, excepturi iure laboriosam laudantium magni minus necessitatibus nisi placeat possimus quam quibusdam quidem reiciendis, soluta suscipit tempora, tenetur voluptate!</span></p>
                        </div>
                    </div>

                </section>
                <section className="section">
                    <h2 className='section__title'>Work History</h2>
                    <p className='section__description'>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum
                    </p>
                    <div className="section-box">
                        <div className="section-box__left">
                            <h4 className='box-title'>University Of Toronto</h4>
                            <div className="box-label">
                                <label>Student</label>
                                <span>Jan 2016 - Dec 2021</span>
                            </div>
                        </div>
                        <div className="section-box__right">
                            <h4 className='box-title'>Certificate of Web Training</h4>
                            <p className='box-text'><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consectetur dolores, excepturi iure laboriosam laudantium magni minus necessitatibus nisi placeat possimus quam quibusdam quidem reiciendis, soluta suscipit tempora, tenetur voluptate!</span></p>
                        </div>
                    </div>

                    <div className="section-box">
                        <div className="section-box__left">
                            <h4 className='box-title'>University Of Toronto</h4>
                            <div className="box-label">
                                <label>Student</label>
                                <span>Jan 2016 - Dec 2021</span>
                            </div>
                        </div>
                        <div className="section-box__right">
                            <h4 className='box-title'>Certificate of Web Training</h4>
                            <p className='box-text'><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consectetur dolores, excepturi iure laboriosam laudantium magni minus necessitatibus nisi placeat possimus quam quibusdam quidem reiciendis, soluta suscipit tempora, tenetur voluptate!</span></p>
                        </div>
                    </div>


                    <div className="section-box">
                        <div className="section-box__left">
                            <h4 className='box-title'>University Of Toronto</h4>
                            <div className="box-label">
                                <label>Student</label>
                                <span>Jan 2016 - Dec 2021</span>
                            </div>
                        </div>
                        <div className="section-box__right">
                            <h4 className='box-title'>Certificate of Web Training</h4>
                            <p className='box-text'><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consectetur dolores, excepturi iure laboriosam laudantium magni minus necessitatibus nisi placeat possimus quam quibusdam quidem reiciendis, soluta suscipit tempora, tenetur voluptate!</span></p>
                        </div>
                    </div>

                </section>
                <section className="section">
                    <h2 className='section__title'>Portfolio</h2>
                    <p className='section__description'>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum
                    </p>
                    <div className="section-portfolio">
                        <Carousel
                            imageList={Images}
                        />
                        {/*<ul className="section-portfolio__list">*/}
                        {/*    <li className="section-portfolio__item">*/}
                        {/*        <a className="section-portfolio__link">*/}
                        {/*            <img className="section-portfolio__img" src={test} alt="test"/>*/}
                        {/*        </a>*/}
                        {/*    </li>*/}
                        {/*    <li className="section-portfolio__item">*/}
                        {/*        <a className="section-portfolio__link">*/}
                        {/*            <img className="section-portfolio__img" src={test} alt=""/>*/}
                        {/*        </a>*/}
                        {/*    </li>*/}
                        {/*    <li className="section-portfolio__item">*/}
                        {/*        <a className="section-portfolio__link">*/}
                        {/*            <img className="section-portfolio__img" src={test} alt=""/>*/}
                        {/*        </a>*/}
                        {/*    </li>*/}
                        {/*    <li className="section-portfolio__item">*/}
                        {/*        <a className="section-portfolio__link">*/}
                        {/*            <img className="section-portfolio__img" src={test} alt=""/>*/}
                        {/*        </a>*/}
                        {/*    </li>*/}
                        {/*    <li className="section-portfolio__item">*/}
                        {/*        <a className="section-portfolio__link">*/}
                        {/*            <img className="section-portfolio__img" src={test} alt=""/>*/}
                        {/*        </a>*/}
                        {/*    </li>*/}
                        {/*    <li className="section-portfolio__item">*/}
                        {/*        <a className="section-portfolio__link">*/}
                        {/*            <img className="section-portfolio__img" src={test} alt=""/>*/}
                        {/*        </a>*/}
                        {/*    </li>*/}
                        {/*    <li className="section-portfolio__item">*/}
                        {/*        <a className="section-portfolio__link">*/}
                        {/*            <img className="section-portfolio__img" src={test} alt=""/>*/}
                        {/*        </a>*/}
                        {/*    </li>*/}
                        {/*    <li className="section-portfolio__item">*/}
                        {/*        <a className="section-portfolio__link">*/}
                        {/*            <img className="section-portfolio__img" src={test} alt=""/>*/}
                        {/*        </a>*/}
                        {/*    </li>*/}
                        {/*    <li className="section-portfolio__item">*/}
                        {/*        <a className="section-portfolio__link">*/}
                        {/*            <img className="section-portfolio__img" src={test} alt=""/>*/}
                        {/*        </a>*/}
                        {/*    </li>*/}
                        {/*</ul>*/}
                    </div>
                </section>
                <Contact/>
            </div>
        </article>
    );
};

export default Article;