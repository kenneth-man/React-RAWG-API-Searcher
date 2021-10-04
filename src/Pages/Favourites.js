import React, { useContext } from 'react';
import { Context } from '../Context';
import PageItem from '../Components/PageItem';

const Favourites = () => {
    const { favouritesData } = useContext(Context);

    return (
        <div className='Page col'>
            <div className='Page__list row'>
                {
                    favouritesData.length > 0 ?
                    favouritesData.map((curr, index) =>
                        <PageItem
                            key={index}
                            type={curr.type}
                            data={curr.data}
                            onFavouritesScreen={true}
                        />
                    ) :
                    <h1 style={{margin: 'auto'}}>No items found in favourites</h1>
                }
            </div>
        </div>
    )
}

export default Favourites;