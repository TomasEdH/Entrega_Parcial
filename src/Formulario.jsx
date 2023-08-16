import { useState } from "react"


function Formulario({ onAddEstudiante }) {



    const [nombre, setNombre] = useState("")
    const [club, setClub] = useState("")
    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nombre.length >= 3 && club.length >= 6) {
            onAddEstudiante({ nombre, club })
            setNombre("")
            setClub("")
            setError(false)
        } else {
            setNombre("")
            setClub("")
            setError(true)
        }

    }

    return (
        <>
        <h2>Form Club de Fútbol</h2>
            <div className="form-box">
                <form onSubmit={handleSubmit}>
                    <label>
                        <input type="text" placeholder='Ingresa tu nombre' value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    </label>
                    <label>
                        <input type="text" placeholder='Ingresa un club de futbol' value={club} onChange={(e) => setClub(e.target.value)} />
                    </label>
                    <button type='submit'>Agregar</button>
                </form>
                {error && <div><p>Por favor chequea que la información sea correcta</p></div>}
            </div>
        </>
    )
}

export default Formulario;