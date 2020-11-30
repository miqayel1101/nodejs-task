let isValid = function(domain) {

    let domainPattern = /^[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})*(?:\.[a-zA-Z]{2,6})$/

    if(domainPattern.test(domain)) {
        return true
    } else {
        return false
    }
}

module.exports = {isValid}
