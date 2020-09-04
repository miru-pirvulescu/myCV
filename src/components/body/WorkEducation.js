import React from 'react';
import School from './School';

const WorkEducation = () =>{

    return(
        <>
            <School 
                award="Bachelor of Science"
                topic="Computer Science (Artificial Intelligence)"
                school="King's College London"
                period="September 2017 - May 2021"
                description="King's College London - September 2017 to July 2021
                I am currently pursuing a degree in Computer Science at King’s College London, aspiring to finish with first-class honours and a distinction in artificial intelligence. The most relevant courses I followed include Advanced Java, Software Engineering, Practical Experience in C++, Introduction to Artificial Intelligence, Operating Systems, Data Structures, and Database Systems. On top of the modules I completed in the past, this year I am following Artificial Intelligence Reasoning, Decision Making, and Planning, as well as Machine Learning, Cryptography, Network Security, and Optimisation Methods."
            />
            <School 
                award="Romanian Diploma of Baccalaureate"
                topic="Mathematics & Computer Science"
                school='"Grigore Moisil" Theoretical High School of Timisoara'
                period="September 2013 - July 2017"
                description="High school was my first step into programming, having studied C/C++ for three years, followed by a year of learning HTML/CSS/PHP/MySQL. After graduation, I took three written examinations for my Romanian Baccalaureate in Mathematics & Computer Science: Romanian Language and Literature (8/10), Mathematics (9.75/10), and Computer Science (9.9/10)"
            />
        </>
    );
}

export default WorkEducation;