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
                            SAĞLIKLI<div/>VE<div/>LEZZETLİ<div/>GIDA.<div className="buttontop"/>
                        </div>
                    </Fade>
                </div>
                <div>
                    <img src="https://i.hizliresim.com/sdne4uj.png" alt="slider3" />
                    <Fade bottom>
                        <div className="sliderText">
                            İTALYAN<div/>KÜLTÜRÜNÜN<div/>EŞSİZ<div/>YEMEKLERİ.<div className="buttontop"/>                         
                        </div>
                    </Fade>
                </div>
                <div>
                    <img src="https://i.hizliresim.com/fqhoc37.png" alt="slider4" />
                    <Fade bottom>
                        <div className="sliderText">
                            KEKİKLE<div/>SERVİS<div/>EDİLEN<div/>ETLER.<div className="buttontop"/>
                        </div>
                    </Fade>
                </div>
            </Carousel>
            <div className="prefaceStage">
                <div className="headerText">Yemek Dünyasına Hoşgeldiniz</div>
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
                            <h4>BAŞLANGIÇ</h4>
                            <div className="line"/>
                            <div className="menuContainer">
                                <div className="menuHeader">Chimi Cha Cha<div className="price">19.99₺</div></div>
                                <div className="menuContent">Çin yufkasına sarılmış tavuk göğsü, Meksika fasulyesi, kimyon, közlenmiş biber, mısır, soğan, mozzarella peyniri, Parmesan peyniri, rendelenmiş marul ve salsa sos ile servis edilir.</div>
                            </div>
                            <div className="menuContainer">
                                <div className="menuHeader">Karides Güveç<div className="price">25.50₺</div></div>
                                <div className="menuContent">Tereyağ, soğan, sarımsak, domates, mantar, biber, karides, tavada sotelenip, üzerine kaşar peyniri konularak servis edilir.</div>
                            </div>
                            <div className="menuContainer">
                                <div className="menuHeader">Buffalo Wings<div className="price">15.50₺</div></div>
                                <div className="menuContent">Fritözde kızarmış 6 adet tavuk kaadı, louisiana sos (acı sos) bulanmış ve rokfor ile servis edilir.</div>
                            </div>
                            <div className="menuContainer">
                                <div className="menuHeader">Mozzarella Sticks<div className="price">19.99₺</div></div>
                                <div className="menuContent">Mozzarella sticks, salsa sos ile servis edilir.</div>
                            </div>
                            <div className="menuContainer">
                                <div className="menuHeader">Guacamole Doritos<div className="price">23.00₺</div></div>
                                <div className="menuContent">Salamandırada kızarmış doritos ve kaşar peyniri, guacamole sos, sour cream, salsa sos ile servis edilir.</div>
                            </div>
                    </div>
                </Fade>
            </div>
            <div className="mainMenuStage2">
                <Fade left>
                    <div className="left">
                        <h4>AKŞAM YEMEĞİ</h4>
                        <div className="line"/>
                        <div className="menuContainer">
                            <div className="menuHeader"><div className="header">Canyon Road</div><div className="price">23.80₺</div></div>
                            <div className="menuContent">Izgarada pişrilmiş steak, yanında özel sos, patates ve fırınlanmış mevsim sebzeleri ile servis edilir.</div>
                        </div>
                        <div className="menuContainer">
                            <div className="menuHeader"><div className="header">New York Steak</div><div className="price">25.50₺</div></div>
                            <div className="menuContent">250 gr ızgarada pişirilmiş steak, fırınlanmış mevsim sebzeleri, demi glace sos ile beğeninize sunduk</div>
                        </div>
                        <div className="menuContainer">
                            <div className="menuHeader"><div className="header">Filetto al Funghi</div><div className="price">23.00₺</div></div>
                            <div className="menuContent">Izgarada pişrilmiş bonfile et, Kremalı mantar sos, patates ve fırınlanmış mevsim sebzeleri</div>
                        </div>
                        <div className="menuContainer">
                            <div className="menuHeader"><div className="header">Köri Soslu Tavuk</div><div className="price">15.50₺</div></div>
                            <div className="menuContent">Kremalı ve köri soslu tavuk göğsü, file badem, ananas, kuş üzümü ve pilav ile servis edilir</div>
                        </div>
                        <div className="menuContainer">
                            <div className="menuHeader"><div className="header">BBQ Soslu Tavuk</div><div className="price">19.99₺</div></div>
                            <div className="menuContent">Izgarada pişirilmiş tavuk pirzola, barbelü sosuna bulanmış, pilav ve akdeniz yeşilliği ile servis edilir</div>
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
                            <div className="menuHeader">Serpme Kahvaltı (2 kişilik)<div className="price">23.80₺</div></div>
                            <div className="menuContent">Tulum peyniri, kaşar peyniri, beyaz peynir, hellim peyniri, cheddar peynir, mienyu menemen, salam, jambon, sosis, sucuk, yeşil zeytin, siyah zeytin, vişne reçeli, kayısı reçeli, nutella, bal, tereyağ, sigara böreği, kıymalı börek, domates, salatalık, yeşillik, haşlanmış yumurta, tahin, pekmez, parmak patates ve sınırsız demleme çay ile servis edilir.</div>
                        </div>
                        <div className="menuContainer">
                            <div className="menuHeader">Kahvaltı Tabağı<div className="price">15.50₺</div></div>
                            <div className="menuContent">Beyaz peynir, kaşar peyniri, tulum peyniri, haşlanmış yumurta, yeşil zeytin, siyah zeytin, bal, tereyağ, domates, salatalık, yeşillik ve sınırsız demleme çay ile servis edilir.</div>
                        </div>
                        <div className="menuContainer">
                            <div className="menuHeader">Crep<div className="price">35.50₺</div></div>
                            <div className="menuContent">Çikolata, muz ve çilek ile servis edilir.</div>
                        </div>
                        <div className="menuContainer">
                            <div className="menuHeader">Sahanda Yumurta<div className="price">19.99₺</div></div>
                            <div className="menuContent">Yağ, tuz, pul biberi ie servis edilir.</div>
                        </div>
                        <div className="menuContainer">
                            <div className="menuHeader">Sahanda Sucuklu Yumurta<div className="price">23.00₺</div></div>
                            <div className="menuContent">Yumurta, sucuk, pul biberi, tuz, kekik ile servis edilir.</div>
                        </div>
                    </div>
                </Fade>
                <Fade right>
                    <div className="right">
                        <h4>SANDVİÇLER</h4>
                        <div className="line"/>
                        <div className="menuContainer">
                            <div className="menuHeader">Cheddar Steak Sandwich<div className="price">15.50₺</div></div>
                            <div className="menuContent">Sandwich ekmeği arasına steak et, meksika biberi, mantar, soğan, cheddar peyniri, marul ve parmak patates ile servis edilir.</div>
                        </div>
                        <div className="menuContainer">
                            <div className="menuHeader">Club Sandwich<div className="price">35.50₺</div></div>
                            <div className="menuContent">Tost ekmeği, ızgara tavuk, salam, jambon, turşu, kaşar peyniri, domates ve parmak patates ile servis edilir.</div>
                        </div>
                        <div className="menuContainer">
                            <div className="menuHeader">Peynirli Sandwich<div className="price">23.00₺</div></div>
                            <div className="menuContent">Sandvich ekmeği arasına beyaz peynir, domates, salatalık, kıvırcık ve parmak patates ile servis edilir.</div>
                        </div>
                        <div className="menuContainer">
                            <div className="menuHeader">Köfte Sandwich<div className="price">19.99₺</div></div>
                            <div className="menuContent">Sandvich ekmeği, köfte, domates, turşu, kıvırcık, özel sos ve parmak patates ile servis edilir.</div>
                        </div>
                        <div className="menuContainer">
                            <div className="menuHeader">Ton Balıklı Sandwich<div className="price">23.80₺</div></div>
                            <div className="menuContent">Sandvich ekmeği, ton balığı, kapari turşu, soğan, domates, kıvırcık ve parmak patates ile servis edilir.</div>
                        </div>
                    </div>
                </Fade>
            </div>
            <div className="buttonStage">
                <Link to="/menu"><button type="submit">TÜM MENÜLERİ GÖSTER</button></Link>
            </div>
        </div>
    )
}
