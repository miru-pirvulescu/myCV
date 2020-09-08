import React from "react";
import Project from "./Project";
import {CardDeck} from 'react-bootstrap';

const projects = [
  { id: 1, name: "Escape", description: "How easily will you escape this perfect summer retreat?", thumbnail: "", tags: ["UE4", "C++"]},
  { id: 2, name: "Bulls & Cows", description: "Guess the isogram, based on the given bulls and cows.", thumbnail: "", tags: ["UE4", "C++"]},
  { id: 3, name: "GoGrocer", description: "Automating your path through a grocery store; now you can find it all!", thumbnail: "", tags: ["React Native"]},
  { id: 4, name: "The Enchanted Chest", description: "Are you bored enough to want to defeat the chest and get your promised prize?", thumbnail: "", tags: ["C++"]},
  { id: 5, name: "A-Maze", description: "A Java-based game developed during Code for Good by JP Morgan.", thumbnail: "", tags: ["Java", "Java Swing"]},
  { id: 6, name: "This website!", description: "Made from scratch with some basics and some online documentation.", thumbnail: "", tags: ["React.js"]}
];

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
            <div style={portfoliostyle}>
                <h3 style={{color: "white"}}>Portfolio</h3>
                
                <CardDeck>
                    {projects.map(project => (
                    <Project 
                        title={project.name}
                        description={project.description}
                        thumbnail={process.env.PUBLIC_URL + '/cat2.jpg'}
                        tags={project.tags}
                    />
                    ))}
                </CardDeck>
            </div>
        </>
    );
}

export default Portfolio;