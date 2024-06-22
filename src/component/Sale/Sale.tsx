import React from 'react'
import { Container, Image } from 'react-bootstrap'
import imagesSale from '../../assets/images.png'


const Sale = () => {
  return (
    <Container>
      <Image style={{width: '100%'}} src={imagesSale}></Image>
    </Container>
  )
}

export default Sale
