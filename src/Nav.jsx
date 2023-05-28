import React, { useEffect, useState } from 'react'
import './Nav.css';

const Nav = () => {
    const [show, handleShow] = useState(false);
    const transitionNavbar = () =>{
        if(window.scrollY > 100){
           handleShow(true);
        }else{
            handleShow(false);
        }
    };

    useEffect (() =>{
      window.addEventListener("scroll",transitionNavbar);
      return () => window.removeEventListener("scroll",transitionNavbar);
    },[])

  return (
    <div className={`nav ${show && `nav_black`}`}>
        <div className="nav_content">
        <img className='nav_logo' src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" />
        <img className='nav_avatar' src="https://netflixui-eight.vercel.app/static/media/user.265c314a69c617ffece1.jpg" alt="" />
        </div>
     </div>
  )
}

export default Nav