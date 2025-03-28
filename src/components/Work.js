import "./WorkCardStyles.css";
import pro1 from "../assets/pro1.jpg";
import React from 'react';
import { NavLink } from 'react-router-dom';
import WorkCard from "./WorkCard.js";
import WorkCardData from "./WorkCardData";

const Work = () => {
  return (
    <div className = "work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            {WorkCardData.map((val, ind) => {
                return(
                    <WorkCard 
                    key = {ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    view={val.view}
                    />
                )
            })};
        </div>
    </div>
  );
};

export default Work;