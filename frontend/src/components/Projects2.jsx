import React, { useEffect, useState } from 'react'
// import Pbox from './Pbox'

import hodo01 from '../images/hodo01.jpg'
// import hodo02 from '../images/hodo02.jpg'
// import hodo03 from '../images/hodo03.jpg'

import nutrifit01 from '../images/nutrifit01.jpg'
// import nutrifit02 from '../images/nutrifit02.jpg'
// import nutrifit03 from '../images/nutrifit03.jpg'

import port01 from '../images/port01.jpg'



// import { Carousel } from 'bootstrap/dist/js/bootstrap.bundle'
import Carousel from './Carousel'

// import AOS from 'aos';
// import 'aos/dist/aos.css';
const data = [
    {
        name: "HODO",
        description: "Developed a platform for travelers to share their visited places. Implemented real-time chat functionality with Socket.IO ",
        images: ["hodo01.jpg", "hodo02.jpg", "hodo03.jpg"],
        // pending: false,
        link: "https://hodoofficial.onrender.com/"
    },
    {
        name: "NUTRIFIT",
        description: "Provide personalized diet plans, exercise routines, and doctor consultations to help users achieve their health goals.",
        images: ["nutrifit01.jpg", "nutrifit02.jpg", "nutrifit03.jpg"],
        // pending: false,
        link: "http://nutrifit-2lm8.onrender.com"
    },
    {
        name: "New Project",
        description: "Coming soon work under process...",
        images: ["port01.jpg", "port01.jpg", "port01.jpg"],
        // pending: true,
        link: "#"
    }
]

export default function Projects() {

    const [index, setindex] = useState(0)

    // useEffect(() => {
    //     AOS.init({ duration: 2000 });
    // }, []);

    return (
        <div className='propage container-fluid  p-0 mt-5 pt-lg-5 pt-md-5 pt-3 pb-lg-3 pb-5' data-aos="slide-right">
            <div className='sub-title m-0 mt-1  '><h1 className='m-0'>My <span >Projects</span> </h1></div>

            {/* <h1 class="sub-title">My <span>Services</span></h1> */}
            <div className="row d-lg-flex d-none prow p-0 justify-content-around  position-relative " id='projects'>

                <Carousel name={data[0].name} description={data[0].description} images={data[0].images} pending={data[0].pending} link={data[0].link} />
                <Carousel name={data[1].name} description={data[1].description} images={data[1].images} pending={data[1].pending} link={data[1].link} />
                <Carousel name={data[2].name} description={data[2].description} images={data[2].images} pending={data[2].pending} link={data[2].link} />


            </div>
            <div className="row crow   p-0 d-lg-none d-flex justify-content-sm-around justify-content-center  align-items-center position-relative flex-sm-row flex-column-reverse" id='projects'>
                <div className="col-sm-2 col-12 d-lg-none mb-0 gap-4 mt-sm-0 mt-4 p-0 d-flex flex-sm-column flex-wrap flex-row align-items-center justify-content-sm-between justify-content-around ">
                    <img src={hodo01} className='m-0' alt="" onClick={() => setindex(0)} />

                    <img src={nutrifit01} className='m-0' alt="" onClick={() => setindex(1)} />

                    <img src={port01} className='m-0' alt="" onClick={() => setindex(2)} />
                </div>
                <Carousel name={data[index].name} description={data[index].description} images={data[index].images} pending={data[index].pending} link={data[index].link} />



            </div>

        </div>
    )
}