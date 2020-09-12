import React from 'react';
import Activity from './Activity';
import extracurriculars from '../../../data/background/Extracurriculars.js';

const BGExtracurriculars = () =>{

    return(
        <>
            {extracurriculars.map(activity => (
                <Activity
                    name={activity.name}
                    organisation={activity.organisation}
                    period={activity.period}
                    description={activity.description}
                />
            ))}
        </>
    );
}

export default BGExtracurriculars;