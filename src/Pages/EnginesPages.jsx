import React from 'react'
import { useSelector } from 'react-redux'
import PagesMap from '../component/PagesMap'

const EnginesPages = () => {
  const productEngine = useSelector(state => state.product.engine)
  return (
    <div>
      <PagesMap productName={productEngine} />
    </div>
  )
}

export default EnginesPages
