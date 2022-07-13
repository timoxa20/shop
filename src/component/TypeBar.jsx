import React from 'react'
import { useSelector } from 'react-redux'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { ATVS_ROUTE, BOATS_ROUTE } from '../const'
import { NavLink } from 'react-router-dom'
import style from '../style/NavBar.module.css'

const TypeBar = () => {


    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            className='mt-4'
            bg="light"
            variant="light">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto align-items-center">
                    <NavLink
                        className={style.NavBar}
                        to={ATVS_ROUTE}
                    >
                        Квадроциклы
                    </NavLink>
                    <NavLink
                        className={style.NavBar}
                        to={BOATS_ROUTE}
                    >
                        Катера
                    </NavLink>
                    <NavLink
                        className={style.NavBar}
                        to={ATVS_ROUTE}
                    >
                        Квадроциклы
                    </NavLink>
                    <NavLink
                        className={style.NavBar}
                        to={BOATS_ROUTE}
                    >
                        Катера
                    </NavLink>
                    <NavLink
                        className={style.NavBar}
                        to={ATVS_ROUTE}
                    >
                        Квадроциклы
                    </NavLink>
                    <NavLink
                        className={style.NavBar}
                        to={BOATS_ROUTE}
                    >
                        Катера
                    </NavLink>
                    <NavLink
                        className={style.NavBar}
                        to={ATVS_ROUTE}
                    >
                        Квадроциклы
                    </NavLink>
                    <NavLink
                        className={style.NavBar}
                        to={BOATS_ROUTE}
                    >
                        Катера
                    </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default TypeBar
