import React, {useState} from 'react';
import Formulario from './components/Formulario'
import Listado from './components/Listado'
import { calcs } from './helpers'

function App() {

  const [lista, setLista] = useState([])

  const arr = (sup, inf, obj, err)=>{
    setLista(calcs(sup, inf, obj, err))
  }

  return (
    <div className="container">
      <header>
        <img className="img-keto" src="https://www.ketogains.com/wp-content/uploads/2020/02/ketogains.svg" alt="keto"/> 
        <h1>Aproximacion del punto medio </h1>
      </header>
      <section className="contenido-principal contenido">
        <div className="row">
          <div className="one-half column">
              <Formulario
                calcs= {arr}
              />
          </div>
          <div className="one-half column">
              <Listado
                lista = {lista}
              />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
