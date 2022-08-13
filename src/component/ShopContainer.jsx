import React from 'react'
import { Col } from 'react-bootstrap'
import { useFetching } from '../component/hooks/MyFetchSlider'
import Cards from '../component/Cards'



const ShopContainer = () => {

    return (
        <>
            <div className='d-flex' style={{ flexWrap: 'wrap' }}>
                {useFetching('Shop').map(({ name, img, title, price, id }) =>
                    <Col key={id} md={4}>
                        <Cards name={name} img={img} title={title} price={price} />
                    </Col>

                )}
            </div>

        </>
    )
}

export default ShopContainer
