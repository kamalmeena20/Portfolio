import React, { useEffect, useState } from 'react'

import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';

// import AOS from 'aos';
// import 'aos/dist/aos.css';

export default function Contact() {
    const [data, setdata] = useState({ name: "", email: "", mobile: "", message: "" })
    const [left, setleft] = useState(true)
    const handlemessage = async () => {
        console.log(data)
        if (data.message === "" || data.name === "" || data.email === "" || data.mobile === "") {
            alert("Fill the information properly")
            return
        }


        const response = await fetch("https://portfoliobackend-r36w.onrender.com/message", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const json = await response.json();
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
    // useEffect(() => {
    //     AOS.init({ duration: 2000 });
    // }, []);
    return (
        <>
            <div class="contact p-0 position-relative " id="contact" data-aos="slide-left">
                <div class="contact-text p-0 d-md-block d-none">
                    <h2 >Contact<span className='d-inline'> Me</span></h2>

                    <h4>Let's work Together</h4>

                    <div class="contact-list p-0 m-3">
                        <li className='li-li'><EmailIcon sx={{ fontSize: 20, color: "#0ef" }} /> hanshkamalmeena2005@gmail.com</li>
                        <li className='li-li'><PhoneIcon sx={{ fontSize: 20, color: "#0ef" }} />+91 9680477712</li>
                    </div>

                    <div class="home-icons icons2">
                        <a href="https://x.com/imradhee__?t=66xuEj6WwqiXZ7cvtAVTLQ&s=09"><XIcon className='p-md-0 p-1' /></a>
                        <a href="https://www.linkedin.com/in/kamal-meena-787706289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><LinkedInIcon className='p-md-0 p-1' /></a>
                        <a href="http://t.me/radhesignin"><TelegramIcon className='p-md-0 p-1' /></a>
                        <a href="https://www.instagram.com/imradhee_?igsh=MXV4aGI1emUzanQ0ZQ=="><InstagramIcon className='p-md-0 p-1' /></a>
                    </div>

                </div>

                <div class="contact-form mt-0 d-md-block d-none">
                    <form action="">
                        <input type="text" name='name' placeholder='Enter your name' onChange={(e) => handlechange(e)} />
                        <input type="number" name='mobile' placeholder='Enter your mobile no. +91 ' onChange={(e) => handlechange(e)} />
                        <input type="email" name='email' placeholder='Enter your email' onChange={(e) => handlechange(e)} />
                        <textarea name="message" id="message" placeholder='Enter your message' cols={20} rows={5} onChange={(e) => handlechange(e)} ></textarea>
                        <button onClick={() => handlemessage()} className='send' >Submit</button>
                    </form>
                </div>

                <div className={!left ? "contact2 col-11 pt-3 p-0 d-md-none d-flex justify-content-between flex-column slideshow" : "contact2 col-11 pt-3 p-0 d-md-none d-flex justify-content-between flex-column slidehide"}>
                    <input type="text" name='name' placeholder='name' className=' mb-lg-3 mb-2 px-1 border-none' value={data.name} onChange={(e) => handlechange(e)} />
                    <input type="number" name='mobile' placeholder='mobile' className=' mb-lg-3 mb-2 px-1 border-none w-100' value={data.mobile} onChange={(e) => handlechange(e)} />
                    <input type="email" name='email' placeholder='email' className=' mb-lg-3 mb-2 px-1 border-none' value={data.email} onChange={(e) => handlechange(e)} />
                    <textarea name="message" id="message" placeholder='message' cols={20} rows={5} className='px-1 w-100' value={data.message} onChange={(e) => handlechange(e)} ></textarea>

                    <div className="d-flex justify-content-between ">
                        <button className='text-white bg bg-black px-2 rounded-1 mt-sm-3 mt-2' onClick={() => setleft(true)} >back</button>
                        <button className='text-white bg bg-black ms-auto px-2 rounded-1 mt-sm-3 mt-2' onClick={() => handlemessage()} >Send Message</button>
                    </div>
                </div>

                <div className={left ? "d-md-none showbuttons sliders px-2 pt-0 pb-0 bg bg-black" : "p-2 pt-4 pb-0 d-md-none hidebuttons sliders bg bg-black"} >
                    <h1 className='py-1 m-0 mt-1 mb-sm-2  w-100 text-center px-4 '>Contact Me</h1>
                    <p className='mb-2 mt-2 px-1 d-sm-block d-none text-center'>For inquiries about new or ongoing projects, please feel free to reach out. I'm available to discuss your ideas and assist with your development needs </p>
                    <p className='mb-2 mt-2 px-1 d-sm-none text-center'>Any exciting project? react me out. </p>
                    <ul className='p-0 my-1 mt-sm-3 text-start text-white m-0 conlist d-flex justify-content-center gap-4 w-75   '>
                        <li className='list-style-none  m-0 ms-0 p-0'><Link to={"https://www.linkedin.com/in/kamal-meena-787706289/"} className='text-decoration-none text-white '><LinkedInIcon className='p-1' sx={{ color: "white", backgroundColor: "#0ef", fontSize: 25, borderRadius: "100%" }} /></Link></li>
                        <li className='list-style-none  m-0 ms-0 '><Link to={"https://www.instagram.com/imradhee_?igsh=MXV4aGI1emUzanQ0ZQ=="} className='text-decoration-none text-white '><InstagramIcon className='p-1' sx={{ color: "white", backgroundColor: "#0ef", fontSize: 25, borderRadius: "100%" }} /></Link></li>
                        <li className='list-style-none  m-0 ms-0 ' ><Link to={"https://x.com/imradhee__?t=66xuEj6WwqiXZ7cvtAVTLQ&s=09"} className='text-decoration-none text-white '><XIcon className='p-1' sx={{ color: "white", backgroundColor: "#0ef", fontSize: 25, borderRadius: "100%" }} /></Link></li>
                        <li className='list-style-none  m-0 ms-0 '><Link to={"http://t.me/radhesignin"} className='text-decoration-none text-white '><TelegramIcon className='p-1' sx={{ color: "white", backgroundColor: "#0ef", fontSize: 25, borderRadius: "100%" }} /></Link></li>
                        <li className='list-style-none  m-0 ms-0 '>
                            <Link to={"https://github.com/kamalmeena20"} className='text-decoration-none text-white '><GitHubIcon className='p-1' sx={{ color: "white", backgroundColor: "#0ef", fontSize: 25, borderRadius: "100%" }} /></Link></li>
                    </ul>

                    <ul className='mt-sm-3 mt-1 p-0 mb-1 d-flex flex-wrap justify-content-center'>
                        <li className='me-2'><EmailIcon className='mb-1' sx={{ fontSize: 20 }} />hanshkamalmeena2005@gmail.com</li>
                        <li className='me-2'><PhoneIcon className='mb-1' sx={{ fontSize: 20 }} />+91 9680477712</li>
                    </ul>
                    <button className='ms-auto me-0 mt-sm-4 mt-2 mb-0' onClick={() => setleft(false)} >send message</button>
                </div>
            </div >
        </>

    )
}
