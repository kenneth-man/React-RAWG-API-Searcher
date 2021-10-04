import React from 'react';
import Banner from '../Components/Banner';
import bannerImage from '../Res/Images/rawg-banner2.png'

const Home = () => {
    return (
        <div className='Page col'>
            <div className='Page__section col'>
                <h1>Explore RAWG Video Games Database API</h1>
                <h2>RAWG is the largest video game database and game discovery service. And they are gladly sharing 500,000+ games, search, and machine learning recommendations with the world</h2>
                <div className='row' style={{width: '25%'}}>
                    <a href='https://api.rawg.io/docs/'>Read Documentation</a>
                    <a href='https://rawg.io/@kwkm/apikey' style={{backgroundColor: 'rgb(37,174,244)', color: 'white'}}>Get API Key</a>
                </div>
            </div>

            <Banner image={bannerImage}/>

            <div className='Page__section col'>
                <h1>2021 © RAWG, Behind The Games</h1>

                <h2>Comprehensive video game data: descriptions, genres, release dates, links to stores, ESRB-ratings, average playtime, gameplay videos, Metacritic ratings, official websites, system requirements, linked YouTube and Twitch videos, DLCs and franchises.</h2>
                
                <h2>Free for commercial use for startups and hobby projects with not more than 100,000 monthly active users or 500,000 page views per month. If your project is larger than that, email us at api@rawg.io for commercial terms.</h2>
            </div>
        </div>
    )
}

export default Home;