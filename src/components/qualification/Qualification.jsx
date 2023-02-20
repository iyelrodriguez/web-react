import React, { useState} from 'react'
import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
    <section className='qualification section'>
        <h2 className='section__title'>Qualifications</h2>
        <span className='section__subtitle'>My Personal Background</span>

        <div className='qualification__container container'>
            <div className='qualification__tabs'>
                <div className={toggleState === 1 ? 'qualification__button qualification__active button--flex' : 'qualification__button button--flex'} onClick={ () => toggleTab(1)}>
                    <i className='uil uil-graduation-cap qualification__icon'></i>
                    Education
                </div>
                <div className={toggleState === 2 ? 'qualification__button qualification__active button--flex' : 'qualification__button button--flex'} onClick={ () => toggleTab(2)}>
                    <i className='uil uil-briefcase-alt qualification__icon'></i>
                    Experience
                </div>
            </div>

            <div className='qualification__sections'>
                <div className={ toggleState === 1 ? 'qualification__content qualification__content-active' : 'qualification__content '} >
                    <div className='qualification__data'>
                        <div>
                            <h3 className='qualification__title'> Graduated BS in Computer Science</h3>
                            <span className='qualification__subtitle'>La Consolacion College - Binan</span>
                            <div className='qualification__calendar'>
                                <i className='uil uil-calendar-alt'></i>
                                 May 2013
                            </div>
                        </div>
                        <div>
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>
                        </div>
                    </div>

                    <div className='qualification__data'>
                        <div></div>
                        <div>
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>
                        </div>
                        <div>
                            <h3 className='qualification__title'>Intern </h3>
                            <span className='qualification__subtitle'>Holy Rosary College</span>
                            <div className='qualification__calendar'>
                                <i className='uil uil-calendar-alt'></i>
                                March 2012-April 2012
                            </div>
                        </div>
                    </div>
                    
                    <div className='qualification__data'>
                        <div>
                            <h3 className='qualification__title'>Started BS in Computer Science</h3>
                            <span className='qualification__subtitle'>La Consolacion College - Binan</span>
                            <div className='qualification__calendar'>
                                <i className='uil uil-calendar-alt'></i>
                                June 2009
                            </div>
                        </div>
                        <div>
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>
                        </div>
                    </div>

                    <div className='qualification__data'>
                        <div></div>
                        <div>
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>
                        </div>
                        <div>
                            <h3 className='qualification__title'>High School Diploma</h3>
                            <span className='qualification__subtitle'>Jacobo Z. Gonzales Mem. Natl. HS</span>
                            <div className='qualification__calendar'>
                                <i className='uil uil-calendar-alt'></i>
                                2005-2009
                            </div>
                        </div>
                    </div>

                    <div className='qualification__data'>
                       
                        <div>
                            <h3 className='qualification__title'>Basic Education Diploma</h3>
                            <span className='qualification__subtitle'>Binan Elementary School</span>
                            <div className='qualification__calendar'>
                                <i className='uil uil-calendar-alt'></i>
                                2005
                            </div>

                            
                        </div>
                       
                        <div>
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>
                        </div>
                    </div>
                   
                   
                </div>

                <div className={ toggleState === 2 ? 'qualification__content qualification__content-active' : 'qualification__content '} >
                    <div className='qualification__data'>
                        <div>
                            <h3 className='qualification__title'>PHP/Wordpress Developer</h3>
                            <span className='qualification__subtitle'>Relogic Real Estate and Research-Au</span>
                            <div className='qualification__calendar'>
                                <i className='uil uil-calendar-alt'></i>
                                Sept 2022 - Feb 2023
                            </div>
                        </div>
                        <div>
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>
                        </div>
                    </div>

                    <div className='qualification__data'>
                        <div></div>
                        <div>
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>
                        </div>
                        <div>
                            <h3 className='qualification__title'>PHP Programmer</h3>
                            <span className='qualification__subtitle'>Uplink Integrated Solutions Inc-PH</span>
                            <div className='qualification__calendar'>
                                <i className='uil uil-calendar-alt'></i>
                                Jan 2019 - May 2021
                            </div>
                        </div>
                    </div>
                    
                    <div className='qualification__data'>
                        <div>
                            <h3 className='qualification__title'>PHP Programmer</h3>
                            <span className='qualification__subtitle'>Netlink Advance Solutions Inc-PH</span>
                            <div className='qualification__calendar'>
                                <i className='uil uil-calendar-alt'></i>
                                Jun 2014 - Feb 2016
                            </div>
                        </div>
                        <div>
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>
                        </div>
                    </div>

                    <div className='qualification__data'>
                        <div></div>
                        <div>
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>
                        </div>
                        <div>
                            <h3 className='qualification__title'>Semicon QA Inspector</h3>
                            <span className='qualification__subtitle'>Teamquest Technology - PH</span>
                            <div className='qualification__calendar'>
                                <i className='uil uil-calendar-alt'></i>
                                Jul 2013 - Feb 2014
                            </div>
                        </div>
                    </div>
                   
                   
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification