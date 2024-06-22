import React from 'react'
import { useSelector } from 'react-redux/es/exports'
import { Navbar, Container, Nav, Image, Row, Col } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { SHARES_ROUTE, SHOP_ROUTE, DELIVERY_ROUTE, FAVORITES_ROUTE, ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE } from '../const'
import img from '../shared/assets/logo.svg'
import favorites from '../assets/favorites.svg'
import user from '../shared/assets/user.svg'
import bascer from '../shared/assets/bascet.svg'
import style from '../style/NavBar.module.css'
import { useDispatch } from 'react-redux/es/hooks/useDispatch'
import { setChetboxAction } from '../store/UserStore'


const NavBar = () => {
    const isAuth = useSelector(state => state.user.isAuth)
    const basket = useSelector(state => state.basket.basket)
    const favorit = useSelector(state => state.favorit.favorit)
    const dispatch = useDispatch()

    const flag = () => {
        dispatch(setChetboxAction(true))
    }
    const exitflag = () => {
        dispatch(setChetboxAction(false))
    }
    return (

        <Navbar collapseOnSelect expand="lg" bg="while" variant="while">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse >
                    <Container className='d-flex justify-content-between'>
                        <Col md={5}>
                            <Nav className='d-flex' >

                                <div>
                                    <NavLink
                                        className={style.NavBar}
                                        to={SHOP_ROUTE}
                                    >
                                        Магазин
                                    </NavLink>
                                    <NavLink
                                        className={style.NavBar}
                                        to={SHARES_ROUTE}
                                    >
                                        Акций
                                    </NavLink>
                                    <NavLink
                                        className={style.NavBar}
                                        to={DELIVERY_ROUTE}
                                    >
                                        Доставка и оплата
                                    </NavLink>
                                </div>

                            </Nav>
                        </Col>
                        <Col md={4}>
                            <Nav>
                                <div>
                                    <NavLink
                                        to={SHOP_ROUTE}><Image src={img}></Image>
                                    </NavLink>
                                </div>
                            </Nav>
                        </Col>
                        <Nav>
                            <div>
                                <NavLink
                                    className={style.icons}
                                    to={FAVORITES_ROUTE}>
                                    <Image
                                        className={style.NavBarImages}
                                        src={favorites}>
                                    </Image>
                                    <div
                                        className={style.NavBarFavoritCount} >{favorit.length}</div>
                                </NavLink>
                                {isAuth ?
                                    <Nav>
                                        <NavLink className={style.icons} to={ADMIN_ROUTE}>Админ панель</NavLink>
                                        <NavLink
                                            className={style.icons}
                                            onClick={() => exitflag()}
                                            to={SHOP_ROUTE}>Выйти</NavLink>
                                    </Nav>
                                    :
                                    <NavLink
                                        className={style.icons}
                                        onClick={() => flag()}
                                        to={LOGIN_ROUTE}><Image src={user}></Image></NavLink>
                                }

                                <NavLink
                                    className={style.icons}
                                    to={BASKET_ROUTE}>
                                    <Image className={style.NavBarImages} src={bascer}></Image>
                                    <div className={style.NavBarBasketCount} >{basket.length}</div>
                                </NavLink>
                            </div>
                        </Nav>
                    </Container>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
