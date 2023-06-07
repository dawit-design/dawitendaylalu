import React from "react";
import Typed from "react-typed";

export default function Header() {
    return (
        <div id="/" className="header-wrapper">
            <div className="main-info">
                <h1>Software Engineer</h1>
                <Typed
                className='typed-text'
                strings={['Web Design', 'Web Development', 'Graphic Design']}
                typeSpeed={40}
                backSpeed={60}
                loop={true}
                ></Typed>
                <a href="https://drive.google.com/file/d/1zLeSI_nKNVn5Y50hHZLk01bQkZa_cZjW/view?usp=sharing" className="btn-cv-show">Resume</a>
            </div>
        </div>
    )
}
