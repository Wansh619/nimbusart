import React, { useState } from 'react';

import './styles.scss';


import RippleParticle from '../../components/RippleParticle';
import FolderPanel from '../../components/folderPanel';
import skillData from '../../data/skillData.json';
import experienceData from '../../data/experienceData.json';
import projectData from '../../data/projectData.json'

const Resume =()=>{

        




    // const { skillSectionFilestruct, skillSectionContent } = skillData;
    // const {experienceSectionFilestructure,experienceSectionContent}= experienceData;
    // const {projectSectionFilestructure,projectSectionContent}= projectData;
    const [Folderpanel,setFolderpanel]=useState(null);








    const handleFolderpanelOn=(item)=>{
        console.log("folder panel triggered")
        setFolderpanel(item);
    }
    const handleFolderpanelOff=()=>{
        console.log("folder panel triggered")
        setFolderpanel(null);
    }
    console.log(experienceData)
    return (
        <div className="resume">
            <RippleParticle 
            handleFolderpanel={handleFolderpanelOn} 

            className= "ripple-particle"/>

            {
            Folderpanel === 'Skills'?
            <FolderPanel handleFolderpanelOff={handleFolderpanelOff}
            filestruct={skillData.filestruct}
            filecontent={skillData.filecontent}
            />:null
            }
                      {
            Folderpanel === 'Experience'?
            <FolderPanel handleFolderpanelOff={handleFolderpanelOff}
            filestruct={experienceData.filestruct}
            filecontent={experienceData.filecontent}
            />:null
            }
                      {
            Folderpanel === 'Projects'?
            <FolderPanel handleFolderpanelOff={handleFolderpanelOff}
            filestruct={projectData.filestruct}
            filecontent={projectData.filecontent}
            />:null
            }
        </div>
    )
};


export default  Resume ;