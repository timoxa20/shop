import React from 'react'
import { navRouts } from '../routs'
import { Row, Col, Card } from 'react-bootstrap'
import { Route, Routes, BrowserRouter, Router, NavLink } from 'react-router-dom'
import NavBarIconsCars from './NavBarIconsCars'
import style from '../style/NavBarIconsCard.module.css'


const NavBarIcons = () => {
    return (
        <div className='d-flex flex-wrap'>
            {navRouts.map(({ path, name, img }) =>
                <Col
                className={style.Card}
                md={4}>
                    <Card>
                        <NavBarIconsCars key={path} path={path} name={name} img={<img src={img}  alt={name} />} />
                    </Card>
                </Col>
            )}
        </div>


    )
}

export default NavBarIcons
