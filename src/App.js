import React from 'react';
import Glitch from './component/Glitch'
import TypeWriter from './component/TypeWriter'

function App() {
  return (
    <>  
      <div className="glitch" data-text="Santiago AGM">
      <Glitch name='Santiago AGM'/>
      </div>
      <TypeWriter perfil="Full Stack Web Developer"/>
    </>
  );
}

export default App;
