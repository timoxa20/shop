import React from 'react'
import { useSelector } from 'react-redux'
import PagesMap from '../component/PagesMap'

const JetscisPages = () => {

  const productJetscis = useSelector(state => state.product.jetskis)

  return (
    <PagesMap productName={productJetscis} />
  )
}

export default JetscisPages
