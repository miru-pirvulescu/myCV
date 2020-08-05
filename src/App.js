import React from 'react';
import logo from './logo.svg';
import './App.css';

const News = ({category, headline}) => <p><b>{category}</b>: <i>{headline}</i></p>;


const App = ({weekend, endList, weekList}) => (
  <div>
      {weekend ? 
          <ul>
              {endList.map((elem) =>
                  <li key={elem.id}><News category={elem.category} headline={elem.headline}/></li>
              )}
          </ul>
          :
          <ul>
              {weekList.map((elem, i) =>
                  <li key={elem.id}><News category={elem.category} headline={elem.headline}/></li>
              )}
          </ul>                    
      }
  </div>
);

export default App;
