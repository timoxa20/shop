import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import FormFooter from '../UI/Form/FormFooter'
import TitleFooter from '../UI/TitleFooter/TitleFooter'
import style from '../../component/footer/Footer.module.css'
import { footerRoutes } from '../../routs'
import { NavLink } from 'react-router-dom'

const footer = () => {




    return (
        <div className={style.Footer}>
            <Container>
                <Row>
                    <Col md={3}>
                        <TitleFooter title={'Подпишитесь на нашу рассылку и узнавайте о акция быстрее'} />
                        <FormFooter />
                    </Col>
                    <Col md={3} className={style.FooterInfo}>
                        <TitleFooter title={'Информация'} />
                        {footerRoutes.map(({ path, name }) =>
                            <NavLink key={name} to={path}>
                                <Col md={12}>
                                    {name}
                                </Col>
                            </NavLink>
                        )}
                    </Col>
                    <Col md={3} className={style.FooterInfo}>
                        <TitleFooter title={'Интернет-магазин'} />
                        {footerRoutes.map(({ path, name }) =>
                            <NavLink key={name} to={path}>
                                <Col md={12}>
                                    {name}
                                </Col>
                            </NavLink>
                        )}
                    </Col>
                    <Col md={3}>
                        <TitleFooter title={'Социальные сети'} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default footer
