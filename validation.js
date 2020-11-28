let isValid = function(domain) {
    if(/^[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})*(?:\.[a-zA-Z]{2,6})$/.test(domain)) {
        return true
    } else {
        return false
    }
}

let checkDomain = function(req, res) {
    let domain = req.params.domain

    if(isValid(domain)) {
        res.send({
            "status": "valid"
        })
    } else {
        res.send({
            "status": "invalid"
        })
    }
}

module.exports = {checkDomain}
