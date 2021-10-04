import React, { useContext, useEffect } from 'react';
import { Context } from '../Context.js';
import PageItem from '../Components/PageItem.js';
import Spinner from '../Components/Spinner.js';

const Genres = () => {
    const { genresData, fetchDataList } = useContext(Context);

    useEffect(() => {
        // eslint-disable-next-line
        fetchDataList('genres', 1);
    }, [])

    return (
        <div className='Page col'>
            <div className='Page__list row'>
                {
                    genresData.length > 0 ?
                    genresData.map((curr, index) => 
                        <PageItem
                            key={index}
                            type='genres'
                            data={curr}
                        />
                    ) :
                    <Spinner/>
                }
            </div>
        </div>
    )
}

export default Genres;