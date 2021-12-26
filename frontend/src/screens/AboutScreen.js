import React from 'react'
import "../styles/About/about.css";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function AboutScreen() {
    return (
        <div className="about">
            <div className="headerStage">
                <div className="headerText">Hakkımızda</div>
                <div className="line"/>
            </div>
            <div className="informationStage">
                <div className="left">
                    <img src="https://images.pexels.com/photos/4253312/pexels-photo-4253312.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="about" />
                </div>
                <div className="right">
                    <div className="text">
                        <h4>HAKKIMIZDA BİRKAÇ SÖZ</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin lobortis augue, eget commodo dui posuere nec. Aenean tincidunt blandit turpis sit amet tincidunt.</p>
                        <p>Aliquam consequat blandit pulvinar. Quisque pharetra, lectus pharetra condimentum tincidunt, velit ante rutrum sapien, eget rhoncus purus enim at urna. Morbi dictum dapibus commodo. Integer tristique pharetra euismod. Donec semper quam leo, vitae ullamcorper dolor vestibulum vel. Nam tristique magna ante, quis viverra libero euismod quis.</p>                        
                        <h4>NEDEN BİZİ SEÇİN?</h4>
                        <p>Donec vel rhoncus lectus, non dictum nisl. In feugiat ante sit amet erat tempus, in maximus leo commodo. Donec sit amet feugiat purus. Praesent ut molestie nunc, in mattis elit.</p>
                    </div>
                </div>
            </div>
            <div className="someFactsStage">
                <div className="headerStage">
                    <div className="headerText">Bazı Gerçekler</div>
                </div>
                <div className="cardStage">
                    <div className="card">
                        <div className="left">
                            <i class="fas fa-user-friends"></i>
                        </div>
                        <div className="right">
                            <h1>5437</h1>
                            <small>MUTLU MÜŞTERİLER</small>
                        </div>
                    </div>
                    <div className="card">
                        <div className="left">
                            <i class="fas fa-utensils"></i>
                        </div>
                        <div className="right">
                            <h1>1230</h1>
                            <small>MUHTEŞEM YEMEKLER</small>
                        </div>
                    </div>
                    <div className="card">
                        <div className="left">
                            <i class="fas fa-mug-hot"></i>
                        </div>
                        <div className="right">
                            <h1>251</h1>
                            <small>MEMNUN PERSONEL</small>
                        </div>
                    </div>
                    <div className="card">
                        <div className="left">
                            <i class="fas fa-fish"></i>
                        </div>
                        <div className="right">
                            <h1>9437</h1>
                            <small>ÇALIŞMA ZAMANI</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ourStuffStage">
                <div className="headerStage">
                    <div className="headerText">Kadromuz</div>
                </div>
                <div className="ourStuffCardStage">
                    <div className="ourStuffCard">
                        <img src="https://images.pexels.com/photos/10432651/pexels-photo-10432651.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="staffimage-1"/>
                        <div className="textStage">
                            <h4>AD SOYAD</h4>
                            <small>şef</small>
                        </div>
                    </div>
                    <div className="ourStuffCard">
                        <img src="https://images.pexels.com/photos/3298687/pexels-photo-3298687.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="staffimage-2"/>
                        <div className="textStage">
                            <h4>AD SOYAD</h4>
                            <small>şef</small>
                        </div>
                    </div>
                    <div className="ourStuffCard">
                        <img src="https://images.pexels.com/photos/5737823/pexels-photo-5737823.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="staffimage-3"/>
                        <div className="textStage">
                            <h4>AD SOYAD</h4>
                            <small>şef</small>
                        </div>
                    </div>
                    <div className="ourStuffCard">
                        <img src="https://images.pexels.com/photos/4252137/pexels-photo-4252137.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="staffimage-4"/>
                        <div className="textStage">
                            <h4>AD SOYAD</h4>
                            <small>şef</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
