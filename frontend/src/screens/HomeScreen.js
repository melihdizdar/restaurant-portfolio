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
        </div>
    )
}
