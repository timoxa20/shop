import React, { useEffect, useMemo } from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Cards from '../component/Cards'
import style from '../style/Basket.module.css'

import {useDispatch} from 'react-redux'
import { fetchBaskets } from '../asynsAction/bascet'

const BasketPages = () => {

  const dispatch = useDispatch()
  const basket = useSelector(state => state.basket.basket) 

  
  return (
    <Container>

      {basket.length > 0 ? 
      <div>
        {basket.map(bak => 
          <Cards   key={bak.id} title={bak.title} img={bak.url} price={bak.price} id={bak.id} />
          )}  
      </div> 
      :
      <h1
      className={style.BascetH1}
      >Корзина пуста</h1>
        }
    </Container>
  )
}

export default BasketPages
