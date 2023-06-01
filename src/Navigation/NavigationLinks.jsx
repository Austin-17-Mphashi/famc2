import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";



function NavigationLinks() {
    
    const [navBackground, setNavBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 100;
      if (show) {
        setNavBackground(true);
      } else {
        setNavBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const navStyle = {
    backgroundColor: navBackground ? "black" : "transparent",
    transition: "background-color 0.5s ease-out",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
  };

    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={navStyle}>
            <div className=" px-4 px-lg-5 w-100">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse navbar-search-links" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item fw-bolder my-2 my-sm-0"><a className="nav-link active" aria-current="page" href="#!"><Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Home</Link></a></li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><Link to="/signup" style={{ textDecoration: 'none', color: 'black' }}>Register</Link></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><Link to="/users" style={{ textDecoration: 'none', color: 'black' }}>Registered users</Link></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><Link to="/login" style={{ textDecoration: 'none', color: 'black' }}>Login</Link></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><Link to="/contact" style={{ textDecoration: 'none', color: 'black' }}>Contact</Link></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><Link to="/events" style={{ textDecoration: 'none', color: 'black' }}>Events</Link></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><Link to="/create-events" style={{ textDecoration: 'none', color: 'black' }}>Create Event</Link></a>
                        </li>                
                        <li className="nav-item">
                            <a className="nav-link" href="#"><Link to="/membership" style={{ textDecoration: 'none', color: 'black' }}>Membership</Link></a>
                        </li>  
                        <li className="nav-item">
                            <a className="nav-link" href="#"><Link to="/courses" style={{ textDecoration: 'none', color: 'black' }}>Courses</Link></a>
                        </li>  
        
                    </ul>
                
                </div>
            </div>
        </nav>
       
        </>
    )
}

export default NavigationLinks;