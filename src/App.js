import React from 'react';
import './App.css';
import Header from './components/header/Header';

const News = ({category, headline}) => <p><b>{category}</b>: <i>{headline}</i></p>;


const App = ({weekend, endList, weekList}) => (
  <>
    <Header theme='light'></Header>
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
  </>
);

export default App;
