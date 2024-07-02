import React, { useState } from 'react'

import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';

export default function Contact() {
    const [data, setdata] = useState({ name: "", email: "", mobile: "", message: "" })

    const handlemessage = async () => {
        console.log(data)
        if (data.message === "" || data.name === "" || data.email === "" || data.mobile === "") {
            alert("Fill the information properly")
            return
        }

        const response = await fetch("http://localhost:8080/message", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const json = response.json();
        if (!json.success) {
            alert("something went wrong try again")
        } else {
            alert("Message sent successfully")
        }
    }

    const handlechange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setdata((pdata) => {
            return { ...pdata, [name]: value }
        })
    }
    return (
        <div class="contact p-0" id="contact">
            <div class="contact-text p-0">
                <h2 >Contact<span className='d-inline'> Me</span></h2>

                <h4>Let's work Together</h4>

                <div class="contact-list p-0 m-3">
                    <li className='li-li'><EmailIcon sx={{ fontSize: 20, color: "#0ef" }} /> radhemee2005@gmail.com</li>
                    <li className='li-li'><PhoneIcon sx={{ fontSize: 20, color: "#0ef" }} />+91 9680477712</li>
                </div>

                <div class="home-icons icons2">
                    <a href="https://x.com/imradhee__?t=66xuEj6WwqiXZ7cvtAVTLQ&s=09"><XIcon className='p-md-0 p-1' /></a>
                    <a href="https://www.linkedin.com/in/kamal-meena-787706289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><LinkedInIcon className='p-md-0 p-1' /></a>
                    <a href="http://t.me/radhesignin"><TelegramIcon className='p-md-0 p-1' /></a>
                    <a href="https://www.instagram.com/imradhee_?igsh=MXV4aGI1emUzanQ0ZQ=="><InstagramIcon className='p-md-0 p-1' /></a>
                </div>

            </div>

            <div class="contact-form mt-0">
                <form action="">
                    <input type="text" name='name' placeholder='Enter your name' onChange={(e) => handlechange(e)} />
                    <input type="number" name='mobile' placeholder='Enter your mobile no. +91 ' onChange={(e) => handlechange(e)} />
                    <input type="email" name='email' placeholder='Enter your email' onChange={(e) => handlechange(e)} />
                    <textarea name="message" id="message" placeholder='Enter your message' cols={20} rows={5} onChange={(e) => handlechange(e)} ></textarea>
                    <button onClick={() => handlemessage()} className='send' >Submit</button>
                </form>
            </div>
        </div >

    )
}
