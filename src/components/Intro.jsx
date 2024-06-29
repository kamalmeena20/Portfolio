import React, { useEffect, useRef } from 'react'

import backgroundimg from '../images/bg-image.jpg'
import radhe from '../images/myprofile.jpg'
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import RedditIcon from '@mui/icons-material/Reddit';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';
import Typed from "typed.js"
import { yellow } from '@mui/material/colors';

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

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


    // useEffect(() => {
    //     gsap.fromTo('.intro',
    //         {
    //             y: 300,
    //             opacity: 0,
    //         },
    //         {
    //             scrollTrigger: {
    //                 trigger: ".skillpage",
    //                 toggleActions: "play none none none",
    //                 scroller: "body",
    //                 start: "top 120%",
    //                 // end: "bottom 60%",
    //                 // markers: true

    //             },
    //             y: "0",
    //             opacity: 1,
    //             duration: 1,
    //         })
    // })

    return (
        <div class="home w-100 my-4 pb-4">
            <div class="home-content">
                <h3 class="hello mb-0 d-md-block d-none">Hello this is</h3>
                <h1>Radhe Meena</h1>

                <div class="content">
                    <h2>Radhe Meena</h2>
                    <h2 className='content-h2'>Radhe Meena</h2>
                </div>

                <h3 class="mb-0"><span class="text" ref={text} ></span></h3>
                <p>I'm a Sophomore at Indian Institute of Information and Technology,Vadodara,
                    Pursuing B.Tech in Computer Science and Engineering.
                </p>
                <div class="home-icons">
                    <a href="https://x.com/imradhee__?t=66xuEj6WwqiXZ7cvtAVTLQ&s=09"><XIcon className='p-md-0 p-1' /></a>
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
                <a href="#about" class="button-box1">More About Me</a>
            </div>
            <div class="side-img">
                <img src={radhe}></img>
            </div>

        </div >
    )
}

