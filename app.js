const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
const fromDollarToYen = (dollar) =>{
    return oneEuroIs.USD * dollar * oneEuroIs.JPY
}
const fromEuroToDollar = (euros) =>{
    return euros * oneEuroIs.USD
}
const fromYenToPound = (yen) => {
    return yen * oneEuroIs.JPY * oneEuroIs.GBP
}
console.log ("from dollar to yen " + fromDollarToYen(1))
console.log ("from yen to pound " + fromYenToPound(3.5
    
))
module.exports = {sum, fromDollarToYen, fromEuroToDollar, fromYenToPound};