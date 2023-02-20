import React from 'react'
import "./footer.css"

function Footer() {
const yearNow = new Date().getFullYear();

  return (
    <section className='footer'>
        <div className='footer__container container'>
            <h1 className='footer__title'>G.Rdrgz</h1>
            <ul className='footer__list'>
                <li>
                    <a href = "#about" className='footer__link' >About</a>
                </li>
                <li>
                    <a href = "#services" className='footer__link' >Services</a>
                </li>
                <li>
                    <a href = "#portfolio" className='footer__link' >Portfolio</a>
                </li>
              
            </ul> 

            <div className="footer__social">
            <a href="https://facebook.com/iiiyyyeeelll" 
            className="footer__social" rel="noreferrer"
            target="_blank">
            <i class="uil uil-facebook"></i>
            </a>

            <a href="https://instagram.com/iyelrodriguez.lgf" 
            className="footer__social" rel="noreferrer"
            target="_blank">
            <i class="uil uil-instagram"></i>
            </a>

            <a href="https://www.linkedin.com/in/gilrielrodriguez/" 
            className="footer__social" rel="noreferrer"
            target="_blank">
           <i class="uil uil-linkedin"></i>
            </a>

            <a href="https://github.com/iyelrod" 
            className="footer__social" rel="noreferrer"
            target="_blank">
            <i class="uil uil-github"></i>
            </a>

        </div>      
            <span className='footer__copy'>&#169; G.Rdrgz. All rights reserved. {yearNow}</span>
        </div>
    </section>
  )
}

export default Footer