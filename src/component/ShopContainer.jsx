import React, { Children } from 'react'




const ShopContainer = ({children}) => {

    return (
        <>
            <div className='d-flex' style={{ flexWrap: 'wrap' }}>
                {children}
            </div>

        </>
    )
}

export default ShopContainer
