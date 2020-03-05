class Api {
    suma(req, res){
        let params = req.body
        console.log(params)
        let suma = params.num1 + params.num2
        return res.status(200).send({resultado: suma})
    }
}

module.exports = new Api()