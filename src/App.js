import React from 'react';
import Formulario from './components/Formulario'

function App() {
  return (
    <div className="container">
      <header>
        <h1>Aproximacion del punto medio</h1>
      </header>
      <section className="contenido-principal contenido">
        <div className="row">
          <div className="one-half column">
              <Formulario
              
              />
          </div>
          <div className="one-half column">
              resultado
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
