import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../Context.js';
import PageItem from '../Components/PageItem.js';
import PaginationBar from '../Components/PaginationBar.js';
import Spinner from '../Components/Spinner.js';

const Search = () => {
    const { fetchSearchGamesDataList, searchData, setSearchData, searchQuery, setSearchQuery } = useContext(Context);

    useEffect(() => {
        // eslint-disable-next-line
        searchQuery !== '' ? fetchSearchGamesDataList(searchQuery, 1) : setSearchData([]);
    },[searchQuery])

    return (
        <div className='Page col'> 
            <div className='Page__section col'>
                <h1>Search for game titles</h1>

                <input type='text' placeholder='Search for game titles...' value={searchQuery} onChange={e => setSearchQuery(e.target.value)}/>
            </div>

            <div className='Page__list row'>
                {
                    searchData.length > 0 ?
                    searchData.map((curr,index) =>
                        <PageItem
                            key={index}
                            type='games'
                            data={curr}
                        />
                    ) :
                    <h1>- No Games found -</h1>
                }
            </div>

            <div className='Page__section-small center'>
                <PaginationBar searchType='search' searchData={searchData}/>
            </div>
        </div>
    )
}

export default Search;