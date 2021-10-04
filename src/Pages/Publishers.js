import React, { useContext, useEffect } from 'react';
import { Context } from '../Context.js';
import PageItem from '../Components/PageItem.js';
import PaginationBar from '../Components/PaginationBar.js';
import Spinner from '../Components/Spinner.js';

const Publishers = () => {
    const { publishersData, fetchDataList } = useContext(Context);

    useEffect(() => {
        // eslint-disable-next-line
        fetchDataList('publishers', 1);
    }, [])

    return (
        <div className='Page col'>
            <div className='Page__list row'>
                {
                    publishersData.length > 0 ?
                    publishersData.map((curr, index) => 
                        <PageItem
                            key={index}
                            type='publishers'
                            data={curr}
                        />
                    ) :
                    <Spinner/>
                }
            </div>
            
            <div className='Page__section-small center'>
                <PaginationBar searchType='publishers' searchData={publishersData}/>
            </div>
        </div>
    )
}

export default Publishers;