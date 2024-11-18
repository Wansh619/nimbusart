import React, { useState } from "react";
import {FaBars,FaReact} from 'react-icons/fa';
import { GiHarryPotterSkull } from "react-icons/gi";
import { BsSuitDiamond } from "react-icons/bs"
import {HiX} from 'react-icons/hi';
import {Link} from 'react-router-dom';
import './styles.scss';
const data=[
    {
        label:'HOME',
        to: '/'
    },
    {
        label:'ABOUT US',
        to: '/about'
    },
    {
        label:'CONTACT ME',
        to: '/contact_me'
    },
    {
        label:'RESUME',
        to: '/resume'
    }
];

const Navbar=()=>{
    
    const [toggleIcon, setToggleIcon]= useState(false);
      const [navIcon, setNavIcon]=useState(false);
      
      function handleToggleIcon(){
          
          setToggleIcon(!toggleIcon);
        }
        
        function handleNavicon(){
            
            setNavIcon(!navIcon);
            // --yellow-theme-background-color: #000;
            // --yellow-theme-main-color: #ffdd40;
            // --yellow-theme-text-color:#ffffff;
            // --yellow-theme-nav-background-color:yellow ;
            // --yellow-theme-nav-text-color: #000;
            if(!navIcon){
                
                document.documentElement.style.setProperty('--yellow-theme-main-color', "#FFFFFF");
                document.documentElement.style.setProperty('--yellow-theme-text-color', "#FFFFFF");
                document.documentElement.style.setProperty('--yellow-theme-nav-background-color', "#FFFFFF");
            }
            else{
                document.documentElement.style.setProperty('--yellow-theme-main-color', "#ffdd40");
                document.documentElement.style.setProperty('--yellow-theme-text-color', "#ffffff");
                document.documentElement.style.setProperty('--yellow-theme-nav-background-color', "yellow");
            }   
            
            
        }
        
        
        const Menu= data.map((item,key)=> {
            return(
            <li key={key} className=" navbar__container__menu__item">
                <Link className="navbar__container__menu__item__link" to={item.to} onClick={handleToggleIcon}>
                        {item.label}
                </Link>
            </li>
            );
        })
        
        const changePrimaryColor = (color) => {
        // Change the CSS variable value
        document.documentElement.style.setProperty('--primary-color', color);
      };





    return (
        <div>
            <nav className="navbar">
                <div  className="navbar__container">
                    <div   onClick={handleNavicon} className="navbar__container__logo">
                    {
                        navIcon ? <GiHarryPotterSkull size= {50}/>:<BsSuitDiamond size={50} />
                        
                    }
                    </div>
                </div>
                <ul className={`navbar__container__menu ${toggleIcon ? "active":""}`}>
                    { Menu }
                    
                </ul>
                <div className="nav-icon"  onClick={handleToggleIcon}>
                    {
                        toggleIcon ? <HiX size= {50}/>:<FaBars size= {50} />
                    }
                </div>
            </nav>
        </div>
    )
}


export default Navbar;