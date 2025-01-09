import React from 'react'
import { useSelector } from 'react-redux'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import style from '../style/NavBar.module.scss'

const TypeBar = () => {

    const device = useSelector(state => state.device)
    console.log(device)

    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            className='mt-4'
            bg="light"
            variant="light">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className='justify-content-around' id="responsive-navbar-nav">
                <Nav className=" align-items-center ">
                    {device.map(({id, name, to}) => 
                    <NavLink key={id} className={style.NavBar} to={to}>{name}</NavLink>
                    )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default TypeBar
