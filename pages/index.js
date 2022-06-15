import React from 'react'
import MainPage from '../components/main-page/main-page'
import {langs} from '../langs'

const Home = () => {
  return <>
  <MainPage text={langs.main.cz} lang='cz'/>
  </>
}

export default Home
