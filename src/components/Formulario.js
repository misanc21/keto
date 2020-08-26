import React, { Fragment } from 'react'

const Formulario = () => {
    return (
        <Fragment>
            <form>
                <h2>Registra los datos</h2>
                <div className="campo">
                    <label>Limite superior</label>
                    <input
                        type="number"
                        className="u-full-width"
                        placeholder="Registra el limite superior"
                    />
                </div>
                <div className="campo">
                    <label>Limite Inferior</label>
                    <input
                        type="number"
                        className="u-full-width"
                        placeholder="Registra el limite inferior"
                    />
                </div>
                <div className="campo">
                    <label>Objetivo</label>
                    <input
                        type="number"
                        className="u-full-width"
                        placeholder="Objetivo (entre lim inferior y lim superior)"
                    />
                </div>
                <div className="campo">
                    <label>Error</label>
                    <input
                        type="number"
                        className="u-full-width"
                        placeholder="Error permitido en el resultado"
                    />
                </div>
                <input
                    type="submit"
                    className="u-full-width button-primary"
                    value="iniciar"
                />

            </form>
        </Fragment>
    )
}

export default Formulario