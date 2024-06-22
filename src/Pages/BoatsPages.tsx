import React from 'react'

import { useSelector } from 'react-redux'
import PagesMap from '../component/PagesMap'

const BoatsPages = () => {
  
  const productBoats = useSelector(state => state.product.boats)

  return (
    <PagesMap productName={productBoats} />
  )
}

export default BoatsPages
