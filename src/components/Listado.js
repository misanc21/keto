import React, {Fragment} from 'react'

const Listado = ({ lista }) => {
    return (
        <Fragment>
            <h2>Iteraciones</h2>
            <table>
                <thead>
                    <th>Valor 1</th>
                    <th>Valor 2</th>
                    <th>Resultado</th>
                </thead>
            </table>
        </Fragment>
    )
}

export default Listado