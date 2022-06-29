import React from 'react'
import {langs} from '../../../langs'
import Gdpr from '../../../components/gdpr/gdpr'

const Index = () => {
    return <Gdpr text={langs.gdpr.en} url='en' />
}

export default Index
