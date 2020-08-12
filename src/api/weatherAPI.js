import axios from 'axios'
const URL = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY = '1414cde23fb661cc918f1aba368a675a'

export const getWeatherState = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q : query,
            units : 'metric',
            APPID : API_KEY
        }
    })

    return data
}