import { useState, useEffect } from 'react'
import Header from './Components/Header'
import Modal from './Components/Modal'
import { generarId } from './helpers'
import ListadoGastos from './Components/ListadoGastos'
import IconoNuevoGasto from './img/nuevo-gasto.svg'

function App() {
  const [gastos, setGastos] = useState([])

  const [presupuesto, setPresupuesto] = useState(0)
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)

  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)

  const [gastoEditar, setGastoEditar] = useState({})

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setModal(true)
      setTimeout(() => {
        // console.log('Animando modal');
        setAnimarModal(true)
      }, 500);
    }
  }, [gastoEditar])


  const handleNuevoGasto = () => {
    // console.log('Diste click para agregar un nuevo gasto');
    setModal(true)
    setGastoEditar({})
    setTimeout(() => {
      // console.log('Animando modal');
      setAnimarModal(true)
    }, 500);

  }

  const guardarGasto = gasto => {
    if(gasto.id){
        const gastosActualizados = gastos.map(gastoState => gastoState.id === gasto.id ? gasto : gastoState)
        setGastos(gastosActualizados)
        setGastoEditar({})
      }
    else{
          gasto.id = generarId()
          gasto.fecha = Date.now()
          setGastos([...gastos, gasto])
    }

    setAnimarModal(false)
    setTimeout(() => {
      setModal(false)
    }, 500);
  }

  const eliminarGasto = (id) => {
    const gastosActualizados = gastos.filter((gasto) => gasto.id != id)
    setGastos(gastosActualizados)
  }

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        gastos={gastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />

      {isValidPresupuesto &&
        (
          <>
            <main>
              <ListadoGastos
                gastos={gastos}
                setGastoEditar={setGastoEditar}
                eliminarGasto={eliminarGasto}
              />
            </main>
            <div className='nuevo-gasto'>
              <img src={IconoNuevoGasto} alt="Icono nuevo gasto"
                onClick={handleNuevoGasto}
              />
            </div>
          </>
        )
      }

      {modal && <Modal

        setModal={setModal}
        animarModal={animarModal}
        setAnimarModal={setAnimarModal}
        guardarGasto={guardarGasto}
        gastoEditar={gastoEditar}
        setGastoEditar={setGastoEditar}
      />}
    </div>
  )
}

export default App
