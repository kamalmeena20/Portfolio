import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
export default function Navbar() {
    const [classs, setclass] = useState("d-none")
    const [show, setshow] = useState(false)
    const handleclick = () => {
        if (!show) {
            setclass(" menubar position-absolute top-0 mt-5 end-0 text-start bg bg-white show")
            setshow(true)
        }
        else {
            setclass("menubar position-absolute top-0 mt-5 end-0 p-0 text-start bg bg-white hide")
            setshow(false)
        }
    }

    return (
        <div>
            <header class="header py-2 position-relative">
                <a href="#" class="logo">Radhee</a>
                <nav class="navbar">
                    <a href="#home" class="active">Home</a>
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#project">Projects</a>
                    <a href="#contact">Contact</a>
                </nav>
                <a className='hamburgur ' ><MenuIcon onClick={() => handleclick()} /></a>
                <div class={classs}>
                    <a className='d-block fs-6 px-4' href="#home" >Home</a>

                    <a className='d-block fs-6 px-4' href="#about">About</a>

                    <a className='d-block fs-6 px-4' href="#skills">Skills</a>

                    <a className='d-block fs-6 px-4' href="#project">Projects</a>

                    <a className='d-block fs-6 px-4' href="#contact">Contact</a>
                    {/* <hr className='m-0' /> */}
                </div>
            </header>
        </div>
    )
}
