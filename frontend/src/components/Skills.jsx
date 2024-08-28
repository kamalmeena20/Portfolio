import React, { useEffect, useState } from 'react'
import 'boxicons'

// import AOS from 'aos';
// import 'aos/dist/aos.css';

const data = [
    {
        name: "html",
        name2: "html5",
        background: "orangered",
        height: 90,
        color: "#f16529"
    },
    {
        name: "CSS",
        name2: "css3",
        background: "blue",
        height: 85,
        color: "#2965f1"
    },
    {
        name: "javascript",
        name2: "javascript",
        background: "orange",
        height: 80,
        color: "yellow"
    },
    {
        name: "nodeJS",
        name2: "nodejs",
        background: "green",
        height: 70,
        color: "green"
    },
    {
        name: "expressJS",
        name2: "edge",
        background: "white",
        height: 80,
        color: "gray"
    },
    {
        name: "python",
        name2: "python",
        background: "yellow",
        height: 70,
        color: "yellow"
    },
    {
        name: "mongodb",
        name2: "mongodb",
        background: "green",
        height: 75,
        color: "green"
    },
    {
        name: "reactJS",
        name2: "react",
        background: "skyblue",
        height: 80,
        color: "skyblue"
    },
    {
        name: "bootstrap",
        name2: "bootstrap",
        background: "purple",
        height: 80,
        color: "purple"
    },
    {
        name: "tailwind",
        name2: "tailwind",
        background: "purple",
        height: 60,
        color: "purple"
    }
]


export default function Skill() {

    // useEffect(() => {
    //     AOS.init({ duration: 2000 });
    // }, []);

    return (
        <div className='skillpage container-fluid pt-md-5 pt-3 pb-3 mt-5' data-aos="fade-up">
            <h2 className='my-md-4 my-2'>My<span> Skills</span></h2>

            <div className="row mx-0 w-100  skillrow px-0 flex-columns justify-content-start align-items-start " id='skills'>
                {
                    data.map((item) => {
                        return <div className="col-md-4 col-12 plots d-flex flex-column align-items-center px-0 " style={{ "height": "100%" }}>
                            <h6 className='text-white mb-1 text-start  d-block'>{item.name} <span className="">{item.height}%</span></h6>
                            <div className="outer mb-md-4 mb-2   h-100  p-0  overflow-hidden  position-relative ">
                                {/* <img src={getimage(item.name)} className='w-75 mx-auto  mb-2' alt="" /> */}
                                <div className=' graph' style={{ "width": `${item.height}%` }}></div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div >
    )
}
