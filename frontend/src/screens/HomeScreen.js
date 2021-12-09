import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import "../styles/Home/home.css";
import Fade from 'react-reveal/Fade';

export default function HomeScreen() {
    return (
        <div className="home">
            <Carousel showArrows autoPlay showThumbs={false} infiniteLoop interval={6000} showStatus={false}  centerSlidePercentage={100} showIndicators emulateTouch     
                renderArrowPrev={(onClickHandler, hasPrev, label) =>
                    hasPrev && (
                        <button type="button" onClick={onClickHandler} title={label} className="leftarrow">
                            <i class="fas fa-angle-left"></i>
                        </button>
                    )
                }
                renderArrowNext={(onClickHandler, hasNext, label) =>
                    hasNext && (
                        <button type="button" onClick={onClickHandler} title={label} className="rightarrow">
                            <i class="fas fa-angle-right"></i>
                        </button>
                    )
                }
                renderIndicator={(onClickHandler, isSelected, index, label) => {
                    if (isSelected) {
                        return (
                            <li
                                className="indicators-active"
                                aria-label={`Selected: ${label} ${index + 1}`}
                                title={`Selected: ${label} ${index + 1}`}
                            />
                        );
                    }
                    return (
                        <li
                            className="indicators"
                            onClick={onClickHandler}
                            onKeyDown={onClickHandler}
                            value={index}
                            key={index}
                            role="button"
                            tabIndex={0}
                            title={`${label} ${index + 1}`}
                            aria-label={`${label} ${index + 1}`}
                        />
                    );
                }}>
                <div>
                    <img src="https://ld-wp.template-help.com/rockthemes/21997/wp-content/uploads/2019/01/image-slide-1.jpg" alt="slider1" />
                    <Fade bottom>
                        <div className="sliderText">
                            DON'T<div/>EAT LESS.<div/>JUST<div/>EAT REAL.<div className="buttontop"/>
                            <div className="buttonStage"><button type="submit">ORDER CATERING ONLINE</button></div>
                        </div>
                    </Fade>
                </div>
                <div>
                    <img src="https://ld-wp.template-help.com/rockthemes/21997/wp-content/uploads/2019/01/image-slide-2.jpg" alt="slider2" />
                    <Fade bottom>
                        <div className="sliderText">
                            SELECT<div/>DELICIOUS<div/>TRY<div/>SPECIAL.<div className="buttontop"/>
                            <div className="buttonStage"><button type="submit">ORDER CATERING ONLINE</button></div>
                        </div>
                    </Fade>
                </div>
                <div>
                    <img src="https://ld-wp.template-help.com/rockthemes/21997/wp-content/uploads/2019/01/slide-03.png" alt="slider3" />
                    <Fade bottom>
                        <div className="sliderText">
                            SPECIAL<div/>TASTES<div/>AND<div/>LOOKS.<div className="buttontop"/>
                            <div className="buttonStage"><button type="submit">ORDER CATERING ONLINE</button></div>
                        </div>
                    </Fade>
                </div>
                <div>
                    <img src="https://ld-wp.template-help.com/rockthemes/21997/wp-content/uploads/2019/01/image-slide-3.jpg" alt="slider4" />
                    <Fade bottom>
                        <div className="sliderText">
                            EUROPEAN<div/>CUISINE<div/>WORLD<div/>TASTES.<div className="buttontop"/>
                            <div className="buttonStage"><button type="submit">ORDER CATERING ONLINE</button></div>
                        </div>
                    </Fade>
                </div>
            </Carousel>
            <div className="prefaceStage">
                <div className="headerContainer">
                    <div className="headerBack">Welcome to Dishlish</div>
                    <div className="headerFront">WELCOME TO DISHLISH</div>
                </div>
                <div className="line"/>
                <p>We welcome you to a delicious feast of exquisite dishes in Dishlish. With a wide range of world cuisines to choose from, we guarantee you a sumptuous feast experience in our restaurant!  Here you will dive into a friendly and romantic atmosphere and enjoy our haute cuisine. With our great selection of dishes from all over the world you can feel yourself as a traveler and true gourmet!</p>
                <img src="https://ld-wp.template-help.com/rockthemes/21997/wp-content/uploads/2018/06/figure-1.png" alt="figure"/>
            </div>
            <div className="mainMenuStage">
                <Fade left>
                    <div className="left"> 
                            <h4>MAIN MENU</h4>
                            <div className="line"/>
                            <div className="menuContainer">
                                <div className="menuHeader">GARLIC SHRIMP & TONNARELLI PASTA<div className="price">$19.99</div></div>
                                <div className="menuContent">Serrano ham, spinach, roasted red peppers, tomato, pil pil sauce</div>
                            </div>
                            <div className="menuContainer">
                                <div className="menuHeader">GRILLED HANGER STEAK<div className="price">$25.50</div></div>
                                <div className="menuContent">Serrano ham, spinach, roasted red peppers, tomato, pil pil sauce</div>
                            </div>
                            <div className="menuContainer">
                                <div className="menuHeader">PAN ROASTED ‘FLORIDA KEYS’ MAHI MAHI<div className="price">$15.50</div></div>
                                <div className="menuContent">Serrano ham, spinach, roasted red peppers, tomato, pil pil sauce</div>
                            </div>
                            <div className="menuContainer">
                                <div className="menuHeader">GRILLED FREE RANGE CHICKEN SALAD<div className="price">$19.99</div></div>
                                <div className="menuContent">Mesclun greens, pepperjack cheese, bacon, avocado, corn, tomato, cucumbers</div>
                            </div>
                            <div className="menuContainer">
                                <div className="menuHeader">GRILLED BBQ BABY BACK RIBS<div className="price">$23.00</div></div>
                                <div className="menuContent">Hibiscus sweet ranch coleslaw, hand cut fries</div>
                            </div>
                    </div>
                </Fade>
                <Fade right>
                    <div className="right">
                        <img src="https://ld-wp.template-help.com/rockthemes/21997/wp-content/uploads/2018/06/home-img-1.png" alt="menu_1"/>
                    </div>
                </Fade>
            </div>
            <div className="mainMenuStage2">
                <Fade left>
                    <div className="left">
                        <img src="https://ld-wp.template-help.com/rockthemes/21997/wp-content/uploads/2018/06/home-img-2.png" alt="menu_1"/>
                    </div>
                </Fade>
                <Fade right>
                    <div className="right">
                        <h4>DINNER</h4>
                        <div className="line"/>
                        <div className="menuContainer">
                            <div className="menuHeader"><div className="header">CHICKEN LIVER PARFAIT</div><div className="price">$23.80</div></div>
                            <div className="menuContent">Chicken, onion, vegetable oil, Sour cream sauce, pepper, salt</div>
                        </div>
                        <div className="menuContainer">
                            <div className="menuHeader"><div className="header">ITALIAN TASTING PLATTER</div><div className="price">$25.50</div></div>
                            <div className="menuContent">Three Italian Favorites: Baked Clams, Fried Calamari and Stuffed Shrimp</div>
                        </div>
                        <div className="menuContainer">
                            <div className="menuHeader"><div className="header">PAN ROASTED ‘FLORIDA KEYS’ MAHI MAHI</div><div className="price">$15.50</div></div>
                            <div className="menuContent">Serrano ham, spinach, roasted red peppers, tomato, pil pil sauce</div>
                        </div>
                        <div className="menuContainer">
                            <div className="menuHeader"><div className="header">CRAB CONGEE</div><div className="price">$19.99</div></div>
                            <div className="menuContent">Biscuits with fresh sausage patties & country gravy</div>
                        </div>
                        <div className="menuContainer">
                            <div className="menuHeader"><div className="header">SALT AND PEPPER CALAMARI</div><div className="price">$23.00</div></div>
                            <div className="menuContent">Rocket, lime, chipotle aioli</div>
                        </div>
                    </div>
                </Fade>
            </div>
            <div className="tripleImageStage">
                <Fade bottom><img src="https://ld-wp.template-help.com/rockthemes/21997/wp-content/uploads/2019/01/banner-1.jpg" alt="banner-1"/></Fade>
                <Fade bottom><img src="https://ld-wp.template-help.com/rockthemes/21997/wp-content/uploads/2019/01/banner-2.jpg" alt="banner-2"/></Fade>
                <Fade bottom><img src="https://ld-wp.template-help.com/rockthemes/21997/wp-content/uploads/2019/01/banner-3.jpg" alt="banner-3"/></Fade>
            </div>
            <div className="menuSplitStage">
                <Fade left>
                    <div className="left">
                        <h4>BREAKFAST</h4>
                        <div className="line"/>
                        <div className="menuContainer">
                            <div className="menuHeader">WESTERN SUNRISE<div className="price">$23.80</div></div>
                            <div className="menuContent">Two fried eggs with cheese & two breakfast meats made to perfection</div>
                        </div>
                        <div className="menuContainer">
                            <div className="menuHeader">CORNISH-MACKEREL<div className="price">$15.50</div></div>
                            <div className="menuContent">CORNISH-MACKEREL</div>
                        </div>
                        <div className="menuContainer">
                            <div className="menuHeader">ROASTED STEAK ROULADE<div className="price">$35.50</div></div>
                            <div className="menuContent">Parsley with apple cider vinegar, salt, sugar & spices</div>
                        </div>
                        <div className="menuContainer">
                            <div className="menuHeader">“COUNTRY” BREAKFAST<div className="price">$19.99</div></div>
                            <div className="menuContent">Biscuits with fresh sausage patties & country gravy</div>
                        </div>
                        <div className="menuContainer">
                            <div className="menuHeader">SALT AND PEPPER CALAMARI<div className="price">$23.00</div></div>
                            <div className="menuContent">Rocket, lime, chipotle aioli</div>
                        </div>
                    </div>
                </Fade>
                <Fade right>
                    <div className="right">
                        <h4>LUNCH</h4>
                        <div className="line"/>
                        <div className="menuContainer">
                            <div className="menuHeader">CORNISH-MACKEREL<div className="price">$15.50</div></div>
                            <div className="menuContent">Cornish mackerel, marinated tomatoes, fragrant curry, tamarillo</div>
                        </div>
                        <div className="menuContainer">
                            <div className="menuHeader">ROASTED STEAK ROULADE<div className="price">$35.50</div></div>
                            <div className="menuContent">Parsley with apple cider vinegar, salt, sugar & spices</div>
                        </div>
                        <div className="menuContainer">
                            <div className="menuHeader">SALT AND PEPPER CALAMARI<div className="price">$23.00</div></div>
                            <div className="menuContent">Rocket, lime, chipotle aioli</div>
                        </div>
                        <div className="menuContainer">
                            <div className="menuHeader">CRAB CONGEE<div className="price">$19.99</div></div>
                            <div className="menuContent">Biscuits with fresh sausage patties & country gravy</div>
                        </div>
                        <div className="menuContainer">
                            <div className="menuHeader">WESTERN SUNRISE<div className="price">$23.80</div></div>
                            <div className="menuContent">Two fried eggs with cheese & two breakfast meats made to perfection</div>
                        </div>
                    </div>
                </Fade>
            </div>
            <div className="buttonStage">
                <button type="submit">VIEW ALL MENU</button>
            </div>
            <div className="ourGalleryStage">
                <div className="headerContainer">
                    <div className="headerBack">Our Gallery</div>
                    <div className="headerFront">WARM ATMOSPHERE</div>
                </div>
                <div className="line"/>
                <div className="galleryStage">
                    <Fade bottom>
                        <div className="left">
                            <img src="https://ld-wp.template-help.com/rockthemes/21997/wp-content/uploads/2018/06/project-1.png" alt="img1" />
                            <img src="https://ld-wp.template-help.com/rockthemes/21997/wp-content/uploads/2018/06/home-img-3.png" alt="img2" />
                            <img src="https://ld-wp.template-help.com/rockthemes/21997/wp-content/uploads/2018/06/home-img-4.png" alt="img3" />
                        </div>
                        <div className="right">
                            <img src="https://ld-wp.template-help.com/rockthemes/21997/wp-content/uploads/2018/06/project-2.png" alt="img4" />
                            <img src="https://ld-wp.template-help.com/rockthemes/21997/wp-content/uploads/2018/06/project-11.png" alt="img5" />
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    )
}
