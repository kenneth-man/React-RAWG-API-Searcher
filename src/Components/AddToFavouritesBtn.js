import React, { useContext } from 'react';
import { Context } from '../Context';
import favouritesIcon from '../Res/icons/star.svg';
import tickIcon from '../Res/icons/check.svg';

const AddToFavouritesBtn = () => {
    const { pageItemData, favouritesData, setFavouritesData } = useContext(Context); 

    const addItemToFavourites = () => {
        setFavouritesData([...favouritesData, {type: pageItemData.type, data: pageItemData.data}])
    }

    const addItemToFavouritesAlert = () => {
        alert('This item has already been added to your favourites!');
    }
    
    const checkItemExistsInFavourites = () => {
        return favouritesData.find(curr => curr.data.id === pageItemData.data.id);
    }

    return (
        <button className='row' onClick={checkItemExistsInFavourites() ? addItemToFavouritesAlert : addItemToFavourites}>
            {checkItemExistsInFavourites() ? 'Added to favourites' : 'Add to favourites'}

            <img src={checkItemExistsInFavourites() ? tickIcon : favouritesIcon} alt='favourites-icon' style={{marginLeft: '5px'}}/>
        </button>
    )
}

export default AddToFavouritesBtn;