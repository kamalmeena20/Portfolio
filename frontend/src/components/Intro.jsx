import React, { useEffect, useRef } from 'react'

import backgroundimg from '../images/bg-image.jpg'
import radhe from '../images/myprofile.jpg'
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import RedditIcon from '@mui/icons-material/Reddit';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import resume from '../data/resume.pdf';
import Typed from "typed.js"
import { yellow } from '@mui/material/colors';

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Intro() {

    let text = useRef(null)
    useEffect(() => {
        const typedText = new Typed(text.current, {
            strings: ["Pre-Final Collage Student", "Frontend Developer", "Machine Learning Enthusiast"],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true,
            showCursor: false,
        });

        return () => {
            typedText.destroy(); // Cleanup on component unmount
        };
    }, [text])

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <div class="home w-100 my-4  pb-0 " data-aos="flip-down" >
            <div class="home-content pb-4 ">
                <h3 class="hello mb-0 d-md-block d-none" data-aos="slide-top">Hello this is</h3>
                <h1>Kamal Meena</h1>

                <div class="content" data-aos="slide-right" >
                    <h2>Kamal Meena</h2>
                    <h2 className='content-h2' >Kamal Meena</h2>
                </div>

                <h3 class="mb-0"><span class="text" ref={text} ></span></h3>
                <p class='' data-aos="slide-bottom">Passionate full-stack web developer adept in HTML, CSS, JavaScript, React, Bootstrap, Express, Node.js, and MongoDB, creating dynamic, responsive websites for seamless user experiences.
                </p>
                <div class="home-icons" data-aos="fade-down-left">
                    <a href="https://x.com/imradhee__?t=66xuEj6WwqiXZ7cvtAVTLQ&s=09"><XIcon className=' p-md-0 p-1' /></a>
                    <a href="https://www.linkedin.com/in/kamal-meena-787706289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><LinkedInIcon className='p-md-0 p-1' /></a>
                    <a href="https://www.reddit.com/u/imradhee__/s/LLfg638cWd"><RedditIcon className='p-md-0 p-1' /></a>
                    <a href="https://github.com/kamalmeena20"><GitHubIcon className='p-md-0 p-1' /></a>
                    <a href="https://www.instagram.com/imradhee_?igsh=MXV4aGI1emUzanQ0ZQ=="><InstagramIcon className='p-md-0 p-1' /></a>
                </div>
                {/* <div class="home-icons">                                
                    <Link className={'link-style'} to={'https://x.com/imradhee__?t=66xuEj6WwqiXZ7cvtAVTLQ&s=09'}><XIcon className='p-1' sx={{ fontSize: 18 }} /></Link>
                    <Link className={'link-style'} to={'https://www.linkedin.com/in/kamal-meena-787706289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'}><LinkedInIcon sx={{ fontSize: 18 }} /></Link>
                    <Link className={'link-style'} to={'https://www.reddit.com/u/imradhee__/s/LLfg638cWd'}><RedditIcon sx={{ fontSize: 18 }} /></Link>
                    <Link className={'link-style'} to={'https://github.com/kamalmeena20'}><GitHubIcon sx={{ fontSize: 18 }} /></Link>
                    <Link className={'link-style'} to={'https://www.instagram.com/imradhee_?igsh=MXV4aGI1emUzanQ0ZQ=='}><InstagramIcon sx={{ fontSize: 18 }} /></Link>
                </div> */}
                <a href="#" onClick={() => window.open(resume)} class="button-box1 mb-0"   >Resume</a>
            </div>
            <div class="side-img" data-aos="slide-left">
                <img src={radhe} ></img>
            </div>

        </div >
    )
}

