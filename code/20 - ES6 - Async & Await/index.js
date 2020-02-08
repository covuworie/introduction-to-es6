// bitcoin conversion to currency API:
// https://www.coindesk.com/coindesk-api
const apiUrl = 'https://api.coindesk.com/v1/bpi/currentprice.json'

// using async and await
async function getBitcoinPrice() {
    try {
        const response = await fetch(apiUrl);
        const json = await response.json();
        console.log(`Price of 1 bitcoin in USD: ${json['bpi']['USD']['rate']}`);
    }
    catch(error) {
        console.log(`failed: ${error.message}`)
    }
}

// same code using Promises
// function getBitcoinPrice() {
//     fetch(apiUrl)  // returns a Promise
//     // if successful convert the response to json 
//     .then((response) => response.json())  // returns another Promise
//     // if successful log the first element of the json array 
//     .then((json) => {
//         console.log(`Price of 1 bitcoin in USD: ${json['bpi']['USD']['rate']}`);
//     })
//     // if there is an exception catch it and log the error
//     .catch((error) => {
//         console.log(`failed: ${error.message}`)
//     })
// }

getBitcoinPrice();