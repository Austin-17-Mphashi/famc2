import React from 'react'
import { Link } from 'react-router-dom'

function AboutUs() {
  return (
    <div>
      <Link to='/objective'>Objective</Link>
      <Link to='/our-goal'>Goal</Link>
      <Link to='/contact'>GetInTouch</Link>
      <Link to='/signup'>start today</Link>
      <Link to='/services'>services</Link>
    </div>
  )
}

export default AboutUs
