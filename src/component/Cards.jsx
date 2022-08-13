import React, {useState} from 'react'
import Card from 'react-bootstrap/Card'
import style from '../style/Cards.module.css'
import styleBascetPages from '../style/CardsBascet.module.css'
import { Button, Col, Container, Image } from 'react-bootstrap'
import favoritIcons from '../assets/favoritesIcons.svg'
import bascetIcons from '../assets/bascetIcons.svg'
import favoritIconsActiv from '../assets/favoritesBlue.svg'
import imgCards from '../assets/img.png'
import { useDispatch, useSelector } from 'react-redux'
import { addBasketAction } from '../store/BasketStore'
import { useLocation } from 'react-router-dom'
import { BASKET_ROUTE } from '../const'
import { removeBasketAction } from '../store/BasketStore'
import { addFavoritsAction } from '../store/FavoriteStore'
import axios from 'axios'

const Cards = ({ img, title, price, id }) => {

  const location = useLocation()
  const bascetPages = location.pathname === BASKET_ROUTE
  const [favorite, setFavorite] = useState(favoritIcons)


  const dispatch = useDispatch()
  const basket = useSelector(state => state.basket.basket)
  const favorit = useSelector(state => state.favorit.favorit)



  const addToCard = (name) => {
    const basket = {
      name,
      id: Date.now(),
    }
    dispatch(addBasketAction(basket))
  }




  const addToFavorit = (name, img, title, price) => {
    const favorit = {
      name,
      img,
      title,
      price,
      id: Date.now(),
    }
    setFavorite( favoritIconsActiv )
    dispatch(addFavoritsAction(favorit))
  }

  const removeToCard = () => {
    dispatch(removeBasketAction(id))
  }

  return (
    <Container>
      {bascetPages ?
        <Card className='mt-3' >
          <div
            className='d-flex'
          >
            <Col md={3}>
              <Image
              style={{width: 100, height: 100}}
                className='p-3 '
                src={img} />
            </Col>
            <Col className={styleBascetPages.CardsBascet} md={3}>
              <div
                className={styleBascetPages.CardsBascetText}
              > {title}</div>
            </Col>
            <Col className={styleBascetPages.CardsBascet} md={3}>
              <div
                className={styleBascetPages.CardsBascetPrice}
              >{price} ₽</div>
            </Col>
            <Col className={styleBascetPages.CardsBascet} md={3}>
              <Button
                className={styleBascetPages}
                onClick={() => removeToCard(basket)}
                variant='outline-danger'>
                Удалить
              </Button>
            </Col>
          </div>
        </Card>
        :
        <Card
          className={style.Cards}
        >
          {favorite === favoritIcons ?
          <button 
          onClick={() => addToFavorit()}
          className={style.CardsFavorit}>
            <Image
              src={favorite} />
          </button>
          :
          <button 
          className={style.CardsFavorit}>
            <Image
              src={favoritIconsActiv} />
          </button>
        
        }
          <div
            className={style.CardsInfo}
          >
            <Image
              className={style.CardsImg}
              src={img} />
            <div
              className={style.CardText}
            > {title}</div>
            <div
              className={style.CardsPrice}
            >{price} ₽</div>
          </div>
          <Button
            className={style.CardsBasket}
            onClick={() => addToCard()}
            variant='primary'>
            <Image src={bascetIcons} />
          </Button>
        </Card>
      }

    </Container>

  )
}

export default Cards
