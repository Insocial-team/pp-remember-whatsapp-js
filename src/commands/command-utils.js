/**
 * Receive the entire message body from a command and retrieves quoted params
 * Example: '/pp remind "Do something" "19-06" "09:00"' returns [ 'Do something', '19-06', '06:00' ]
 * @param {*} messageCommand Example '/pp remind "Do something" "19-06" "09:00"'
 * @returns Array with params without quotes, example [ 'Do something', '19-06', '06:00' ]
 */
const filterQuotedParams = (messageCommand) => {
    return messageCommand.match(/("[^"]*")|\s+/g).filter(e => e !== '"' && e !== ' ').map(e => e.replace(/"/g, ''));
}

module.exports = {
    filterQuotedParams
};