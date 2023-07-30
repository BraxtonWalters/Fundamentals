
// 1).-----------------------------------------------------------------
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar) // this will be the first car in the array so it will log the "Tesla"
console.log(otherRandomCar) // this is going to be the second car bc of the , then the var name. so it will log "Mercedes"

// 2).-----------------------------------------------------------------
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
// console.log(name); // this is going to be an error. no where did we declare a name var
console.log(otherName); // this is going to log "Elon" 

// 3).-----------------------------------------------------------------
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person; // there is no key of password in the person object this is going to be an error
console.log(password); // it should log this fine if we remove the line above 
console.log(hashedPassword); // and this guy
// ha i was wrong it ran fine!!! It was just made hashedPassword undefined!!!

// 4).-----------------------------------------------------------------
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers; // this should be the int 2... I think
const [,,,second] = numbers; // this should be the int 5... once again I think
const [,,,,,,,,third] = numbers; // this should be the int 2??
//Predict the output
console.log(first == second); // should log false
console.log(first == third); // should log true... maybe
// omg I'm so smart lol

// 5).-----------------------------------------------------------------
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest; // so this is like making the key a var (const key = "value")
const { secondKey } = lastTest; // this is like (const secondKey = [1, 5, 1, 8, 3, 3])
const [ ,willThisWork] = secondKey; // this is like (const willThisWork = 5)
//Predict the output
console.log(key); // logs value
console.log(secondKey); // that array in the object
console.log(secondKey[0]); // logs the int 1
console.log(willThisWork); // logs the int 5
// just going to be honest with you... I'm going to run the code on this one. kinda lost... 
// I think I get it
