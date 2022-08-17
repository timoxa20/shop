import React from 'react'
import { useSelector } from 'react-redux'
import PagesMap from '../component/PagesMap'

const ATVSPages = () => {

  const productAtvs = useSelector(state => state.product.atvs)

  return (
    <PagesMap productName={productAtvs}/>
  )
}

export default ATVSPages
