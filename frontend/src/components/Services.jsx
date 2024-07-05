import React, { useEffect } from 'react'

import CodeIcon from '@mui/icons-material/Code';
import CropIcon from '@mui/icons-material/Crop';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import { red } from '@mui/material/colors';

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Services() {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    return (
        <div class="services mt-3" data-aos="flip-up">
            <div class="services s2" id="services">

                <h1 class="sub-title my-md-5 my-0" data-aos="slide-right">My <span>Services</span></h1>

                <div class="services-list">
                    <div>
                        <CodeIcon className='service-box-icon' sx={{ fontSize: 45, color: "#0ef", }} />
                        <h2>Web Design</h2>
                        <p>Design stunning, responsive web interfaces with Figma, transforming concepts into visually captivating digital experiences.
                        </p>
                        <a href="#" class="read d-none " >Learn more</a>
                    </div>
                    <div>
                        <CropIcon className='service-box-icon' sx={{ fontSize: 40, color: "#0ef" }} />
                        <h2>Web Development</h2>
                        <p>Develop robust, scalable web applications using Bootstrap, ReactJS, NodeJS, ExpressJS, and MongoDB, ensuring seamless integration and high performance.</p>
                        <a href="#" class="read d-none">Learn more</a>
                    </div>
                    <div>
                        <AutoFixHighIcon className='service-box-icon' sx={{ fontSize: 40, color: "#0ef" }} />
                        <h2>UI/UX </h2>
                        <p>Enhance user experiences with cutting-edge UI/UX principles, optimizing interfaces for maximum usability and accessibility through innovative design strategies.</p>
                        <a href="#" class="read d-none">Learn more</a>
                    </div>
                </div>
            </div>
            <div class="container-fluid services02  mx-auto">
                <h1 class="sub-title mb-5">My <span>Services</span></h1>
                <div id="servicesCarousel" class="carousel slide " data-ride="carousel">
                    <div class="carousel-inner ">
                        <div class="carousel-item active">
                            <div class="service-div p-4">
                                <h2>Web Design</h2>
                                <p>Design stunning, responsive web interfaces with Figma, transforming concepts into visually captivating digital experiences.
                                </p>
                                <a href="#" class="read d-none">Learn more</a>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="service-div p-4">
                                <h2>Web Development</h2>
                                <p>Develop robust, scalable web applications using Bootstrap, ReactJS, NodeJS, ExpressJS, and MongoDB, ensuring seamless integration and high performance.</p>
                                <a href="#" class="read d-none">Learn more</a>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="service-div p-4">
                                <h2>UI/UX </h2>
                                <p>Enhance user experiences with cutting-edge UI/UX principles, optimizing interfaces for maximum usability and accessibility through innovative design strategies.</p>
                                <a href="#" class="read d-none">Learn more</a>
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#servicesCarousel" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only"></span>
                    </a>
                    <a class="carousel-control-next" href="#servicesCarousel" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only"></span>
                    </a>
                </div>
            </div>


        </div>

    )
}
