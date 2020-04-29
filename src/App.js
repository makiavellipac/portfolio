import React from 'react';
import Glitch from './component/Glitch'
import TypeWriter from './component/TypeWriter'
import RandomText from './component/RandomText'



function App() {
  const perfil=[
    "Full Stack Web Developer",
    "MERN Stack",
    "MEAN Stack",
    "Ing. Ciencias De La Computación"
  ]
  return (
    <>  
      <Glitch name='Santiago AGM'/>
      <TypeWriter perfil={perfil}/>
      <RandomText name='Portafolio'/>
    </>
  );
}

export default App;
