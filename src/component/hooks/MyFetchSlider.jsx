import { useEffect, useState } from 'react'
import axios from 'axios'

export const useFetching = (name) => {

const [value, setValue] = useState([])

async function fetchPopular() {
    const response = await axios.get(`http://localhost:3000/${name}`)
    setValue(response.data)

}
useEffect(() => {
    fetchPopular(name)
}, [])

return value
}