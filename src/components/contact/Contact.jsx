import React from 'react';
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {FaFacebookF} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <HiOutlineMail className="contact__svg"/>
                        <h4>E-mail</h4>
                        <h5>dayvkbasf@gmail.com</h5>
                        <a href="mailto:dayvkbasf@gmail.com">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <FaFacebookF className="contact__svg"/>
                        <h4>Facebook</h4>
                        <h5>Fbub Achiver</h5>
                        <a href="#">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className="contact__svg"/>
                        <h4>What's App</h4>
                        <h5>+7 892 763 88 10</h5>
                        <a href="#">Send a message</a>
                    </article>
                </div>
                <form>
                    <input type="text" name="name" placeholder="Your full name" required/>
                    <input type="email" name="email" placeholder="Your full E-mail" required/>
                    <textarea name="message" rows="7" placeholder="Your message" required></textarea>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;