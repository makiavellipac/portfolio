import React from 'react';
import Glitch from './component/Glitch'
import TypeWriter from './component/TypeWriter'



function App() {
  const perfil=[
    "Full Stack Web Developer",
    "MERN Stack",
    "MEAN Stack",
    "Ing. Ciencias De La Computación"
  ]
  return (
    <>  
      <div className="glitch" data-text="Santiago AGM">
      <Glitch name='Santiago AGM'/>
      </div>
      <TypeWriter perfil={perfil}/>
    </>
  );
}

export default App;
