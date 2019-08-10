import axios from 'axios'
import { is, curryN, gte } from 'ramda'
import { Config } from '../Config/index.dev'

const isWithin = curryN(3, (min, max, value) => {
  const isNumber = is(Number)
  return isNumber(min) && isNumber(max) && isNumber(value) && gte(value, min) && gte(max, value)
})
const in200s = isWithin(200, 299)


const userApiClient = axios.create({
  baseURL: Config.API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 5000,
})

function fetchUser() {

  return userApiClient.get('/users').then((response) => {
    console.log(`repsonse status: ${response.status}`)
    if (in200s(response.status)) {
      console.log(JSON.stringify(response.data))
      return response.data
    }
    return null;
  }).catch(err => {
    console.log(err.response)
    console.log(`error message: ${err.response.data.message}`)
  })
}

export const userService = {
  fetchUser,
}
