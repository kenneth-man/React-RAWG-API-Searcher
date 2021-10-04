import React, { useContext } from 'react';
import { Context } from '../Context';
import { Link } from 'react-router-dom';
import crossIcon from '../Res/icons/close.svg';

const PageItem = ({ type, data, onFavouritesScreen = false }) => {
    const { setPageItemData, favouritesData, setFavouritesData } = useContext(Context);

    const pageItemOnClick = () => {
        onFavouritesScreen ? 
        setFavouritesData(favouritesData.filter(curr => curr.data.id !== data.id)) :
        setPageItemData({type, data});
    }

    return (
        <Link to={`/PageDetails/${data.name}`} exact='true' className='link-clear' onClick={pageItemOnClick}>
            <div className={onFavouritesScreen ? 'Page__item Page__item--favourites col' : 'Page__item col'} style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${data.image_background ? data.image_background : data.background_image})`}}>
                <h1>{data.name}</h1>
                <h2>{data.games_count ? `${data.games_count} Games` : data.genres.map(curr => curr.name).join(', ')}</h2>

                {
                    onFavouritesScreen ?
                    <div className='Page__item--favourites-modal row'>
                        <img src={crossIcon} alt='cross-icon'/>

                        Remove from favourites?
                    </div> :
                    null
                }
            </div>
        </Link>
    )
}

export default PageItem;