import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import "../styles/Home/home.css";
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

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
                    <img src="https://i.hizliresim.com/bnpeaaw.png" alt="slider1" />
                    <Fade bottom>
                        <div className="sliderText">
                            HEALTHY<div/>AND<div/>DELICIOUS<div/>FOOD.<div className="buttontop"/>
                        </div>
                    </Fade>
                </div>
                <div>
                    <img src="https://i.hizliresim.com/sdne4uj.png" alt="slider3" />
                    <Fade bottom>
                        <div className="sliderText">
                            DISHES<div/>OF<div/>ITALIAN<div/>CULTURE.<div className="buttontop"/>                         
                        </div>
                    </Fade>
                </div>
                <div>
                    <img src="https://i.hizliresim.com/fqhoc37.png" alt="slider4" />
                    <Fade bottom>
                        <div className="sliderText">
                            MEATS<div/>SERVED<div/>WITH<div/>THYME.<div className="buttontop"/>
                        </div>
                    </Fade>
                </div>
            </Carousel>
            <div className="prefaceStage">
                <div className="headerText">Welcome to Food World</div>
                <div className="line"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut iaculis iaculis est id vulputate. Sed augue erat, interdum eu ex sed, finibus eleifend magna. Vestibulum dignissim posuere gravida. Quisque at sapien augue. Sed aliquam luctus egestas. Donec mauris metus, mattis et eleifend in, consectetur a sem. Suspendisse potenti. Integer feugiat facilisis sapien, ac consequat est sagittis vitae. Suspendisse ultrices quam nulla, eget fringilla nulla aliquet quis. Nulla facilisi. Nullam quam odio, lobortis ac dui id, elementum maximus ipsum. In dignissim pulvinar odio, vitae pellentesque est mattis vel. Aliquam sollicitudin nec ex at dapibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            </div>
            <div className="mainMenuStage">
                <Fade left>
                    <div className="left">
                        <img src="https://images.pexels.com/photos/2983099/pexels-photo-2983099.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="menu_1"/>
                    </div>
                </Fade>
                <Fade right>
                    <div className="right"> 
                            <h4>BEGINNINGS</h4>
                            <div className="line"/>
                            <div className="menuContainer">
                                <div className="menuHeader">Chimi Cha Cha<div className="price">$19.99</div></div>
                                <div className="menuContent">Chicken breast wrapped in Chinese phyllo, Mexican beans, cumin, roasted peppers, corn, onions, mozzarella cheese, Parmesan cheese, served with grated lettuce and salsa sauce.</div>
                            </div>
                            <div className="menuContainer">
                                <div className="menuHeader">Shrimp Pane<div className="price">$25.50</div></div>
                                <div className="menuContent">Shrimp coated with cornmeal, French fries, arugula, served with lemon and tartar sauce.</div>
                            </div>
                            <div className="menuContainer">
                                <div className="menuHeader">Buffalo Wings<div className="price">$15.50</div></div>
                                <div className="menuContent">6 pieces of fried chicken in a deep fryer, covered with louisiana sauce (hot sauce) and served with roquefort.</div>
                            </div>
                            <div className="menuContainer">
                                <div className="menuHeader">Mozzarella Sticks<div className="price">$19.99</div></div>
                                <div className="menuContent">Mozzarella sticks served with salsa sauce.</div>
                            </div>
                            <div className="menuContainer">
                                <div className="menuHeader">Guacamole Doritos<div className="price">$23.00</div></div>
                                <div className="menuContent">It is served with fried doritos and cheddar cheese, guacamole sauce, sour cream and salsa sauce.</div>
                            </div>
                    </div>
                </Fade>
            </div>
            <div className="mainMenuStage2">
                <Fade left>
                    <div className="left">
                        <h4>DINNER</h4>
                        <div className="line"/>
                        <div className="menuContainer">
                            <div className="menuHeader"><div className="header">Canyon Road</div><div className="price">$23.80</div></div>
                            <div className="menuContent">Grilled steak, served with special sauce, potatoes and baked seasonal vegetables</div>
                        </div>
                        <div className="menuContainer">
                            <div className="menuHeader"><div className="header">New York Steak</div><div className="price">$25.50</div></div>
                            <div className="menuContent">We presented it to your liking with 250 gr grilled steak, baked seasonal vegetables and demi glace sauce.</div>
                        </div>
                        <div className="menuContainer">
                            <div className="menuHeader"><div className="header">Filetto al Funghi</div><div className="price">$23.00</div></div>
                            <div className="menuContent">Grilled tenderloin, Creamy mushroom sauce, potatoes and seasonal baked vegetables</div>
                        </div>
                        <div className="menuContainer">
                            <div className="menuHeader"><div className="header">Chicken with Curry Sauce</div><div className="price">$15.50</div></div>
                            <div className="menuContent">Chicken breast with creamy and curry sauce, served with almonds, pineapple, currants and rice</div>
                        </div>
                        <div className="menuContainer">
                            <div className="menuHeader"><div className="header">Chicken with BBQ Sauce</div><div className="price">$19.99</div></div>
                            <div className="menuContent">Grilled chicken cutlet dipped in barbecue sauce, served with rice and mediterranean greens</div>
                        </div>
                    </div>
                </Fade>
                <Fade right>
                    <div className="right">
                        <img src="https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="menu_1"/>
                    </div>
                </Fade>
            </div>
            <div className="tripleImageStage">
                <Fade bottom><img src="https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="banner-1"/></Fade>
                <Fade bottom><img src="https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="banner-2"/></Fade>
                <Fade bottom><img src="https://images.pexels.com/photos/434283/pexels-photo-434283.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="banner-3"/></Fade>
            </div>
            <div className="menuSplitStage">
                <Fade left>
                    <div className="left">
                        <h4>BREAKFAST</h4>
                        <div className="line"/>
                        <div className="menuContainer">
                            <div className="menuHeader">Mixed Breakfast (for 2 people)<div className="price">$23.80</div></div>
                            <div className="menuContent">Tulum cheese, cheddar cheese, feta cheese, halloumi cheese, cheddar cheese, mienyu menemen, salami, ham, sausage, soudjouk, green olives, black olives, cherry jam, apricot jam, nutella, honey, butter, spring rolls, mince pies, Served with tomatoes, cucumbers, greens, boiled eggs, tahini, molasses, French fries and unlimited tea.</div>
                        </div>
                        <div className="menuContainer">
                            <div className="menuHeader">Breakfast Plate<div className="price">$15.50</div></div>
                            <div className="menuContent">Served with feta cheese, cheddar cheese, tulum cheese, boiled egg, green olives, black olives, honey, butter, tomatoes, cucumbers, greens and unlimited brewed tea.</div>
                        </div>
                        <div className="menuContainer">
                            <div className="menuHeader">Crep<div className="price">$35.50</div></div>
                            <div className="menuContent">Served with chocolate, banana and strawberry.</div>
                        </div>
                        <div className="menuContainer">
                            <div className="menuHeader">Fried Eggs<div className="price">$19.99</div></div>
                            <div className="menuContent">It is served with eggs, roasting, salt and thyme.</div>
                        </div>
                        <div className="menuContainer">
                            <div className="menuHeader">Fried Egg with Sausage<div className="price">$23.00</div></div>
                            <div className="menuContent">Served with egg, sausage, chili pepper, salt and thyme.</div>
                        </div>
                    </div>
                </Fade>
                <Fade right>
                    <div className="right">
                        <h4>SANDWICHES</h4>
                        <div className="line"/>
                        <div className="menuContainer">
                            <div className="menuHeader">Cheddar Steak Sandwich<div className="price">$15.50</div></div>
                            <div className="menuContent">It is served with steak meat, Mexican pepper, mushrooms, onions, cheddar cheese, lettuce and French fries between sandwich bread.</div>
                        </div>
                        <div className="menuContainer">
                            <div className="menuHeader">Club Sandwich<div className="price">$35.50</div></div>
                            <div className="menuContent">Served with toast bread, grilled chicken, salami, ham, pickles, cheddar cheese, tomatoes and French fries.</div>
                        </div>
                        <div className="menuContainer">
                            <div className="menuHeader">Cheese Sandwich<div className="price">$23.00</div></div>
                            <div className="menuContent">It is served with feta cheese, tomato, cucumber, curly curly and French fries between sandwich bread.</div>
                        </div>
                        <div className="menuContainer">
                            <div className="menuHeader">Meatball Sandwich<div className="price">$19.99</div></div>
                            <div className="menuContent">Served with sandwich bread, meatballs, tomatoes, pickles, lettuce, special sauce and french fries.</div>
                        </div>
                        <div className="menuContainer">
                            <div className="menuHeader">Tuna Sandwich<div className="price">$23.80</div></div>
                            <div className="menuContent">It is served with sandwich bread, tuna fish, caper pickles, onions, tomatoes, curly fries and French fries.</div>
                        </div>
                    </div>
                </Fade>
            </div>
            <div className="buttonStage">
                <Link to="/menu"><button type="submit">VIEW ALL MENU</button></Link>
            </div>
        </div>
    )
}
