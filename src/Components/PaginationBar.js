import React, { useContext, useState, useEffect, useRef } from 'react';
import { Context } from '../Context';
import leftArrowIcon from '../Res/icons/caret-left.svg';
import rightArrowIcon from '../Res/icons/caret-right.svg';

const PaginationBar = ({ searchType, searchData }) => {
    const { fetchDataList, fetchSearchGamesDataList, searchQuery } = useContext(Context);
    const [pageNumber, setPageNumber] = useState(1);
    const isComponentRendered = useRef(false);

    const paginationbarBtnOnClick = (type) => {
        //'fetchDataList' fetches 30 results per single page; if result's length is not equal to 30, must be the last page
        type === 'previous' ? 
        (pageNumber > 1 ? setPageNumber(pageNumber => pageNumber -= 1) : alert('Minimum page number reached!')) :
        (searchData.length === 30 ? setPageNumber(pageNumber => pageNumber += 1) : alert('Maximum page number reached!'));

        document.querySelector('#main-banner').scrollIntoView({ behavior: 'smooth', block: 'end' });
    }

    useEffect(() => {
        // eslint-disable-next-line
        isComponentRendered.current ? (searchType === 'search' ? fetchSearchGamesDataList(searchQuery, pageNumber) : fetchDataList(searchType, pageNumber)) : isComponentRendered.current = true;
    }, [pageNumber])

    return (
        <div className='paginationbar row'>
            <button className='paginationbar__btn row' id='previous' onClick={e => paginationbarBtnOnClick(e.currentTarget.id)}>
                <img src={leftArrowIcon} alt='left-arrow-icon'/>

                <h2>Prev</h2>
            </button>

            <h1 style={{fontWeight: '900'}}>Page {pageNumber}</h1>

            <button className='paginationbar__btn row' id='next' onClick={e => paginationbarBtnOnClick(e.currentTarget.id)}>
                <h2>Next</h2>

                <img src={rightArrowIcon} alt='right-arrow-icon'/>
            </button>
        </div>
    )
}

export default PaginationBar;