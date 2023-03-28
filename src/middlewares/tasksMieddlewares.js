const validateBodyTitle = (req, res, next) => {
    const { body } = req

    if(body.title === undefined){
        return res.status(400).json({message: 'Coloque o "title" na requisição'})
    }
    if(body.title === ''){
        return res.status(400).json({message: 'O titulo não pode ser vazio'})
    }
    next()
}
const validateBodyStatus = (req, res, next) => {
    const { body } = req

    if(body.status === undefined){
        return res.status(400).json({message: 'Coloque o "status" na requisição'})
    }
    if(body.status === ''){
        return res.status(400).json({message: 'O "status" não pode ser vazio'})
    }
    next()
}

module.exports = {
    validateBodyTitle,
    validateBodyStatus
}