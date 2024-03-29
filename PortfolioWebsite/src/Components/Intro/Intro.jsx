import React from 'react'
import "./intro.css"
import bg from "../../assets/image.png"
import {Link} from 'react-scroll'
import btnImg from '../../assets/hireme.png'

function Intro() {
  return (
    <>
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello</span>
                <span className="introText">I'm <span className="introName">Peeyush</span><br />Website Developer </span>
                <p className="introPara">I am a skilled web developer with experience in creating visually appealing and user friendly websites</p>
                <Link><button className="btn"><img src={btnImg} alt="Hire me" className='btnImg' />Hire me</button></Link>
                
            </div>
            <img src={bg} alt="Profile" className='bg' />
        </section>
    </>
  )
}

export default Intro