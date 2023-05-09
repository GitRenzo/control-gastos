import Gasto from "./Gasto"
const ListadoGastos = ({ gastos, setGastoEditar, eliminarGasto, filtro, gastosFiltrados }) => {

    console.log(filtro);
    return (
        <div className="listado-gastos contenedor">
            {
                filtro ? (
                    <>
                        {console.log('Filtro se cumple', gastosFiltrados)}
                        <h2>{gastosFiltrados.length ? 'Gastos' : 'No hay gastos en esta categoria '}</h2>
                        {gastosFiltrados.map(gasto => {
                            return (
                                <Gasto
                                    key={gasto.id}
                                    gasto={gasto}
                                    setGastoEditar={setGastoEditar}
                                    eliminarGasto={eliminarGasto}
                                />
                            )
                        })}
                    </>

                ) :
                    (
                        <>
                            {console.log('filtro no se  cumple', gastos.length)}
                            <h2>{gastos.length ? 'Gastos' : 'No hay gastos aun'}</h2>
                            {gastos.map(gasto => {
                                return (
                                    <Gasto
                                        key={gasto.id}
                                        gasto={gasto}
                                        setGastoEditar={setGastoEditar}
                                        eliminarGasto={eliminarGasto}
                                    />
                                )
                            })}
                        </>
                    )
            }

        </div>
    )
}

export default ListadoGastos