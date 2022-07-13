import React, { useEffect, useState } from 'react'
import axios from 'axios'
import StocksItem from './StocksItem'


const Stocks = () => {
  const [value, setValue] = useState([])

  async function fetchAPI() {
    const response = await axios.get('http://localhost:3000/stoc')
     setValue(response.data)
  }

  useEffect(() => {
    fetchAPI()
  }, [])

  return (
    <div>
      <StocksItem value={value}/>
    </div>
  )
}

export default Stocks


