import React, { useState} from 'react';
import "./services.css";

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
        <section className='services section' id="services">
            <h2 className='section__title'>Services</h2>
            <span className='section__subtitle'>What I offer</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-visual-studio services__icon"></i>
                        <h3 className="services__title">Website Design and Development</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(1)} >View More 
                    <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 1 ? "services__modal active-modal ": "services__modal"} >
                        <div className='services__modal-content'>
                            <i onClick={() => toggleTab(0)} class = "uil uil-times services__modal-close"></i>
                            <h3 className='services__modal-title'>Website Design and Development</h3>
                            <p className='services__modal-description'>This involves designing and creating a website from scratch, including developing the website's functionality, user interface, and visual design. It also includes ensuring that the website is responsive and optimized for various devices and browsers.</p>
                        <ul className='services__modal-services grid'>
                            <li className='services__modal-service'>
                                <i class="uil uil-check-circle"></i>
                                <p className='services__modal-info'>Create wireframes and mockups of website pages</p>
                            </li>
                            <li className='services__modal-service'>
                                <i class="uil uil-check-circle"></i>
                                <p className='services__modal-info'>Develop website functionality using programming languages such as HTML, CSS, and JavaScript</p>
                            </li>
                            <li className='services__modal-service'>
                                <i class="uil uil-check-circle"></i>
                                <p className='services__modal-info'>Implement user interface design, including typography, color scheme, and layout</p>
                            </li>
                            <li className='services__modal-service'>
                                <i class="uil uil-check-circle"></i>
                                <p className='services__modal-info'>Ensure website responsiveness on various devices and screen sizes</p>
                            </li>
                            <li className='services__modal-service'>
                                <i class="uil uil-check-circle"></i>
                                <p className='services__modal-info'>Optimize website load times and page speed.</p>
                            </li>
                        </ul>
                        </div>
                    </div>



                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil uil-shield-check services__icon"></i>
                        <h3 className="services__title">Website Maintenance and Updates</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(2)}>View More 
                    <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 2 ? "services__modal active-modal ": "services__modal"} >
                        <div className='services__modal-content'>
                        <i onClick={() => toggleTab(0)} class = "uil uil-times services__modal-close"></i>
                            <h3 className='services__modal-title'>Website Maintenance and Updates</h3>
                            <p className='services__modal-description'> This service involves regular maintenance and updates to keep it secure, functional, and up-to-date. This service involves tasks such as software updates, content updates, bug fixes, and performance monitoring.</p>
                        <ul className='services__modal-services grid'>
                            <li className='services__modal-service'>
                                <i class="uil uil-check-circle"></i>
                                <p className='services__modal-info'>Install security updates to prevent hacking and malware attacks</p>
                            </li>
                            <li className='services__modal-service'>
                                <i class="uil uil-check-circle"></i>
                                <p className='services__modal-info'>Update website content, such as text and images, to keep it fresh and relevant</p>
                            </li>
                            <li className='services__modal-service'>
                                <i class="uil uil-check-circle"></i>
                                <p className='services__modal-info'>Fix bugs and errors that may arise from changes to the website or updates to its software</p>
                            </li>
                            <li className='services__modal-service'>
                                <i class="uil uil-check-circle"></i>
                                <p className='services__modal-info'>Monitor website performance and make adjustments as needed to improve user experience</p>
                            </li>
                            <li className='services__modal-service'>
                                <i class="uil uil-check-circle"></i>
                                <p className='services__modal-info'>Backup website files and database to prevent data loss.</p>
                            </li>
                        </ul>
                        </div>
                    </div>



                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-server services__icon"></i>
                        <h3 className="services__title">Web Hosting and Server Management</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(3)}>View More 
                    <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 3 ? "services__modal active-modal ": "services__modal"} >
                        <div className='services__modal-content'>
                        <i onClick={() => toggleTab(0)} class = "uil uil-times services__modal-close"></i>
                            <h3 className='services__modal-title'>Web Hosting and Server Management</h3>
                            <p className='services__modal-description'>This service involves providing and managing the servers that host websites. It includes tasks such as configuring and maintaining servers, managing website files and databases, and ensuring website uptime and security.</p>
                        <ul className='services__modal-services grid'>
                            <li className='services__modal-service'>
                                <i class="uil uil-check-circle"></i>
                                <p className='services__modal-info'>Choose the appropriate web hosting plan based on website needs and budget</p>
                            </li>
                            <li className='services__modal-service'>
                                <i class="uil uil-check-circle"></i>
                                <p className='services__modal-info'>Configure and maintain server software, such as Apache or NGINX</p>
                            </li>
                            <li className='services__modal-service'>
                                <i class="uil uil-check-circle"></i>
                                <p className='services__modal-info'>Monitor server uptime and performance</p>
                            </li>
                            <li className='services__modal-service'>
                                <i class="uil uil-check-circle"></i>
                                <p className='services__modal-info'>Implement security measures, such as firewalls and encryption, to protect website data</p>
                            </li>
                            <li className='services__modal-service'>
                                <i class="uil uil-check-circle"></i>
                                <p className='services__modal-info'>Provide customer support for website owners and troubleshoot server-related issues.</p>
                            </li>
                        </ul>
                        </div>
                    </div>



                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-sort-amount-up services__icon"></i>
                        <h3 className="services__title">Website Performance Optimization</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(4)} >View More 
                    <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 4 ? "services__modal active-modal ": "services__modal"} >
                        <div className='services__modal-content'>
                            <i onClick={() => toggleTab(0)} class = "uil uil-times services__modal-close"></i>
                            <h3 className='services__modal-title'>Website Performance Optimization</h3>
                            <p className='services__modal-description'>This service involves improving a website's speed, usability, and overall performance. It includes tasks such as optimizing website code, images, and content, reducing server response time, and implementing caching and compression techniques.</p>
                        <ul className='services__modal-services grid'>
                            <li className='services__modal-service'>
                                <i class="uil uil-check-circle"></i>
                                <p className='services__modal-info'>Minimize website file sizes, such as images and scripts, to reduce load times</p>
                            </li>
                            <li className='services__modal-service'>
                                <i class="uil uil-check-circle"></i>
                                <p className='services__modal-info'>Implement caching to store frequently accessed data for quicker retrieval</p>
                            </li>
                            <li className='services__modal-service'>
                                <i class="uil uil-check-circle"></i>
                                <p className='services__modal-info'>Optimize website code for better performance</p>
                            </li>
                            <li className='services__modal-service'>
                                <i class="uil uil-check-circle"></i>
                                <p className='services__modal-info'>Reduce server response time by implementing a Content Delivery Network (CDN)</p>
                            </li>
                            <li className='services__modal-service'>
                                <i class="uil uil-check-circle"></i>
                                <p className='services__modal-info'>Conduct website speed tests to identify areas for improvement.</p>
                            </li>
                        </ul>
                        </div>
                    </div>



                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-sign-in-alt services__icon"></i>
                        <h3 className="services__title">Search Engine Optimization (SEO)</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(5)} >View More 
                    <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 5 ? "services__modal active-modal ": "services__modal"} >
                        <div className='services__modal-content'>
                            <i onClick={() => toggleTab(0)} class = "uil uil-times services__modal-close"></i>
                            <h3 className='services__modal-title'>Search Engine Optimization (SEO)</h3>
                            <p className='services__modal-description'>This service involves optimizing a website to rank higher in search engine results pages. It includes tasks such as researching and targeting keywords, optimizing website content and structure, and building high-quality backlinks to the website.</p>
                        <ul className='services__modal-services grid'>
                            <li className='services__modal-service'>
                                <i class="uil uil-check-circle"></i>
                                <p className='services__modal-info'>Research and identify relevant keywords for the website's industry and target audience</p>
                            </li>
                            <li className='services__modal-service'>
                                <i class="uil uil-check-circle"></i>
                                <p className='services__modal-info'>Optimize website content, including headings and meta tags, for targeted keywords</p>
                            </li>
                            <li className='services__modal-service'>
                                <i class="uil uil-check-circle"></i>
                                <p className='services__modal-info'>Improve website structure and navigation to make it easier for search engines to crawl and index pages</p>
                            </li>
                            <li className='services__modal-service'>
                                <i class="uil uil-check-circle"></i>
                                <p className='services__modal-info'>Build high-quality backlinks from reputable sources to improve website authority and ranking</p>
                            </li>
                            <li className='services__modal-service'>
                                <i class="uil uil-check-circle"></i>
                                <p className='services__modal-info'>Monitor website ranking and traffic using tools such as Google Analytics.</p>
                            </li>
                        </ul>
                        </div>
                    </div>



                </div>

    
                <div className="services__content">
                    <div>
                        <i className="uil uil-trademark-circle services__icon"></i>
                        <h3 className="services__title">Product Branding and Marketing</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(6)} >View More 
                    <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 6 ? "services__modal active-modal ": "services__modal"} >
                        <div className='services__modal-content'>
                            <i onClick={() => toggleTab(0)} class = "uil uil-times services__modal-close"></i>
                            <h3 className='services__modal-title'>Product Branding and Marketing</h3>
                            <p className='services__modal-description'>This service involves creating and managing a brand's online presence and marketing campaigns. It includes tasks such as developing a brand identity, creating marketing materials such as ads and social media content, and analyzing marketing campaign performance to make data-driven decisions.</p>
                        <ul className='services__modal-services grid'>
                            <li className='services__modal-service'>
                                <i class="uil uil-check-circle"></i>
                                <p className='services__modal-info'>Develop a brand identity, including logo and color scheme, that represents the company's values and mission</p>
                            </li>
                            <li className='services__modal-service'>
                                <i class="uil uil-check-circle"></i>
                                <p className='services__modal-info'>Develop a content marketing strategy to drive traffic and increase brand awareness</p>
                            </li>
                            <li className='services__modal-service'>
                                <i class="uil uil-check-circle"></i>
                                <p className='services__modal-info'>Launch targeted advertising campaigns, such as Google Ads or Facebook Ads, to increase website traffic and sales</p>
                            </li>
                            <li className='services__modal-service'>
                                <i class="uil uil-check-circle"></i>
                                <p className='services__modal-info'>Create social media accounts and develop a social media marketing plan to incorporate within the website to reach the target audience</p>
                            </li>
                            <li className='services__modal-service'>
                                <i class="uil uil-check-circle"></i>
                                <p className='services__modal-info'>Analyze marketing campaign performance and adjust strategies to improve results.</p>
                            </li>
                        </ul>
                        </div>
                    </div>



                </div>
                

                
            </div>
        </section>
  )
}

export default Services