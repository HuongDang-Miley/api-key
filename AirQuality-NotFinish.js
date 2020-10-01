
// Print a list of city
const axios = require('axios')
const key = `f2f4f6ee-4ffd-4624-a569-4c694f5ba120`
const url = `http://api.airvisual.com/v2/city?city=Los Angeles&state=California&country=USA&key=${key}`


http://api.airvisual.com/v2/city?city=Los Angeles&state=California&country=USA&key=$f2f4f6ee-4ffd-4624-a569-4c694f5ba120
const printCity = async (key) => {
    const countriesAvailable = await axios.get(url)
    const data = await countriesAvailable.data 
    // const { data } = await countriesAvailable.data
    // // make a list of array where countries are numbered
    // const countries = await data.map((item) => Object.values(item))
    // let printCountries = ''
    // let count = 1
    // for (const country of countries) {
    //     printCountries += `${count}. ${country} \n`
    //     count++
    // }
    console.log(data)
    // console.log(`${printCountries} \n Enter The Number Of Your Country:\n`)
}

printCity(key)
// let question = `Type a number \n`

// let test = (answer) => {
//     if (isNaN(answer) || answer == 0) {
//         console.log('Your answer is neither a number nor available')
//         interface.close()
//     }
//     else {
//         console.log(`this is your answer ${answer}`)
//         interface.close()
//     }
// }

// const readline = require('readline')
// const interface = readline.createInterface({ input: process.stdin, output: process.stdout })
// interface.question(`${askUserCountry}`, test)


// const axios = require('axios');
let url2 = 'https://jsonplaceholder.typicode.com/users';

async function axiosAsync (url) {
    // try {
        const response = await axios.get(url)
        const data = await response.data 
        const users = await data.filter(({id}) => id < 6)
        console.log(users)

    // } catch(err) {
    //     console.log(err)
    // }
}

// axiosAsync(url2)