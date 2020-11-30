const whoiser = require('whoiser')

let checkDomainExpiration = async function(domain) {
    let domainInfo = await whoiser(domain)
    let expiryDate = domainInfo["whois.verisign-grs.com"]["Expiry Date"]
    return expiryDate
}

module.exports = {checkDomainExpiration}