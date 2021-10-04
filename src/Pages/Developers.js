import React, { useContext, useEffect } from 'react';
import { Context } from '../Context.js';
import PageItem from '../Components/PageItem.js';
import PaginationBar from '../Components/PaginationBar.js';
import Spinner from '../Components/Spinner.js';

const Developers = () => {
    const { developersData, fetchDataList } = useContext(Context);

    useEffect(() => {
        // eslint-disable-next-line
        fetchDataList('developers', 1);
    }, [])

    return (
        <div className='Page col'>
            <div className='Page__list row'>
                {
                    developersData.length > 0 ?
                    developersData.map((curr, index) => 
                        <PageItem
                            key={index}
                            type='developers'
                            data={curr}
                        />
                    ) :
                    <Spinner/>
                }
            </div>
            
            <div className='Page__section-small center'>
                <PaginationBar searchType='developers' searchData={developersData}/>
            </div>
        </div>
    )
}

export default Developers;