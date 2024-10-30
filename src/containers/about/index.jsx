import React, { useRef } from "react";

import { GiProcessor } from "react-icons/gi";
import './styles.scss'
import Timeline from "../../components/Timelinesection";
import { motion } from "framer-motion";
import TyperAnimator from '../../utils/TyperAnimator'

const jobSummary="hello";


const personalDetailsList=[
    {
        label:"Name",
        value:"Wansh Singh"
    },
    {
        label:"Age",
        value:"23"
    },
    {
        label:"Address",
        value:"DT-580 ,near sharma road, Dhurwa ,Ranchi ,Jharkhand"
    }

]




const About =()=>{
    const ref=useRef()
    return (
        <motion.div 
        className="about__container" 

        animate={{ x: 100 }} 
        transition={{ duration: 0.5 }}
        >
            <motion.div className="about__container__logo">
                <GiProcessor className="about__container__logo__icon" size={1000}/>
            </motion.div>
            <motion.div className="about__container__content"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
            >

                <motion.h2 className="about__container__content__header"
                initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                  >
                    DESCRIPTION
                </motion.h2>
                <div className="about__container__content__summary">
                <TyperAnimator text={"An aspiring software developer with a strong foundation in data science, software engineering, and computer science principles. I am passionate about designing efficient, scalable solutions and continually exploring new technologies to expand my skill set. My experience spans from backend development to machine learning, using tools like TensorFlow, PyTorch, and Django. Eager to solve complex problems, I bring a detail-oriented and analytical approach to all projects, whether building robust web applications, optimizing data pipelines, or conducting data-driven research. Constantly learning and motivated to contribute meaningfully to innovative teams and impactful projects."}/>
                </div>
                    <motion.h2 className="about__container__content__header"
                initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                  >
                    EDUCATION
                </motion.h2>  
                      <Timeline/>
                <motion.h2 className="about__container__content__header"
                initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                  >
                    PERSONAL DETAILS
                </motion.h2>                
                <div className="about__containter__content__personaldetails">
                    <ul>
                        <li>
                            <b>Email</b>
                            <TyperAnimator text={ "washsinght03@gmail.com"} />
                        </li>
                        
                        <li>
                        <b>Contact Number:</b>
                        <TyperAnimator text={ " +91 8252 8108 67"} />
                        
                        </li>

                        <li>
                        <b>Address: </b>
                        <TyperAnimator text={ " DT- 580 ,Dhurwa ,Ranchi, Jharkhand ,India - 834004"} />
                            
                        </li>
            
                    </ul>
                </div>
            </motion.div>

        

        </motion.div>
    )
};


export default  About ;