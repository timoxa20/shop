import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetchFavorit } from '../asynsAction/favorit'
import style from '../style/Basket.module.css'
import Cards from '../component/Cards'




const FavoritesPages = () => {
  const dispatch = useDispatch()
  const favorit = useSelector(state => state.favorit.favorit)


  return (

      <Container >
        <div>
        {favorit.length > 0 ?
          <div className='d-flex flex-wrap flex-direction-column justify-content-around'>
            {favorit.map(fav =>
            <div >
              <Cards key={fav.id} title={fav.title} img={fav.url} price={fav.price} id={fav.id} />
            </div>
              
            )}
          </div>
          :
          <h1
            className={style.BascetH1}
          >Избранные товары отсудствуют</h1>
        }
        </div>
      </Container>
      )}

export default FavoritesPages
