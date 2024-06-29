import React from 'react'

import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';

export default function Contact() {
    return (
        <div class="contact" id="contact">
            <div class="contact-text">
                <h2>Contact<span> Me</span></h2>

                <h4>Let's work Together</h4>

                <div class="contact-list">
                    <li><EmailIcon sx={{ fontSize: 20, color: "#0ef" }} /> radhemee2005@gmail.com</li>
                    <li><PhoneIcon sx={{ fontSize: 20, color: "#0ef" }} />+91 9680477712</li>
                </div>

                <div class="home-icons">
                    <a href="https://x.com/imradhee__?t=66xuEj6WwqiXZ7cvtAVTLQ&s=09"><XIcon className='p-md-0 p-1' /></a>
                    <a href="https://www.linkedin.com/in/kamal-meena-787706289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><LinkedInIcon className='p-md-0 p-1' /></a>
                    <a href="http://t.me/radhesignin"><TelegramIcon className='p-md-0 p-1' /></a>
                    <a href="https://www.instagram.com/imradhee_?igsh=MXV4aGI1emUzanQ0ZQ=="><InstagramIcon className='p-md-0 p-1' /></a>
                </div>

            </div>

            <div class="contact-form">
                <form action="">
                    <input type="" placeholder="Enter your name" required />
                    <input type="email" placeholder="Enter your email" required />

                    <input type="" placeholder="Enter your Subject" />
                    <textarea name="" id="" cols="40" rows="10" placeholder="Enter your message" required></textarea>
                    <input type="submit" value="submit" class="send" />
                </form>
            </div>
        </div >

    )
}
