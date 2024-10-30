import React ,{ useRef, useState }from "react";
import "./styles.scss";
import { motion ,useInView } from "framer-motion";

import emailjs from '@emailjs/browser';

const variants = {
    initial: {
        y: 500,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1
        }
    }
}

const ContactDetails = [
    {
        label: "Mail",
        value: "wanshsingh03@gmail.com"
    },
    {
        label: "Address",
        value: "DT-580,sharma road,Dhurwa,Ranchi,Jharkhand,India"
    },
    {
        label: "Phone",
        value: "+91 8252810867"
    }

]







const Contact = () => {


    const ref=useRef();
    const [error,setError]=useState(false);
    const [success,setSuccess]=useState(false);
    const formRef=useRef()
    const isInView=useInView(ref,{margin:"-100px"});

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_5rtgrbt', 'template_g44ub88', formRef.current, {
            publicKey: 'ube48DeXQn5LBLFxp',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              setSuccess(true);
            },
            (error) => {
              console.log('FAILED...', error.text);
              setError(true);
            },
          );
      };

    return (
        <motion.div className="contacts" variants={variants} initial="initial" whileInView="animate">
            <motion.div className="contacts__textContainer" variants={variants}>
                <h1>
                    Let's work together
                </h1>
                <motion.div className="contacts__textContainer__items" variants={variants}>
                    <ul>

                        {
                            ContactDetails.map((item, idx) => {
                                return (
                                    <li key={idx}>
                                        <h2 className="title">
                                            {item.label}
                                        </h2>
                                        <span className="value">
                                            {item.value}
                                        </span>
                                    </li>
                                )
                            })
                        }
                    </ul>

                </motion.div>
            </motion.div>
            <div className="contacts__formContainer" variants={variants}>
                <motion.div  className="phoneSvg" 
                initial={{opacity:1}} 
                whileInView={{opacity:0}} 
                transition={{delay:3,duration:3}}>
<svg height="450px" width="450px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" 
	 viewBox="0 0 512 512" >
<g>
	<motion.path
    ref={ref}
    strokeWidth={0.8}
    fill="none"
    initial={{pathLength:0}}
    animate={isInView && {pathLength:1}}
    transition={{duration:3}}
    className="st0" d="M255.998,0.002C114.606,0.012,0.01,114.604,0,256c0.01,141.406,114.65,255.328,255.926,255.998h0.334
		l0.297-0.009c27.124,0.038,49.507-8.527,64.961-22.594c15.468-14.01,23.727-33.254,23.708-52.736
		c0.02-9.148-1.914-18.306-5.521-27.024c6.086-3.464,10.143-6.612,11.301-7.444c4.152-2.957,16-18.766,7.693-31.79
		c-8.344-13.014-38.042-42.678-46.152-47.702c-8.086-5.015-21.598-0.124-28.105,9.426c-6.526,9.55-11.674,6.689-11.674,6.689
		s-18.516-14.957-44.124-66.621c-25.607-51.694-26.263-75.454-26.263-75.454s0.833-5.847,12.388-5.263
		c11.53,0.621,23.598-7.168,24.516-16.66c0.928-9.464-4.698-51.091-10-65.598c-5.316-14.516-25.062-14.65-29.928-13.138
		c-4.89,1.502-55.033,13.712-59.014,66.21c-3.966,52.506,9.565,100.18,28.943,139.309c19.387,39.119,49.128,78.765,93.3,107.406
		c17.89,11.598,35.058,13.1,49.493,10.67c2.483,5.54,3.718,11.291,3.746,16.985c-0.028,11.292-4.621,22.354-14.066,30.966
		c-9.469,8.564-24.071,14.928-45.2,14.967l-0.516,0.009C130.797,481.96,29.387,381.09,29.397,256
		c0.01-62.621,25.339-119.186,66.367-160.237c41.053-41.023,97.612-66.354,160.234-66.364c62.621,0.01,119.181,25.34,160.232,66.364
		c41.033,41.052,66.354,97.606,66.373,160.237c-0.01,38.67-9.666,74.966-26.698,106.784c-9.531,17.837-21.397,34.23-35.177,48.812
		c-5.569,5.905-5.301,15.206,0.594,20.776c5.894,5.578,15.205,5.32,20.784-0.584c15.54-16.46,28.937-34.976,39.712-55.139
		C501.071,340.717,512,299.589,512,256C511.98,114.604,397.389,0.012,255.998,0.002z"/>
</g>
</svg>
                </motion.div>
     
                <motion.form 
                ref={formRef}
                onSubmit={sendEmail}
                initial={{opacity:0}} 
                whileInView={{opacity:1}} 
                transition={{delay:4,duration:1}}>
                    <input type="text" required placeholder="Name" name="name"/>
                    <input type="email" required placeholder="Email" name="email" />
                    <textarea rows={8} placeholder="Message" name="message"></textarea>
                    <button>Submit</button>
                    {error && "Error"}
                    {success && "Success" }
                </motion.form>
            </div>




        </motion.div>
    )
};


export default Contact;