import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import { useState } from 'react'
import PopulSlide from './Slider/PopulSlide'
import SlideMotors from './Slider/SlideMotors'
import SlideTires from './Slider/SlideTires'
import SlideElectronics from './Slider/SlideElectronics'
import SlideTools from './Slider/SlideTools'
import SlideAccessories from './Slider/SlideAccessories'
import Title from './UI/Title/Title'


const Tabsk = () => {

    const [key, setKey] = useState('home');

    return (
        <div>
            <div><Title title='Популярные товары' /></div>
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
            >
                <Tab eventKey='home' title='запчасти'>
                    <PopulSlide />
                </Tab>
                <Tab eventKey='motor' title='моторы'>
                    <SlideMotors />
                </Tab>
                <Tab eventKey='sin' title='шины'>
                    <SlideTires />
                </Tab>
                <Tab eventKey='elektro' title='электроника'>
                    <SlideElectronics />
                </Tab>
                <Tab eventKey='instrument' title='инструменты'>
                    <SlideTools />
                </Tab>
                <Tab eventKey='akse' title='аксессуары'>
                    <SlideAccessories />
                </Tab>
            </Tabs>

        </div>

    )
}

export default Tabsk
