import React from "react";
import Project from "./Project";
import {CardDeck} from 'react-bootstrap';
import projects from '../../../data/portfolio/ProjectCatalogue.js';

const portfoliostyle = {
    background: "rgba(0,0,0,0.9)",
    paddingLeft: "40px",
    paddingRight: "40px",
    paddingBottom: "40px",
    paddingTop: "1px",
    fontFamily: "calibri",
}

const Portfolio = () => {
    return (
        <>
            <div style={portfoliostyle} id="portfolio">
                <h3 style={{color: "white"}}>Portfolio</h3>
                
                <CardDeck>
                    {projects.map(project => (
                        <Project 
                            title={project.name}
                            description={project.description}
                            thumbnail={project.thumbnail}
                            tags={project.tags}
                            details={project.details}
                            demo={project.demo}
                        />
                    ))}
                </CardDeck>
            </div>
        </>
    );
}

export default Portfolio;