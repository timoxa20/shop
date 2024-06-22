import React from 'react'
import { Container, Form, Card, Button, Col } from 'react-bootstrap'
import { NavLink, useLocation } from 'react-router-dom'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../const'

const Auth = () => {
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE
  console.log(isLogin)
  return (
    <Container
      className='d-flex justify-content-center align-items-center'
      style={{ height: window.innerHeight - 54 }}
    >

      <Card
        className='p-5'
        style={{ width: 600, }}>

        <h2
          className='m-auto'
        >
          {isLogin ? 'Авторизация' : 'Регистрация'}</h2>
        <Form
          className='d-flex flex-column'
        >
          <Form.Control
            className='mt-3'
            placeholder='Введите email...'
          />
          <Form.Control
          type='password'
            className='mt-3'
            placeholder='Введите пароль...'
          />
          <Col className='d-flex justify-content-between mt-3'>
            {isLogin ?
              <div>
                Нет аккаунта <NavLink to={REGISTRATION_ROUTE} >Зарегистрируйтесь</NavLink>
              </div>
              : 
              <div>
                Есть аккаунт <NavLink to={LOGIN_ROUTE} >Войти</NavLink>
              </div>
              }

            <Button
              variant="outline-primary"
            >
              {isLogin ? 'Войти' : 'Зарегистрируйтесь'}</Button>
          </Col>
        </Form>
      </Card>
    </Container>
  )
}

export default Auth
