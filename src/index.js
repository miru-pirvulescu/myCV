import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const endList = [{id: 1, category: "Holidays", headline: "Ideal holiday quiz!"},
                            {id: 2, category: "Travel", headline: "Bali - the cheap hidden gem of the East"},
                            {id: 3, category: "Hobbies", headline: "10 things to make that are not banana bread"}
            ]

const weekList = [{id: 1, category: "Economics", headline: "Bitcoin fluctuation like never before!"},
                  {id: 2, category: "Health", headline: "The effects of eating 5-a-day."},
                  {id: 3, category: "Transport", headline: "Expect tube closures this week on Circle."}
]

ReactDOM.render(
  <App weekend={false} endList={endList} weekList={weekList} />, 
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
