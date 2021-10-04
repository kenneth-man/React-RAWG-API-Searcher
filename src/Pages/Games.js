import React, { useContext, useEffect } from 'react';
import { Context } from '../Context.js';
import PageItem from '../Components/PageItem.js';
import PaginationBar from '../Components/PaginationBar.js';
import Spinner from '../Components/Spinner.js';

const Games = () => {
    const { gamesData, fetchDataList } = useContext(Context);

    useEffect(() => {
        // eslint-disable-next-line
        fetchDataList('games', 1);
    }, [])

    return (
        <div className='Page col'>
            <div className='Page__list row'>
                {
                    gamesData.length > 0 ?
                    gamesData.map((curr, index) => 
                        <PageItem
                            key={index}
                            type='games'
                            data={curr}
                        />
                    ) :
                    <Spinner/>
                }
            </div>
            
            <div className='Page__section-small center'>
                <PaginationBar searchType='games' searchData={gamesData}/>
            </div>
        </div>
    )
}

export default Games;