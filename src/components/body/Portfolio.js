import React from 'react';
import Project from "./Project";
import cat1 from "../../assets/img/cat1.jpg"
import List from '@material-ui/core/List';

const Portfolio = () => {
    return(
        <List style={{
            justifyContent: "space-between",
            display: 'flex',
            flexDirection: 'row',
            padding: '20px',
            background:'black'
        }} dense>
            <Project 
                title='Text-based RPG'
                description="this is a cat"
                thumbnail={cat1}
            />
            <Project 
                title='A-Maze!'
                description="this is a cat"
                thumbnail={cat1}
            />
            <Project 
                title='GoGrocer'
                description="this is a cat"
                thumbnail={cat1}
            />
            <Project 
                title='Enchanted Chest'
                description="this is a cat"
                thumbnail={cat1}
            />
            <Project 
                title='Bulls and Cows'
                description="this is a cat"
                thumbnail={cat1}
            />
            <Project 
                title='Escape'
                description="this is a cat"
                thumbnail={cat1}
            />
            <Project 
                title='This website!'
                description="this is a cat"
                thumbnail={cat1}
            />
        </List>
    );
}

export default Portfolio;