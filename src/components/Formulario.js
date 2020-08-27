import React, { Fragment, useState } from 'react'
import Error from './Error'
import PropTypes from 'prop-types'

const Formulario = ({calcs, reiniciarTabla}) => {
    const [datos, setDatos] = useState({
        limiteSuperior: 0,
        limiteInferior: 0,
        objetivo: 0,
        errorForm: 0
    })
    const [error, setError] = useState(0)

    const changeDatos = e => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    let {limiteSuperior, limiteInferior, objetivo, errorForm} = datos

    const reiniciarForm = () =>{
        setDatos({
            limiteSuperior: 0,
            limiteInferior: 0,
            objetivo: 0,
            errorForm: 0
        })
        reiniciarTabla()
    }

    const iniciarCalculo = e =>{
        e.preventDefault()
        let limSup = parseFloat(limiteSuperior)
        let limInf = parseFloat(limiteInferior)
        let obj = parseFloat(objetivo)
        let errr = parseFloat(errorForm)
        
        if( limSup <= limInf){
            setError(1)
            return
        } else if (obj > limSup || obj < limInf){
            setError(2)
            return
        }else if (isNaN(limSup) || isNaN(limInf) || isNaN(obj) || isNaN(errr)){
            setError(3)
            return
        }else{
            setError(0)
        }

        calcs(limSup, limInf, obj, errr)


    }

    return (
        <Fragment>
            <form onSubmit={iniciarCalculo}>
                <h2>Registra los datos</h2>
                {
                    error === 1? <Error mensaje='"Limite superior" menor o igual que "limite inferior"'/> :
                    error === 2? <Error mensaje="Objetivo no esta entre limites"/> :
                    error === 3? <Error mensaje="Todos los campos son obligatorios"/> : null
                }
                <div className="campo">
                    <label>Limite superior</label>
                    <input
                        type="number"
                        className="u-full-width"
                        placeholder="Registra el limite superior"
                        name="limiteSuperior"
                        onChange={changeDatos}
                        value={limiteSuperior}
                    />
                </div>
                <div className="campo">
                    <label>Limite Inferior</label>
                    <input
                        type="number"
                        className="u-full-width"
                        placeholder="Registra el limite inferior"
                        name="limiteInferior"
                        onChange={changeDatos}
                        value={limiteInferior}
                    />
                </div>
                <div className="campo">
                    <label>Objetivo</label>
                    <input
                        type="number"
                        className="u-full-width"
                        placeholder="Objetivo (entre lim inferior y lim superior)"
                        name="objetivo"
                        onChange={changeDatos}
                        value={objetivo}
                    />
                </div>
                <div className="campo">
                    <label>Error</label>
                    <input
                        type="number"
                        className="u-full-width"
                        placeholder="Error permitido en el resultado"
                        name="errorForm"
                        onChange={changeDatos}
                        value={errorForm}
                    />
                </div>
                <input
                    type="submit"
                    className="u-full-width button-keto"
                    value="iniciar"
                />
            </form>
            <div className="row">
                <div className="twelve columns">
                    <label className="reiniciar-form" onClick={reiniciarForm}>Reiniciar formulario</label>
                </div>
            </div>
        </Fragment>
    )
}

Formulario.propTypes = {
    calcs: PropTypes.func.isRequired,
    reiniciarTabla: PropTypes.func.isRequired
}

export default Formulario