import React from 'react';
import "../styles/Contact/contact.css";
import emailjs from 'emailjs-com';

export default function ContactScreen() {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_gdw8al5', 'template_itwmc61', e.target, 'user_1fRQ5KP751jM7lJm6PMc7')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
    }
    return (
        <div className="contact">
            <div className="headerStage">
                <div className="headerText">Contact Us</div>
                <div className="line" />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id purus mauris. Praesent et erat ex. Duis commodo eget mauris a mattis. In ut eleifend tellus, sed vulputate justo. Mauris finibus purus quis porttitor bibendum. Donec non felis sed dolor semper venenatis quis in nulla. Vestibulum et eleifend ante.
                </p>
            </div>
            <div className="cardStage">
                <div className="card">
                    <i class="fas fa-car-side"></i>
                    <h3>PARKING</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper est vitae ante dapibus, at faucibus ipsum condimentum.</p>
                </div>
                <div className="card">
                    <i class="fas fa-phone-alt"></i>
                    <h3>TELEPHONE</h3>
                    <p>Phasellus a tempor odio. Nullam sapien urna, gravida a est id, facilisis aliquam diam. Suspendisse potenti. Phasellus sagittis ligula ac justo eleifend, ut finibus dui euismod.</p>
                    <h4>+1 800 603 6035</h4>
                </div>
                <div className="card">
                    <i class="far fa-envelope"></i>
                    <h3>EMAIL</h3>
                    <p>Quisque luctus eu neque in pharetra. Aenean aliquet, ex et fringilla convallis, purus justo vestibulum nisl, sed sodales nibh augue sed magna.</p>
                    <h4><a href="mailto:mail@demolink.org">mail@demolink.org</a></h4>
                </div>
            </div>
            <div className="contactStage">
                <div className="headerStage">
                    <div className="headerText">Contact Form</div>
                </div>
                <form onSubmit={sendEmail} id="contact-form">
                    <div className="top">
                        <div className="left">
                            <input type="text" placeholder="First Name*" name="fname"/>
                            <input type="text" placeholder="Last Name*" name="lname"/>
                            <input type="email" placeholder="Your Email*" name="email"/>
                        </div>
                        <div className="right">
                            <textarea name="message" form="contact-form" placeholder="Your Message" rows="6"></textarea>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="buttonStage">
                            <button type="submit">SEND MESSAGE</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
