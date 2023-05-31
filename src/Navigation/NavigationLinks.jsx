import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { projectFirestore, auth, projectStorage as storage } from "../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";


function NavigationLinks() {

    const [user] = useAuthState(auth);

    return (
        <header className='nav-links' id="header">
				
				<nav>
					<ul>
                    <li ><a href="#"><Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Home</Link></a></li>
                    
                    <li>
                        <a href="#"><Link to="/signup" style={{ textDecoration: 'none', color: 'black' }}>Register</Link></a>
                    </li>
                    <li >
                        <a href="#"><Link to="/login" style={{ textDecoration: 'none', color: 'black' }}>Login</Link></a>
                    </li> 
                    <li >
                        <a href="#"><Link to="/contact" style={{ textDecoration: 'none', color: 'black' }}>Contact</Link></a>
                    </li> 
                    <li >
                        <a  href="#"><Link to="/events" style={{ textDecoration: 'none', color: 'black' }}>Events</Link></a>
                    </li>        
                    <li >
                        <a  href="#"><Link to="/create-events" style={{ textDecoration: 'none', color: 'black' }}>Create Event</Link></a>
                    </li>
                    <li >
                        <a  href="#"><Link to="/membership" style={{ textDecoration: 'none', color: 'black' }}>Membership</Link></a>
                    </li>
                    <li >
                        <a  href="#"><Link to="/courses" style={{ textDecoration: 'none', color: 'black' }}>Courses</Link></a>
                    </li>         
                      
                  </ul>
               
				</nav>
		</header>
    )
}

export default NavigationLinks;