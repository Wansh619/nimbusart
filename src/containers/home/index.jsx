import React, { useState } from "react";
import './styles.scss';
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { SiCodechef } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import {Link} from 'react-router-dom';


const Home =()=>{

    const navigate= useNavigate();


    const navigateToContactMePage=()=>{
        navigate("/contact_me");
    }
    return (
  
            <section  id="home" className="home" >
                <div className="home__wrapper" >

                    <h1 className="text" data-text="Hi There,I'm Wansh">
                    Hi There,I'm Wansh
                    </h1>
    
                </div>
                <Animate play duration={1.5} delay={1} 
                start={{
                        transform:'translateY(300px)'

                }}
                end={{
                    transform:'translateY(0px)'
                }}
                >

            <div onClick={navigateToContactMePage}className="home__contact-me">
                <button>Hire me</button>
                <div className="home__contact-me__otherlink">
                <Link className="home__contact-me__otherlink__link" to="https://www.linkedin.com/in/wansh-singh/">
                    <FaLinkedin size={15} className="home__contact-me__otherlink__link__icon"/>
                </Link>
                <Link className="home__contact-me__otherlink__link" to="https://github.com/Wansh619">
               
                    <FaGithub size={15} className="home__contact-me__otherlink__link__icon"/>
               </Link>
                <Link className="home__contact-me__otherlink__link" to="https://www.codechef.com/users/wansh_619">
               
                    <SiCodechef size={15} className="home__contact-me__otherlink__link__icon" />
               </Link>
               <Link className="home__contact-me__otherlink__link" to="https://leetcode.com/u/unitycreator619/">
               
               <SiLeetcode size={15} className="home__contact-me__otherlink__link__icon" />
                 </Link>
                </div>
            </div>
                </Animate>
                    
            </section>

    )
};


export default  Home ;