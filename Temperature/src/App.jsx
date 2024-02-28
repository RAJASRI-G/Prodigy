import React from 'react';
import TempConvert from './pages/Temperature';
import a from './assets/images/te.png'

function App() {
    return (
        <div className="gift2">
           
            <TempConvert/>
           <div className="icon-right">
           <img src={a}/>
           </div>
        </div>
    );
}

export default App;
