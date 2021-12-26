import React from 'react'
import { Link } from 'react-router-dom';
import "./footer.css";

export default function Footer() {
    return (
        <div className="footer">
            <div className="footerTop">
                <div className="left">
                    <h3>ADRES</h3>
                    <p>Şirket İsmi ve Ünvanı<br/>8901 Cadde Adı,<br/>Şirket Şehir, D04 89GR.</p>
                </div>
                <div className="center">
                    <h3>TAKİP EDİN</h3>
                    <ul>
                        <li><a href="https://tr-tr.facebook.com/"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="https://twitter.com/home?lang=tr"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="https://accounts.google.com/signin/v2/identifier?service=accountsettings&continue=https%3A%2F%2Fmyaccount.google.com%3Futm_source%3Daccount-marketing-page%26utm_medium%3Dgo-to-account-button&flowName=GlifWebSignIn&flowEntry=ServiceLogin"><i class="fab fa-google-plus-g"></i></a></li>
                        <li><a href="https://www.linkedin.com/"><i class="fab fa-linkedin-in"></i></a></li>
                        <li><a href="https://tr.pinterest.com/login/"><i class="fab fa-pinterest"></i></a></li>
                    </ul>
                </div>
                <div className="right">
                    <h3>İLETİŞİM</h3>
                    <p>+1 800 603 6035<br/>+1 800 603 6035<br/><a href="mailto:mail@demolink.org">mail@demolink.org</a></p>
                </div>
            </div>
            <div className="footerBottom">
                <div className="left">
                    <Link to="/"><img src="https://i.hizliresim.com/p0u8f64.png" alt="logo"/></Link>
                    <small>Copyright © 2021. Bütün Hakları Saklıdır.</small>
                </div>
                <div className="right">
                    <ul>
                        <li><Link to="/">ANASAYFA</Link></li>
                        <li><Link to="/about">HAKKIMIZDA</Link></li>
                        <li><Link to="/menu">MENÜ</Link></li>
                        <li><Link to="/gallery">GALERİ</Link></li>
                        <li><Link to="/contact">İLETİŞİM</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
