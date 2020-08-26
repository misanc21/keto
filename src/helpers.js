import shortid from 'shortid'

export const calcs = (superior, inferior, objetivo, error)=>{
    const errSup = objetivo + error
    const errMin = objetivo - error
    let res = (superior+inferior)/2
    let arr = [{
        id: shortid.generate(),
        limSuperior: superior,
        limInferior: inferior,
        resultado: res
    }]

    while(res < errMin || res > errSup){
        res > errSup ? superior = res : inferior = res
        res = ((parseFloat(superior)+parseFloat(inferior))/2).toFixed(3)
        arr.push({
            id: shortid.generate(),
            limSuperior: superior,
            limInferior: inferior,
            resultado: res
        })
    }

    return arr
}