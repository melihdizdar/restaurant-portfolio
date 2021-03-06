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
                            SA??LIKLI<div/>VE<div/>LEZZETL??<div/>GIDA.<div className="buttontop"/>
                        </div>
                    </Fade>
                </div>
                <div>
                    <img src="https://i.hizliresim.com/sdne4uj.png" alt="slider3" />
                    <Fade bottom>
                        <div className="sliderText">
                            ??TALYAN<div/>K??LT??R??N??N<div/>E??S??Z<div/>YEMEKLER??.<div className="buttontop"/>                         
                        </div>
                    </Fade>
                </div>
                <div>
                    <img src="https://i.hizliresim.com/fqhoc37.png" alt="slider4" />
                    <Fade bottom>
                        <div className="sliderText">
                            KEK??KLE<div/>SERV??S<div/>ED??LEN<div/>ETLER.<div className="buttontop"/>
                        </div>
                    </Fade>
                </div>
            </Carousel>
            <div className="prefaceStage">
                <div className="headerText">Yemek D??nyas??na Ho??geldiniz</div>
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
                            <h4>BA??LANGI??</h4>
                            <div className="line"/>
                            <div className="menuContainer">
                                <div className="menuHeader">Chimi Cha Cha<div className="price">19.99???</div></div>
                                <div className="menuContent">??in yufkas??na sar??lm???? tavuk g????s??, Meksika fasulyesi, kimyon, k??zlenmi?? biber, m??s??r, so??an, mozzarella peyniri, Parmesan peyniri, rendelenmi?? marul ve salsa sos ile servis edilir.</div>
                            </div>
                            <div className="menuContainer">
                                <div className="menuHeader">Karides G??ve??<div className="price">25.50???</div></div>
                                <div className="menuContent">Tereya??, so??an, sar??msak, domates, mantar, biber, karides, tavada sotelenip, ??zerine ka??ar peyniri konularak servis edilir.</div>
                            </div>
                            <div className="menuContainer">
                                <div className="menuHeader">Buffalo Wings<div className="price">15.50???</div></div>
                                <div className="menuContent">Frit??zde k??zarm???? 6 adet tavuk kaad??, louisiana sos (ac?? sos) bulanm???? ve rokfor ile servis edilir.</div>
                            </div>
                            <div className="menuContainer">
                                <div className="menuHeader">Mozzarella Sticks<div className="price">19.99???</div></div>
                                <div className="menuContent">Mozzarella sticks, salsa sos ile servis edilir.</div>
                            </div>
                            <div className="menuContainer">
                                <div className="menuHeader">Guacamole Doritos<div className="price">23.00???</div></div>
                                <div className="menuContent">Salamand??rada k??zarm???? doritos ve ka??ar peyniri, guacamole sos, sour cream, salsa sos ile servis edilir.</div>
                            </div>
                    </div>
                </Fade>
            </div>
            <div className="mainMenuStage2">
                <Fade left>
                    <div className="left">
                        <h4>AK??AM YEME????</h4>
                        <div className="line"/>
                        <div className="menuContainer">
                            <div className="menuHeader"><div className="header">Canyon Road</div><div className="price">23.80???</div></div>
                            <div className="menuContent">Izgarada pi??rilmi?? steak, yan??nda ??zel sos, patates ve f??r??nlanm???? mevsim sebzeleri ile servis edilir.</div>
                        </div>
                        <div className="menuContainer">
                            <div className="menuHeader"><div className="header">New York Steak</div><div className="price">25.50???</div></div>
                            <div className="menuContent">250 gr ??zgarada pi??irilmi?? steak, f??r??nlanm???? mevsim sebzeleri, demi glace sos ile be??eninize sunduk</div>
                        </div>
                        <div className="menuContainer">
                            <div className="menuHeader"><div className="header">Filetto al Funghi</div><div className="price">23.00???</div></div>
                            <div className="menuContent">Izgarada pi??rilmi?? bonfile et, Kremal?? mantar sos, patates ve f??r??nlanm???? mevsim sebzeleri</div>
                        </div>
                        <div className="menuContainer">
                            <div className="menuHeader"><div className="header">K??ri Soslu Tavuk</div><div className="price">15.50???</div></div>
                            <div className="menuContent">Kremal?? ve k??ri soslu tavuk g????s??, file badem, ananas, ku?? ??z??m?? ve pilav ile servis edilir</div>
                        </div>
                        <div className="menuContainer">
                            <div className="menuHeader"><div className="header">BBQ Soslu Tavuk</div><div className="price">19.99???</div></div>
                            <div className="menuContent">Izgarada pi??irilmi?? tavuk pirzola, barbel?? sosuna bulanm????, pilav ve akdeniz ye??illi??i ile servis edilir</div>
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
                        <h4>KAHVALTI</h4>
                        <div className="line"/>
                        <div className="menuContainer">
                            <div className="menuHeader">Serpme Kahvalt?? (2 ki??ilik)<div className="price">23.80???</div></div>
                            <div className="menuContent">Tulum peyniri, ka??ar peyniri, beyaz peynir, hellim peyniri, cheddar peynir, mienyu menemen, salam, jambon, sosis, sucuk, ye??il zeytin, siyah zeytin, vi??ne re??eli, kay??s?? re??eli, nutella, bal, tereya??, sigara b??re??i, k??ymal?? b??rek, domates, salatal??k, ye??illik, ha??lanm???? yumurta, tahin, pekmez, parmak patates ve s??n??rs??z demleme ??ay ile servis edilir.</div>
                        </div>
                        <div className="menuContainer">
                            <div className="menuHeader">Kahvalt?? Taba????<div className="price">15.50???</div></div>
                            <div className="menuContent">Beyaz peynir, ka??ar peyniri, tulum peyniri, ha??lanm???? yumurta, ye??il zeytin, siyah zeytin, bal, tereya??, domates, salatal??k, ye??illik ve s??n??rs??z demleme ??ay ile servis edilir.</div>
                        </div>
                        <div className="menuContainer">
                            <div className="menuHeader">Crep<div className="price">35.50???</div></div>
                            <div className="menuContent">??ikolata, muz ve ??ilek ile servis edilir.</div>
                        </div>
                        <div className="menuContainer">
                            <div className="menuHeader">Sahanda Yumurta<div className="price">19.99???</div></div>
                            <div className="menuContent">Ya??, tuz, pul biberi ie servis edilir.</div>
                        </div>
                        <div className="menuContainer">
                            <div className="menuHeader">Sahanda Sucuklu Yumurta<div className="price">23.00???</div></div>
                            <div className="menuContent">Yumurta, sucuk, pul biberi, tuz, kekik ile servis edilir.</div>
                        </div>
                    </div>
                </Fade>
                <Fade right>
                    <div className="right">
                        <h4>SANDV????LER</h4>
                        <div className="line"/>
                        <div className="menuContainer">
                            <div className="menuHeader">Cheddar Steak Sandwich<div className="price">15.50???</div></div>
                            <div className="menuContent">Sandwich ekme??i aras??na steak et, meksika biberi, mantar, so??an, cheddar peyniri, marul ve parmak patates ile servis edilir.</div>
                        </div>
                        <div className="menuContainer">
                            <div className="menuHeader">Club Sandwich<div className="price">35.50???</div></div>
                            <div className="menuContent">Tost ekme??i, ??zgara tavuk, salam, jambon, tur??u, ka??ar peyniri, domates ve parmak patates ile servis edilir.</div>
                        </div>
                        <div className="menuContainer">
                            <div className="menuHeader">Peynirli Sandwich<div className="price">23.00???</div></div>
                            <div className="menuContent">Sandvich ekme??i aras??na beyaz peynir, domates, salatal??k, k??v??rc??k ve parmak patates ile servis edilir.</div>
                        </div>
                        <div className="menuContainer">
                            <div className="menuHeader">K??fte Sandwich<div className="price">19.99???</div></div>
                            <div className="menuContent">Sandvich ekme??i, k??fte, domates, tur??u, k??v??rc??k, ??zel sos ve parmak patates ile servis edilir.</div>
                        </div>
                        <div className="menuContainer">
                            <div className="menuHeader">Ton Bal??kl?? Sandwich<div className="price">23.80???</div></div>
                            <div className="menuContent">Sandvich ekme??i, ton bal??????, kapari tur??u, so??an, domates, k??v??rc??k ve parmak patates ile servis edilir.</div>
                        </div>
                    </div>
                </Fade>
            </div>
            <div className="buttonStage">
                <Link to="/menu"><button type="submit">T??M MEN??LER?? G??STER</button></Link>
            </div>
        </div>
    )
}
