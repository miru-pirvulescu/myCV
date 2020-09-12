import React from 'react';
import Job from './Job';
import experience from '../../../data/background/Experience.js';


const experiencestyle = {
    marginLeft: "40px",
    marginRight: "40px",
    fontFamily: "calibri",
    fontSize: "20px",
    color: "black"
}

const BGExperience = () =>{

    return(
        <>
            {experience.map(job => (
                <Job
                    title={job.title}
                    company={job.company}
                    period={job.period}
                    description={job.description}
                />
            ))}
        </>
    );
}

export default BGExperience;