import React from 'react'
import { useSelector } from 'react-redux'
import PagesMap from '../component/PagesMap'

const SharePages = () => {
  const productSpare = useSelector(state => state.product.spare)
  return (
    <div>
      <PagesMap productName={productSpare} />
    </div>
  )
}

export default SharePages
