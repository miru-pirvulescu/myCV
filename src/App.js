import React from 'react';
import './App.css';
import Home from './components/home/Home';


const weekendList = [{id: 1, category: "Holidays", headline: "Ideal holiday quiz!"},
                            {id: 2, category: "Travel", headline: "Bali - the cheap hidden gem of the East"},
                            {id: 3, category: "Hobbies", headline: "10 things to make that are not banana bread"}
            ]

const weekList = [{id: 1, category: "Economics", headline: "Bitcoin fluctuation like never before!"},
                  {id: 2, category: "Health", headline: "The effects of eating 5-a-day."},
                  {id: 3, category: "Transport", headline: "Expect tube closures this week on Circle."}
]

const App = () => (
  <>
    <Home />
  </>
);

export default App;
