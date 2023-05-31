import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { projectFirestore, auth, projectStorage as storage } from "../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";


function NavigationLinks() {
    const [user] = useAuthState(auth);

    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className=" px-4 px-lg-5 w-100">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse navbar-search-links" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item fw-bolder my-2 my-sm-0"><a className="nav-link active" aria-current="page" href="#!"><Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Home</Link></a></li>
                    
                        <li className="nav-item">
                            <a className="nav-link" href="#"><Link to="/signup" style={{ textDecoration: 'none', color: 'black' }}>Sign up</Link></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><Link to="/login" style={{ textDecoration: 'none', color: 'black' }}>Login</Link></a>
                        </li>                
                          
                    </ul>
                    <div>
                    <p className="fw-bolder my-2 my-sm-0">
                        <a className="nav-link" href="#"><Link to="/profile" style={{ textDecoration: 'none', color: 'black' }}>profile</Link></a>
                    </p>
                    </div>
                </div>
            </div>
        </nav>
       
        </>
    )
}

export default NavigationLinks;