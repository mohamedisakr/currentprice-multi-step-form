import axios from 'axios'
const apiEndpoint = 'https://api.coindesk.com/v1/bpi/currentprice.json'

export const read = async () => {
  try {
    const res = await axios.get(`${apiEndpoint}`)
    return res.data
  } catch (err) {
    console.log(`Error : ${err}`)
    return err.response.data.error
  }
}
