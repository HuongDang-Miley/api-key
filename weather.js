// // Weather API- https://openweathermap.org/api
const axios = require('axios')
const key = '4e6233eca32618abe38e4e44d18f65df'


const printWeather = async (zipCode) => {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&units=imperial&appid=4e6233eca32618abe38e4e44d18f65df`
        const response = await axios.get(url)
        const data = await response.data
        const {
            weather: [
                { main,
                    description }
            ],
            main: {
                temp,
                temp_min,
                temp_max,
                humidity
            },
            sys: {
                country,
                sunrise,
                sunset
            },
            name,
        } = data
        
        console.log(`
        You're located at ${name}, ${zipCode} ${country}\n
        Today the weather is ${description} \n
        Current Temperature: ${temp}°F\n
        Min Temperature: ${temp_min}°F\n
        Max Temperature: ${temp_max}°F\n
        Humidity: ${humidity}%\n
        Sunrise at: ${sunrise}\n
        Sunset at: ${sunset}\n
        `)
        interface.close()
    } catch (err) {
        console.log(`Your zip code is invalid. Please try again`)
        interface.close()
    }
}

const readline = require('readline')
const interface = readline.createInterface({ input: process.stdin, output: process.stdout })
interface.question(`Enter Your Zip Code To See Weather Forecast:\n`, printWeather)

