import { useState } from "react"


export const Formulario = ({ requerimientos, setRequerimientos }) => {

  const [proyecto, setProyecto] = useState('')
  const [tipoTarea, setTipoTarea] = useState('')
  const [personaAsignada, setPersonaAsignada] = useState('')
  const [storyPoints, setStoryPoints] = useState('')
  const [prioridad, setPrioridad] = useState('')
  const [fechaCreacion, setFechaCreacion] = useState('')
  const [resumen, setResumen] = useState('')
  

  const [error, setError] = useState(false)


  const handleSubmit = (e) => {
    e.preventDefault()
    
    //validar que los campos esten llenos
    if([proyecto, tipoTarea, personaAsignada, storyPoints, prioridad, fechaCreacion, resumen].includes('')) {
      console.log('Hay al menos un campo vacio')

      setError(true)
      return
    }
      
      setError(false)

        //objeto con los datos del req
        const objetoRequerimiento = {
          proyecto, 
          tipoTarea, 
          personaAsignada, 
          storyPoints, 
          prioridad, 
          fechaCreacion, 
          resumen
        }
        console.log(objetoRequerimiento)
      
        //agregar el req al state
        setRequerimientos([
          ...requerimientos,
          objetoRequerimiento
        ])

        //reiniciar el formulario
        setProyecto('')
        setTipoTarea('')
        setPersonaAsignada('')
        setStoryPoints('')
        setPrioridad('')
        setFechaCreacion('')
        setResumen('')
      } 
  
    
  return (
    <div className="w-1/2">
    <h2 className="text-3xl text-center">Seguimiento de requerimientos</h2>

    <p className="font-black text-lg mt-5 text-center mb-10">Añade requerimientos y {''}
    <span className="text-indigo-600 font-bold">Administralos</span></p>

    <form 
    onSubmit={handleSubmit}
    className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
    {error ? <p className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 text-center mb-5">Todos los campos son obligatorios</p> : null}
    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="proyecto">Proyecto</label>
      <input className="shadow appearance-none border rounded 
      w-full py-2 px-3 text-gray-700 leading-tight 
      focus:outline-none focus:shadow-outline"
       id="proyecto" 
       type="text" 
       placeholder="Proyecto"
       value={proyecto}
       onChange={(e) => setProyecto(e.target.value)}
       />
  

    </div>

    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tipoTarea">Tipo de tarea</label>
      <input className="shadow appearance-none border rounded 
      w-full py-2 px-3 text-gray-700 leading-tight 
      focus:outline-none focus:shadow-outline"
       id="tipoTarea" 
       type="text" 
       placeholder="tipoTarea"
        onChange={(e) => setTipoTarea(e.target.value)}
      value={tipoTarea}
       />
     
    </div>

    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="personaAsignada">personaAsignada</label>
      <input className="shadow appearance-none border rounded 
      w-full py-2 px-3 text-gray-700 leading-tight 
      focus:outline-none focus:shadow-outline"
       id="personaAsignada" 
       type="text" 
       placeholder="Persona Asignada"
       onChange={(e) => setPersonaAsignada(e.target.value)}
      value={personaAsignada}
       />
    </div>

    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="storyPoints">storyPoints</label>
      <input className="shadow appearance-none border rounded 
      w-full py-2 px-3 text-gray-700 leading-tight 
      focus:outline-none focus:shadow-outline"
       id="storyPoints" 
       type="text"
        onChange={(e) => setStoryPoints(e.target.value)}
        value={storyPoints}
        />
    </div>

    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="prioridad">prioridad</label>
      <input className="shadow appearance-none border rounded 
      w-full py-2 px-3 text-gray-700 leading-tight 
      focus:outline-none focus:shadow-outline"
       id="prioridad" 
       type="text"
      onChange={(e) => setPrioridad(e.target.value)}
      value={prioridad}
        />

    </div>

    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fechaCreacion">fechaCreacion</label>
      <input className="shadow appearance-none border rounded 
      w-full py-2 px-3 text-gray-700 leading-tight 
      focus:outline-none focus:shadow-outline"
       id="fecha" 
       type="date"
        onChange={(e) => setFechaCreacion(e.target.value)}/>
        
    </div>

    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="resumen">Resumen</label>
      <textarea className="shadow appearance-none border rounded 
      w-full py-2 px-3 text-gray-700 leading-tight 
      focus:outline-none focus:shadow-outline"
       id="resumen" 
       placeholder="Resumen"
        onChange={(e) => setResumen(e.target.value)}
      value={resumen}
       />
    </div>

    <button className="bg-indigo-600 hover:bg-indigo-700 w-full mt-5 p-2 text-white uppercase font-bold rounded"
    type="submit">Cargar Requerimiento</button>

    </form>

    </div>
  )
}
