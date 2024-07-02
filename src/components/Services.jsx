import React from 'react'

import CodeIcon from '@mui/icons-material/Code';
import CropIcon from '@mui/icons-material/Crop';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import { red } from '@mui/material/colors';

export default function Services() {
    return (
        <div class="services mt-3">
            <div class="services s2" id="services">

                <h1 class="sub-title my-md-5 my-0">My <span>Services</span></h1>

                <div class="services-list">
                    <div>
                        <CodeIcon className='service-box-icon' sx={{ fontSize: 45, color: "#0ef" }} />
                        <h4>Web Design</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates nemo vel aspernatur
                            quaerat
                            laboriosam incidunt animi amet maxime dolore nobis?
                        </p>
                        <a href="#" class="read">Learn more</a>
                    </div>
                    <div>
                        <CropIcon className='service-box-icon' sx={{ fontSize: 40, color: "#0ef" }} />
                        <h2>Web Development</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates nemo vel aspernatur
                            quaerat
                            laboriosam incidunt animi amet maxime dolore nobis?</p>
                        <a href="#" class="read">Learn more</a>
                    </div>
                    <div>
                        <AutoFixHighIcon className='service-box-icon' sx={{ fontSize: 40, color: "#0ef" }} />
                        <h2>UI/UX </h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates nemo vel aspernatur
                            quaerat
                            laboriosam incidunt animi amet maxime dolore nobis?</p>
                        <a href="#" class="read">Learn more</a>
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
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates nemo vel aspernatur
                                    quaerat
                                    laboriosam incidunt animi amet maxime dolore nobis?
                                </p>
                                <a href="#" class="read">Learn more</a>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="service-div p-4">
                                <h2>Web Development</h2>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates nemo vel aspernat
                                    quaerat laboriosam incidunt animi amet maxime dolore nobis?</p>
                                <a href="#" class="read">Learn more</a>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="service-div p-4">
                                <h2>UI/UX </h2>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates nemo vel asperna quaerat
                                    laboriosam incidunt animi amet maxime dolore nobis?</p>
                                <a href="#" class="read">Learn more</a>
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
