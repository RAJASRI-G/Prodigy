import React from 'react';

import a from './assets/images/te.png'

import Guess from './pages/Guess';

function App() {
    return (
        <div className="gift2">
           
            <Guess/>
           <div className="icon-right">
           <img src={a}/>
           </div>
        </div>
    );
}

export default App;
