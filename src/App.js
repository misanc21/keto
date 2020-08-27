import React, {useState, Fragment} from 'react';
import Formulario from './components/Formulario'
import Listado from './components/Listado'
import { calcs } from './helpers'

function App() {

  const [lista, setLista] = useState([])

  const arr = (sup, inf, obj, err)=>{
    setLista(calcs(sup, inf, obj, err))
  }

  const reiniciarTabla = () =>{
    setLista([])
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
                reiniciarTabla = {reiniciarTabla}
              />
          </div>
          <div className="one-half column">
              {lista.length === 0? (
                <Fragment>
                  <h2>Listado</h2>
                  <p className="p-tableVacia">llena el formulario para obtener los datos</p>
                </Fragment>
              ):(
                <Listado
                  lista = {lista}
                />
              )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
