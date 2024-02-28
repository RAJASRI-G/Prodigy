import React from 'react';

import b from './assets/images/contact.gif'
import Contact from './pages/Contact';

function App() {
    return (
        <div className="gift2">
           
            <Contact/>
           <div className="icon-right">
           <img src={b}/>
           </div>
        </div>
    );
}

export default App;
