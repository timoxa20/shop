import React from 'react'
import { useSelector } from 'react-redux'
import PagesMap from '../component/PagesMap'

const SnowPages = () => {
  const productSnow = useSelector(state => state.product.snow)
  return (
    <div>
       <PagesMap productName={productSnow} />
    </div>
  )
}

export default SnowPages
