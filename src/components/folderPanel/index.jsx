import React, { useMemo, useState,useCallback } from "react";
import './styles.scss';
import { CiFileOn } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { CiFolderOn } from "react-icons/ci";
import { motion } from "framer-motion";
import ProgressBar from "../ProgressBar";
import TypingAnimator from "../../utils/TyperAnimator";
import { FaBackward } from "react-icons/fa6";
import {Link} from 'react-router-dom';
// import React from "react";

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
};

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
  }
};







// ============================================================
// this will be a system for showing output of each File



// ============================================================




















function Icon({IconComponent,size}){
    return(
        <IconComponent size={size} />
    )
}
// ==================================CONTENTSECTION DESIGN===================================
function FileContent({header,content}){
    
    
    
    return(
        <div className="filecontent__container">
            <div className="filecontent__container__header">
                { header  ?<h1>{header}</h1> : <h1>UNTITLED</h1> }
            </div>


            <div className="filecontent__container__content">
            
            {
                content.job_title ?
                <div  className="filecontent__container__content__jobtitle">
                <h2>Job Title: </h2>
                <div>{content.job_title}</div>
            </div>:null
            }
            {
                content.period ?
                <div  className="filecontent__container__content__jobtitle">
                <h2>Time Period: </h2>
                <TypingAnimator text={content.period.from +' --- '+ content.period.to }/>
            </div>:null

}
            
            
            {
                 content.content ?
                 <div  className="filecontent__container__content__filecontent">
                    <h2>BRIEF SUMMARY: </h2>
                        {/* <TypingAnimator text={content.content}/>  */}
                        <p>{content.content}</p>
                </div>: null
            }
            {
            content.url ?<Link to={content.url} className="filecontent__container__content__projectlink">
                        VISIT PROJECT PAGE   
                </Link>: null
            }


            
            
            
            
            
            
            
            
            </div>
     
            {
                content.score ?
                <div className="filecontent__container__content__progressbar">
                 <ProgressBar 
                score={content.score} 
                text={header}
                />
                </div>
                 :null
                }
            
            
            
        </div>
    )
}
// =============================================================================================









const FolderPanel=({
    handleFolderpanelOff,
    filecontent,
    filestruct,
})=>{


    const [iscontent,setiscontent]=useState(false);
    const  [stack, setStack]= useState(['ROOT']);
    
    const peek = () => {
    console.log(stack[stack.length - 1]);
    return stack.length > 0 ? stack[stack.length - 1] : null;
    };
    const pop = () => {
        setStack((prevStack) => prevStack.slice(0, -1));
      };



    function FolderPanelNavbar({handleFolderpanelOff}){
        return (
            <div className="folderpanel__container__navbar">
                <IoMdClose className="folderpanel__container__navbar__logo"  onClick={handleFolderpanelOff} size={40}/>
                {peek() !=="ROOT" ? <FaBackward className="folderpanel__container__navbar__logo"  onClick={pop} size={40}/> :null}
    
    
            </div>
        )
    }

    // ============================================================================================
    
    // sample file structure taken for example
    
    // root
    // |
    // |------- Frontend
    // |            |
    // |            |-------HTML
    // |            |-------CSS
    // |            |-------JS
// |            |-------React
// |
// |--------Backend 
// |            |
// |            |-------DJANGO
// |            |-------NODEJS
// |
// |--------AI-ML
//             |
//             |-------- NUMPY
//             |--------PANDAS
//             |--------TENSORFLOW
// ============================================================================================
    function FileItem(props){
        const handleClick= useCallback(()=>{
            setStack((prevStack) => [...prevStack, props.name]);
            setiscontent(true);
            console.log(props.name);
        })
        

        return (
            <motion.div  variants={item} className="fileitem__container"  onClick={handleClick} >
               
               <Icon IconComponent={props.itemlogo} size={60}/>
                
                < h2 className="fileitem___container__name">
                   {props.name}
                </h2>
            </motion.div>
        )
    }










    const ContentLoader=()=>{
        let node= peek();
        console.log("MY PEEK NODE IS HERE");
        console.log(node);
        if (filestruct[node].length === 0 )
        {
            setiscontent(true);
            console.log("file loading here is "+ node);

            return (
                <FileContent 
                header={node}
                content={filecontent[node]}
                />
            )
        }
        setiscontent(false);
        return  filestruct[node].map((neigh)=>{
            console.log("Neighbour loading here is "+  neigh);
            return (
                <FileItem 
                name={neigh}
                itemlogo={filestruct[neigh].length === 0 ? CiFileOn :  CiFolderOn }
                />
            )
        })


    }




    


    return (
        <motion.div className="folderpanel__container"

        variants={container}
        initial="hidden"
        animate="visible"
        >
            <FolderPanelNavbar handleFolderpanelOff={handleFolderpanelOff}/>
            <div className="folderpanel__container__panel">
                <div className={iscontent?  "folderpanel__container__panel__contentsection": "folderpanel__container__panel__filesection"}>
                    <ContentLoader/>
                </div>

            </div>
        </motion.div>

    )
}



export default FolderPanel;