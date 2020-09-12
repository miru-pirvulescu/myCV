import React from 'react';
import School from './School';
import education from '../../data/background/Education.js';


const BGEducation = () =>{

    return(
        <>
            {education.map(school => (
                <School
                    award={school.award}
                    topic={school.topic}
                    school={school.school}
                    period={school.period}
                    description={school.description}
                />
            ))}
        </>
    );
}

export default BGEducation;