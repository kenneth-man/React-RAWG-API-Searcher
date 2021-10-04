import React, { useContext, useEffect } from 'react';
import { Context } from '../Context.js';
import PageItem from '../Components/PageItem.js';
import PaginationBar from '../Components/PaginationBar.js';
import Spinner from '../Components/Spinner.js';

const Platforms = () => {
    const { platformsData, fetchDataList } = useContext(Context);

    useEffect(() => {
        // eslint-disable-next-line
        fetchDataList('platforms', 1);
    }, [])

    return (
        <div className='Page col'>
            <div className='Page__list row'>
                {
                    platformsData.length > 0 ?
                    platformsData.map((curr, index) => 
                        <PageItem
                            key={index}
                            type='platforms'
                            data={curr}
                        />
                    ) :
                    <Spinner/>
                }
            </div>
            
            <div className='Page__section-small center'>
                <PaginationBar searchType='platforms' searchData={platformsData}/>
            </div>
        </div>
    )
}

export default Platforms;