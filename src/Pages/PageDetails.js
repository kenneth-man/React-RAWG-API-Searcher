import React, { useContext } from 'react';
import { Context } from '../Context';
import Spinner from '../Components/Spinner';
import AddToFavouritesBtn from '../Components/AddToFavouritesBtn';
import leftArrowIcon from '../Res/icons/caret-left.svg';
import rightArrowIcon from '../Res/icons/caret-right.svg';

const PageDetails = () => {
    const { pageItemData, setPageItemData, developersData, gamesData, genresData, platformsData, publishersData } = useContext(Context);

    const replaceAllHtml = (string) => {
        return string.replaceAll('<p>','')
            .replaceAll('</p>', '')
            .replaceAll('<h1>','')
            .replaceAll('</h1>', '')
            .replaceAll('<h3>','')
            .replaceAll('</h3>', '')
            .replaceAll('<br />', '')
            .replaceAll('&#39;', "'") 
    }

    const navigationBtnOnClick = (direction) => {
        const allDataTypes = ['developers', 'games', 'genres', 'platforms', 'publishers'];
        const allData = [developersData, gamesData, genresData, platformsData, publishersData];
        let parentData;
        let pageItemDataIndex;

        allDataTypes.forEach(curr => {
            if(pageItemData.type === curr) {
                parentData = allData[allDataTypes.indexOf(curr)];
                pageItemDataIndex = parentData.findIndex(curr => curr.id === pageItemData.data.id);
            } 
        })

        direction === 'previous' ? 
        (pageItemDataIndex === 0 ? alert('This is the first item on the page!') : setPageItemData({type: pageItemData.type, data: parentData[pageItemDataIndex - 1]})) :
        (pageItemDataIndex === pageItemData.data.length - 1 ? alert('This is the last item on the page!') : setPageItemData({type: pageItemData.type, data: parentData[pageItemDataIndex + 1]}));
    }

    return (
        <div className='Page Page__details col'>
            {
                pageItemData ?
                (pageItemData.type !== 'games' ?
                <div className='Page__section-large col' style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,1)), url(${pageItemData.data.image_background})`}}>
                    <h1><span className='bold'>{pageItemData.data.name}</span></h1>
                    <h1>ID - #{pageItemData.data.id}</h1>
                    <h1>{pageItemData.data.games_count} games found in Rawg database</h1>
                    <h2 style={{width: '75%'}}>{replaceAllHtml(pageItemData.data.description)}</h2>
                    <AddToFavouritesBtn/>
                </div> :
                <div className='Page__section-large col' style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,1)), url(${pageItemData.data.background_image})`}}>
                    <div className='Page__section-large col'>
                        <h1><span className='bold'>{pageItemData.data.name}</span></h1>
                        <h1><span className='bold'>ID</span> - #{pageItemData.data.id}</h1>
                        <h1 style={{width: '75%'}}><span className='bold'>Platforms</span> - {pageItemData.data.platforms.map(curr => curr.platform.name).join(', ')}</h1>
                        <h1><span className='bold'>Genres</span> - {pageItemData.data.genres.map(curr => curr.name).join(', ')}</h1>
                        <h1><span className='bold'>Developed by</span> - {pageItemData.data.developers.map(curr => curr.name).join(', ')}</h1>
                    </div>
                    
                    <div className='Page__section-large col'>
                        <h1>
                            Score of &nbsp; 
                            <span className={`Page__details-score bold ${pageItemData.data.metacritic >= 80 ? 'green' : (pageItemData.data.metacritic >= 40 ? 'blue' : 'red')}`}>
                                {pageItemData.data.metacritic}
                            </span> 
                            &nbsp; on Metacritic
                        </h1>
                        <h2 style={{width: '75%'}}>{replaceAllHtml(pageItemData.data.description)}</h2>
                        <AddToFavouritesBtn/>
                    </div>
                </div>
                ) :
                <Spinner/>
            }

            <button className='navigation__btn btn-clear center' id='previous' onClick={e => navigationBtnOnClick(e.currentTarget.id)}>
                <img src={leftArrowIcon} alt='left-arrow'/>
            </button>

            <button className='navigation__btn btn-clear center' id='next' onClick={e => navigationBtnOnClick(e.currentTarget.id)}>
                <img src={rightArrowIcon} alt='right-arrow'/>
            </button>
        </div>
    )
}

export default PageDetails;