import React, { createContext, useState } from 'react';

export const Context = createContext();

const ContextProvider = ({ children }) => {
    const [developersData, setDevelopersData] = useState([]);
    const [gamesData, setGamesData] = useState([]);
    const [genresData, setGenresData] = useState([]);
    const [platformsData, setPlatformsData] = useState([]);
    const [publishersData, setPublishersData] = useState([]);
    const [pageItemData, setPageItemData] = useState(null);
    const [favouritesData, setFavouritesData] = useState([]);
    const [searchData, setSearchData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const key = 'unique_user_key';
     
    const fetchDataList = async (searchType, page) => {
        try {
            const responseList = await fetch(`https://rawg.io/api/${searchType}?key=${key}&page=${page}&page_size=30`);
            const dataList = await responseList.json();

            //mapping with an asynchronous function - https://stackoverflow.com/questions/42489918/async-await-inside-arraymap
            const dataArray = await Promise.all(dataList.results.map( async (curr) => fetchSingleData(searchType, curr.id) ));

            if(searchType === 'developers') setDevelopersData(dataArray);

            if(searchType === 'games') setGamesData(dataArray);

            if(searchType === 'genres') setGenresData(dataArray);

            if(searchType === 'platforms') setPlatformsData(dataArray);

            if(searchType === 'publishers') setPublishersData(dataArray);
        } catch(error){
            console.log(error);
        }
    }

    const fetchSearchGamesDataList = async (searchString, page) => {
        try {
            const responseList = await fetch(`https://rawg.io/api/games?key=${key}&search=${searchString}&page=${page}&page_size=30`);
            const dataList = await responseList.json();

            const dataArray = await Promise.all(dataList.results.map( async (curr) => fetchSingleData('games', curr.id) ));

            setSearchData(dataArray);
        } catch(error){
            console.log(error);
        }
    }

    const fetchSingleData = async (searchType, id) => {
        try {
            const responseObj = await fetch(`https://rawg.io/api/${searchType}/${id}?key=${key}`);
            const dataObj = await responseObj.json();
            return dataObj;
        } catch(error){
            console.log(error);
        }
    }

    return (
        <Context.Provider value={{ developersData, gamesData, genresData, platformsData, publishersData, pageItemData, favouritesData, searchData, searchQuery,
                                    setPageItemData, setFavouritesData, setSearchData, setSearchQuery, fetchDataList, fetchSearchGamesDataList }}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;