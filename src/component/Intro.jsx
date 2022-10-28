import React from 'react'
import "../Css/Intro.css";
import {Link} from "react-router-dom"

const Intro = () => {
  return (
    <div className='intro-main'>

    <div>
      <h1>Intro</h1>
    </div>

    <div>
    <Link to="/Register">Register</Link>
    </div>
    <div>
    <Link to="/Login">Login</Link>
    </div>


    </div>
  )
}

export default Intro