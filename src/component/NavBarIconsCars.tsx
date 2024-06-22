import React from 'react'
import { Col } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import style from '../style/NavBarIconsCard.module.css'

const NavBarIconsCars = ({ path, name, img }) => {
    return (
        <NavLink to={path}>
            <Col
            className={style.Nav}
            md={12}>
                <Col md={6}>
                    <div className={style.NavText} >{name}</div>
                    <div className={style.NavSubtext} >Подробнее</div>
                </Col>
                <Col md={6}>
                    {img}
                </Col>
            </Col>
        </NavLink>
    )
}

export default NavBarIconsCars
