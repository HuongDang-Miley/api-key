// Use any ONE of these API's that needs an API key to get data.
// Read the docs to see how to call for and get the data that you want
// Or you can use one of your choosing if you are comfortable, HOWEVER it must require an API Key
// Parse the data, and log any important information you would like to show in a nice format of your choosing.
// You can add your own spin to the data in how you present it.
// Use any tools we've practiced such as promises, destructuring, etc.
// Once everything works, upload the file and submit.


// // Weather API- https://openweathermap.org/api
// // Weather/Air Quality API-  https://www.airvisual.com/dashboard/api
// // Recipe API- https://developer.edamam.com/ (uses two key code)
// // Superheroes API- https://superheroapi.com/index.html
// // Movies API- https://www.omdbapi.com/
// // Sports API - https://allsportsapi.com/
// // News API - https://newsapi.org/
// // Harvard Art Museum API - https://www.harvardartmuseums.org/collections/api


// If you want to make your project a little more robust and dynamic you could use tools like the ones below:
// Read the docs to see how it works. Not hard.


// Readline: https://nodejs.org/api/readline.html
// OR
// Inquirer: https://www.npmjs.com/package/inquirer
// Read the docs to find out how to use. Pretty intuitive.

// Out put

const axios = require('axios')
const key = `f2f4f6ee-4ffd-4624-a569-4c694f5ba120`
// const url = `https://www.airvisual.com/dashboard/api`
const country = 'USA'
const city = 'Weehawken'
const state = 'New Jersey'

http://api.airvisual.com/v2/nearest_city?key=f2f4f6ee-4ffd-4624-a569-4c694f5ba120

const countriesList = `http://api.airvisual.com/v2/countries?&key=${key}`

const countriesList2 = `http://api.airvisual.com/v2/countries?key=${key}`

// const specificLocation = `http://api.airvisual.com/v2/city?city=Los Angeles&state=California&country=USA&key=${key}`

const specificLocation = `http://api.airvisual.com/v2/city?city=${city}&key=${key}`

const citiesInAState = `http://api.airvisual.com/v2/cities?state=${state}&country=${country}&key=${key}`

// const specificLocation = `http://api.airvisual.com/v2/city?city=Los Angeles&state=California&country=USA&key=${key}`

const nearestCity = `http://api.airvisual.com/v2/nearest_city?key=${key}`

const chooseCountry = async (url) => {
    const key = `f2f4f6ee-4ffd-4624-a569-4c694f5ba120`
    const countriesAvailable = await axios.get(`http://api.airvisual.com/v2/countries?&key=${key}`)
    const {data} = await countriesAvailable.data
    // make a list of array where countries are numbered
    const countries = await data.map((item) => Object.values(item))
    let printCountries = ''
    let count = 1
    for (const country of countries) {
        printCountries += `${count}. ${country} \n`
        count ++
    }


    console.log(printCountries)
    // console.log(aqius)
    // console.log(tp)
    // console.log(hu)

    



    // const response = await axios.get(url)
    // const data = await response.data
    // const { data:
    //     { current: {
    //         weather,
    //         pollution
    //     } } } = data
    //     const {aqius} = pollution
    //     const {ts, tp, wp, hu, } = weather
    // // // console.log(weather)
    // console.log(data)
}


chooseCountry(countriesList2)




// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('What do you think of Node.js? ', (answer) => {
//   // TODO: Log the answer in a database
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// });

