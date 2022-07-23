import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'

const Tabsk = () => {
    return (
        <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
        >
            <Tab eventKey="home" title="Home">

            </Tab>
        </Tabs>
    )
}

export default Tabsk
