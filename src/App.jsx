import { useState } from 'react'
import './App.css'
import Card from './Card'
import Formulario from './Formulario';


function App() {


  const [estudiantes, setEstudiantes] = useState([]);

  const addEstudiante = (object) => {
    setEstudiantes([...estudiantes, object])
  }

  return (

    <div>
      <Formulario onAddEstudiante={addEstudiante} />
      <Card estudiantes={estudiantes}/>
    </div>

  )

}

export default App
