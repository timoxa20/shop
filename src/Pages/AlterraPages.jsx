import React from 'react'
import { useSelector } from 'react-redux'
import PagesMap from '../component/PagesMap'

const AlterraPages = () => {
    const productAlterra = useSelector(state => state.product.allterra)

    return (
        <div>
            <PagesMap productName={productAlterra} />
        </div>
    )
}

export default AlterraPages
