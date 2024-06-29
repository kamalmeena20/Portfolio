import React, { useState } from 'react'
// import Pbox from './Pbox'

import image1 from '../images/project01.jpg'
import image2 from '../images/project02.jpg'
import image3 from '../images/project03.jpg'
// import { Carousel } from 'bootstrap/dist/js/bootstrap.bundle'
import Carousel from './Carousel'

const data = [
    {
        name: "STAVYA",
        description: "Stavya is a Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum ipsum et tenetur ipsa, facilis doloribus eius error laudantium facere ",
        images: ["project01.jpg", "project01.jpg", "project01.jpg"],
        pending: false,
        link: "https://officialstavya.onrender.com/"
    },
    {
        name: "HODO",
        description: "Hodo is a Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum ipsum et tenetur ipsa, facilis doloribus eius error laudantium facere ",
        images: ["project02.jpg", "project02.jpg", "project02.jpg"],
        pending: false,
        link: "https://hodoofficial.onrender.com"
    },
    {
        name: "NUTRIFIT",
        description: "Nutrifit is a Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum ipsum et tenetur ipsa, facilis doloribus eius error laudantium facere n",
        images: ["project03.jpg", "project03.jpg", "project03.jpg"],
        pending: true,
        link: "https://officialstavya.onrender.com/"
    }
]

export default function Projects() {

    const [index, setindex] = useState(0)
    return (
        <div className='propage container-fluid  p-0 mt-5 pt-lg-5 pt-md-5 pt-3 pb-lg-3 pb-5'>
            <div className='sub-title'><h1>My <span >Projects</span> </h1></div>

            {/* <h1 class="sub-title">My <span>Services</span></h1> */}
            <div className="row d-lg-flex d-none prow p-0 justify-content-around  position-relative " id='projects'>

                <Carousel name={data[0].name} description={data[0].description} images={data[0].images} pending={data[0].pending} link={data[0].link} />
                <Carousel name={data[0].name} description={data[0].description} images={data[0].images} pending={data[0].pending} link={data[0].link} />
                <Carousel name={data[0].name} description={data[0].description} images={data[0].images} pending={data[0].pending} link={data[0].link} />


            </div>
            <div className="row prow  m-0 p-0 d-lg-none d-flex justify-content-around align-items-center position-relative " id='projects'>

                <div className="col-2 d-lg-none gap-4 m-0 p-0 d-flex flex-column align-items-center justify-content-between">
                    <img src={image1} className='w-100' alt="" onClick={() => setindex(0)} />

                    <img src={image2} className='w-100' alt="" onClick={() => setindex(1)} />

                    <img src={image3} className='w-100' alt="" onClick={() => setindex(2)} />
                </div>
                <Carousel name={data[index].name} description={data[index].description} images={data[index].images} pending={data[index].pending} link={data[index].link} />



            </div>


        </div>
    )
}