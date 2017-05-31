import React from 'react';
import filters from '../constants';

const ToggleButtons = ({
    onRemoveClick,
    onFilterClick,
    currentFilter
}) => {
    return (
        <div className="buttons">
            <button 
            disabled={currentFilter === filters.SHOW_ALL}
            className="filterButton"
            onClick={() => onFilterClick(filters.SHOW_ALL)}
            >
            Show all
            </button>
            <button
            disabled={currentFilter === filters.SHOW_ACTIVE}
            className="filterButton" 
            onClick={() => onFilterClick(filters.SHOW_ACTIVE)}
            >
            Show active
            </button>
            <button 
            disabled={currentFilter === filters.SHOW_DONE}
            className="filterButton" 
            onClick={() => onFilterClick(filters.SHOW_DONE)}
            >
            Show done
            </button>
            <button className="removeDone"
            onClick={onRemoveClick}
            >
            Remove done
            </button>
        </div>
    )
}


export default ToggleButtons;

