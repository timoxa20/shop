import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'
import { Dropdown, Menu, message, Space, Button, Input, Tabs } from 'antd';
import { Checkbox } from 'antd';

const SideBar = () => {

    const { TabPane } = Tabs;

    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };

    const handleMenuClick = (e) => {
        message.info('Click on menu item.');
        console.log('click', e);
    };

    const handleButtonClick = (e) => {
        message.info('Click on left button.');
        console.log('click left button', e);
    };

    const menu = (
        <Menu
            onClick={handleMenuClick}
            items={[
                {
                    label: '90',
                    key: '1',
                },
                {
                    label: '130',
                    key: '2',
                },
                {
                    label: '154',
                    key: '3',
                },
                {
                    label: '230',
                    key: '4',
                },
                {
                    label: '300',
                    key: '5',
                },
            ]}
        />
    );


    return (
        <Container>
            <Tabs defaultActiveKey="1" onChange={onChange}>
                <TabPane tab="ПАРАМЕТРЫ" key="1">
                    <Card
                        className='p-2'
                    >
                        <Row>
                            <Col className='d-flex flex-wrap'>
                                <Col
                                    className='mt-2'
                                    md={12}>Наличие
                                </Col>
                                <Col
                                    className='d-flex mt-2 flex-wrap'
                                    md={12}>
                                    <Col md={6}><Checkbox onChange={onChange}>В Наличие</Checkbox></Col>
                                    <Col md={6}><Checkbox onChange={onChange}>Под заказ</Checkbox></Col>
                                </Col>
                            </Col>
                            <Col
                                className='mt-4'
                                md={12}>Новинки
                            </Col>
                            <Col
                                className='d-flex mt-2 flex-wrap'
                                md={12}>
                                <Col md={4}><Checkbox onChange={onChange}>Все</Checkbox></Col>
                                <Col md={4}><Checkbox onChange={onChange}>Новинки</Checkbox></Col>
                                <Col md={4}><Checkbox onChange={onChange}>Акция</Checkbox></Col>
                            </Col>
                            <Col
                                className='mt-3'
                                md={12} >
                                <Space wrap>
                                    <Dropdown.Button onClick={handleButtonClick} overlay={menu}>
                                        Мощность, л.с.
                                    </Dropdown.Button>
                                </Space>
                            </Col>
                            <Col
                                className='mt-3'
                                md={12} >
                                <Space wrap>
                                    <Dropdown.Button onClick={handleButtonClick} overlay={menu}>
                                        Мощность двигателя, л.с.
                                    </Dropdown.Button>
                                </Space>
                            </Col>
                            <Col
                                className='mt-3'
                                md={12} >
                                <Space wrap>
                                    <Dropdown.Button onClick={handleButtonClick} overlay={menu}>
                                        Макс. скорость
                                    </Dropdown.Button>
                                </Space>
                            </Col>
                            <Col
                                className='mt-4'
                                md={12}>Бренд
                            </Col>
                            <Col
                                className='d-flex mt-2 flex-wrap'
                                md={12}>
                                <Col md={6}><Checkbox onChange={onChange}>BRP</Checkbox></Col>
                                <Col md={6}><Checkbox onChange={onChange}>Spark 2</Checkbox></Col>

                                <Col md={12}><Checkbox onChange={onChange}>Spark 3 </Checkbox></Col>
                                <Col md={12}>
                                    <Button
                                        className='align-self-star mt-2'
                                        type="link"
                                        block>
                                        Показать еще
                                    </Button>
                                </Col>

                            </Col>
                            <Col
                                className='mt-4'
                                md={12}>Модель
                            </Col>
                            <Col
                                className='d-flex mt-2 flex-wrap'
                                md={12}>
                                <Col
                                    className='mb-3'
                                    md={12}><Input placeholder="Введите модель " /></Col>
                                <Col md={6}><Checkbox onChange={onChange}>Sea-doo Spark 2</Checkbox></Col>
                                <Col md={6}><Checkbox onChange={onChange}>SeaDoo Spark 90</Checkbox></Col>
                                <Col md={6}><Checkbox onChange={onChange}>SeaDoo GTI 155</Checkbox></Col>
                                <Col md={6}><Checkbox onChange={onChange}>SeaDoo GTR 230</Checkbox></Col>
                                <Col md={12}>
                                    <Button
                                        className='align-self-star mt-2'
                                        type="link"
                                        block>
                                        Показать еще
                                    </Button>
                                </Col>
                            </Col>
                            <Col
                                className='mt-4'
                                md={12}>Акции
                            </Col>
                            <Col
                                className='mt-2'>
                                <Button
                                    className='m-1'>SALE</Button>
                                <Button
                                    className='m-1'>NEW</Button>
                                <Button
                                    className='m-1'>HIT</Button>
                                <Button
                                    className='m-1'>ДИЛЕР</Button>
                            </Col>
                            <Col
                                className='mt-4'
                                md={12}>Страны
                            </Col>
                            <Col
                                className='d-flex mt-2 flex-wrap'
                            >
                                <Col md={6}><Checkbox onChange={onChange}>Россия</Checkbox></Col>
                                <Col md={6}><Checkbox onChange={onChange}>Германия</Checkbox></Col>
                                <Col md={6}><Checkbox onChange={onChange}>Китай</Checkbox></Col>
                                <Col md={6}><Checkbox onChange={onChange}>CША</Checkbox></Col>
                            </Col>
                            <Col md={12}>
                                <Button
                                    className='align-self-star mt-2'
                                    type="link"
                                    block>
                                    Показать еще
                                </Button>
                            </Col>

                            <Col md={12}>
                                <Button
                                    className=' mt-2'
                                    style={{ background: '#F0F0F4', textAlign: 'center' }}
                                    type="link"
                                    block>
                                    ВЫБРАТЬ
                                </Button>
                            </Col>

                        </Row>
                    </Card>
                </TabPane>
                <TabPane tab="ПО МАРКЕ" key="2">
                    Content of Tab Pane 2
                </TabPane>
            </Tabs>

        </Container >
    )
}

export default SideBar
