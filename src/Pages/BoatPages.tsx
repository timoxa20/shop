import React from 'react'
import { useSelector } from 'react-redux'
import PagesMap from '../component/PagesMap'

const BoatPages = () => {

  const productBoat = useSelector(state => state.product.boat)

  return (
    <div>
      <PagesMap productName={productBoat} />
    </div>
  )
}

export default BoatPages
