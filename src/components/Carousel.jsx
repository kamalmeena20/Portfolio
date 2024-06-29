import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LaunchIcon from '@mui/icons-material/Launch';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Pbox({ name, description, images, pending, link }) {
    const [classname, setclass] = useState("layer position-absolute pt-5")
    const [image2, setimage] = useState("")
    const handlehover = () => {
        setclass("layer position-absolute pt-5 show")
    }
    const handleout = () => {
        setclass("layer position-absolute opacity-75 ")
    }

    const getimage = (item) => {
        return require(`../images/${item}`)
    }
    return (
        <>
            <div className='col-lg-4 col-md-6 col-8   p-xl-5 p-lg-4 p-0 text-white '>
                <div className="p-0 m-0 w-100 innerone position-relative">
                    <Carousel showThumbs={false} autoPlay={true} showStatus={false} interval={3000} transitionTime={2000} infiniteLoop={true} showIndicators={false} >
                        {images.map((item) => {
                            return (
                                <div className='w-100'>
                                    <img src={getimage(item)} className='w-100 rounded-0' alt="" onMouseEnter={() => handlehover()} onMouseLeave={() => handleout()} />
                                </div>
                            )
                        })}
                    </Carousel>
                    {/* <div className="about py-2 mt-2">
                        <h4 className='m-0 p-0 '>{name} <Link className='p-0 r' to={link}><LaunchIcon className='p-0 m-0   mb-1  ' /></Link></h4>
                        <p className='m-0 d-lg-block d-none'>{description}</p>
                    </div> */}
                </div >
            </div >

        </>
    )
}