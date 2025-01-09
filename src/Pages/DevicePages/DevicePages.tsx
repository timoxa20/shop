import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import style from './DevicePages.module.scss'
import { Tabs} from 'antd'

const { TabPane } = Tabs;

const DevicePages = () => {
  const device = [{ id: 1, deviceImg: 'https://c0.klipartz.com/pngpicture/387/541/gratis-png-moto-acuatica-thumbnail.png', oldPrice: '1 200 450', newPrice: '1 100 200', productName: 'Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic', productCode: ' 366666-2', manufacturer: 'Канада', quantity: '3', power: '112', type: 'Бензин', year: '2022' }]
  const type = [
    {id:Date.now, title: 'Производитель', description: 'Канада'},
    {id:Date.now, title: 'Количество мест, шт', description: '3'},
    {id:Date.now, title: 'Тип двигателя', description: 'Бензин'},
    {id:Date.now, title: 'Мощность, л.с.', description: '125'},
    {id:Date.now, title: 'Год выпуска', description: '2022'},
  ]
  return (
    <Container className={style.Device}>
      {device.map(item =>
        <Row>
          <Col className={style.DeviceCol} md={6}>
            <Image className={style.DeviceImg} src={item.deviceImg} />
            <div className={style.DeviceOldPrice} >{item.oldPrice}</div>
            <div className={style.DeviceNewPrice} >{item.newPrice}</div>
          </Col>
          <Col md={6}>
            <h1>{item.productName}</h1>
            <div>Код товара: {item.productCode}</div>
            <Tabs defaultActiveKey="1" >
              <TabPane tab="Характеристики" key="1">
              {type.map(item =>
                  <Row className={style.DeviceType} key={item.id}>
                    <Col md={6}>{item.title}</Col>
                    <Col md={6}>{item.description}</Col>
                  </Row>
                )}
              </TabPane>
              <TabPane tab="Наличие в магазине" key="2">
                Content of Tab Pane 2
              </TabPane>
            </Tabs>
          </Col>
        </Row>
      )}

    </Container>
  )
}

export default DevicePages
