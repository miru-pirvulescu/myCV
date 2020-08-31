import React from 'react';
import {CardDeck} from 'react-bootstrap';
import Project from "./Project";
import cat1 from "../../assets/img/cat1.jpg"

const Portfolio = () => {
    return(
    <div style={{padding: '20px',
                 background: 'black'
    }}>
        <CardDeck>
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
        </CardDeck>
    </div>
    );
}

export default Portfolio;