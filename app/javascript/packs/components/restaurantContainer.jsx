import React from 'react'
import ReactDOM from 'react-dom'
import RestaurantRow from './restaurantComponent'
import AddRestaurantRow from './restaurantComponentAdd'

import RestMap from './RestMap'


function applyFilters(restaurant,searched) {
    return !searched || restaurant.name.toLowerCase().includes(searched);
}

function filterByCuisine(rest, cuisine) {
    return !cuisine || rest.cuisine_id == cuisine;
}

function filterBySpeed(rest, maxSpeed) {
    return !maxSpeed || !rest.delivery_time || rest.delivery_time == 0 || maxSpeed >= rest.delivery_time;
}

function filterByRating(rest, maxRating) {
    return !maxRating || !rest.rating || parseFloat(maxRating) >= parseFloat(rest.rating);
}

function filterBySearchedText(rest, searchText) {
    let searched = searchText.trim().toLowerCase()
    return !searchText || rest.name.toLowerCase().includes(searched)
}

const RestaurantContainer = (props) => {
    const rows = [];
    //TODO use [filter1,filter2..].map
    props.restData.filter(rest => {
            return filterByCuisine(rest, props.filters.cuisine) &&
                   filterBySpeed(rest, props.filters.maxSpeed) &&
                   filterByRating(rest, props.filters.maxRating) &&
                   filterBySearchedText(rest, props.searchText);
        }).forEach((restaurant) => {
            let logo = props.cuisineData.find(c => c.id === restaurant.cuisine_id)
            rows.push(
                <RestaurantRow
                    restaurant={restaurant}
                    key={restaurant.id}
                    logo={(logo && logo.logo) || 'f'} //default food
                    showPopup={props.showPopup}
                />
            );
    });
    rows.push (<AddRestaurantRow key='ADDNEW' />);

    return (
        <div className='content_holder'>
            <div className="rest_holder">
                {rows}
            </div>
            <RestMap/>
        </div>
    );
}

export default RestaurantContainer;