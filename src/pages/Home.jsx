import React from 'react'
import Main from '../COMPONENTS/Main'
import Row from '../COMPONENTS/Row'
import requests from '../Request'

const Home = () => {

  return (
    <>
        <Main></Main>
        <Row rowID='1' title='Up Coming' fetchUrl={requests.requestUpcoming}></Row>
        <Row rowID='2' title='Top Rated' fetchUrl={requests.requestTopRated}></Row>
        <Row rowID='3' title='Trending' fetchUrl={requests.requestTrending}></Row>
        <Row rowID='4' title='Popular' fetchUrl={requests.requestPopular}></Row>
        <Row rowID='5' title='Up Coming' fetchUrl={requests.requestUpcoming}></Row>
    </>
  )
}

export default Home