import React from "react";
import "./home.css";
import Social from "./Social";
import Data from "./Data";
import Scrolldown from "./Scrolldown";
import bgImg from "../../assets/id.png";

const Home = () => {
    return (
       <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__content grid">
                    <Social />
                    <div className="home__img"></div>
                    <Data />
                </div>
                <img src={ bgImg } alt="" className="bg__img" />
                <Scrolldown />
            </div> 
       </section>
    
    )
}

export default Home