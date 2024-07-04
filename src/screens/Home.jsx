import React, { useEffect, useState } from 'react'

import backimage from '../images/bg-image.jpg'
import Navbar from '../components/Navbar';
import Intro from '../components/Intro';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Skills from '../components/Skills';
import Projects2 from '../components/Projects2';
import End from '../components/End';

export default function Home() {
    const [loading, setloading] = useState(false)

    useEffect(() => {
        // setloading(true);
        setTimeout(() => {
            setloading(false);
        }, 3500);
    }, []);


    return (
        <>
            <div className={loading ? "d-none" : 'position-relative w-100 p-0 '}>
                <Navbar />
                <Intro />
                <About />
                <Services />
                <Skills />
                <Projects2 />
                <Contact />
                <End />
                {/* <img src={backimage} className='position-absolute top-0 w-100 bg-image' /> */}
            </div>



            <div className={loading ? "loader position-absolute top-0 loader" : "d-none"}>
                <svg width="100%" height={500} viewBox="0 0 200 100">

                    {/* <path d="M80,33 V70 C110,70 110,35 85,35" stroke="red" stroke-width="5" fill="none" stroke-dasharray="300" stroke-dashoffset="300">
                        <animate attributeName="stroke-dashoffset" from="300" to="0" dur="5s" fill="freeze" />
                    </path> */}
                    <path d="M75,60 V80 L130,35 H104 L84.3,51.3 L90,58 L94,54.8 L91.5,52 L106.5,40 H115 L80,69 L80,55 L75,60    " stroke="white" stroke-width="0.4" fill="none" stroke-dasharray="300" stroke-dashoffset="300">
                        <animate attributeName="stroke-dashoffset" from="300" to="0" dur="2s" fill="freeze" />
                    </path>
                    <path d="M75,58 L80,53 V30 L91.2,44.2 L96,40.3 L75,16 V57.9" stroke="white" stroke-width="0.4" fill="none" stroke-dasharray="300" stroke-dashoffset="300">
                        <animate attributeName="stroke-dashoffset" from="300" to="0" dur="5s" fill="freeze" />
                    </path>
                    <path d="M95,65.3 L108,80 H130 L108,55 L103,59 L117,75 H110 L99,62 L95,65.3" stroke="white" stroke-width="0.4" fill="none" stroke-dasharray="300" stroke-dashoffset="300">
                        <animate attributeName="stroke-dashoffset" from="300" to="0" dur="5s" fill="freeze" />
                    </path>
                    <path d="M96.5,50.5 L97.8,51.9 L102,48.5 L100.8,47 L96.5,50.5" stroke="white" stroke-width="0.4" fill="none" stroke-dasharray="300" stroke-dashoffset="300">
                        <animate attributeName="stroke-dashoffset" from="300" to="0" dur="15s" fill="freeze" />
                    </path>

                </svg>
                <h5 className='text-center text-white opacity-50 position-relative hr-lines'>Welcome Viewers </h5>
            </div >
        </>
    )
}
