import { useState } from 'react'
import { Header } from './components/Header'
import { Formulario } from './components/Formulario'
import { ListadoRequerimientos } from './components/ListadoRequerimientos'
import './App.css'

function App() {

  const [requerimientos, setRequerimientos] = useState([])
 
  // Función para eliminar un requerimiento por nombre proyecto
  const eliminarRequerimiento = (nombre) => {
    const nuevosRequerimientos = requerimientos.filter( requerimiento => requerimiento.proyecto !== nombre);
    setRequerimientos(nuevosRequerimientos);
  };

  return (
    <div className="container mx-auto mt-20">
      <Header /> 

      <div className='mt-12 flex'>
      <Formulario
      requerimientos={requerimientos}
      setRequerimientos={setRequerimientos}
       /> 
      <ListadoRequerimientos
        requerimientos={requerimientos}
        onEliminarRequerimiento={eliminarRequerimiento}
       />   
      </div> 
    </div>
  )
}

export default App
