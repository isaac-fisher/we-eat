import React from 'react'
import ReactDOM from 'react-dom'
import RestaurantRow from './restaurantComponent'
import AddRestaurantRow from './restaurantComponentAdd'

import Map from './map'

const RestaurantContainer = (props) => {
    console.log(JSON.stringify(props.cuisineData)) //TODO: REMOVE
    const rows = [];
    let searched = props.searchText.trim().toLowerCase()
    props.restData.filter(rest => !searched || rest.name.toLowerCase().includes(searched))
        .forEach((restaurant) => {
            let logo = props.cuisineData.find(c => c.id == restaurant.cuisine_id)
            rows.push(
                <RestaurantRow
                    restaurant={restaurant}
                    key={restaurant.id}
                    logo={(logo && logo.logo) || 'f'} //default food
                />
            );
    });
    rows.push (<AddRestaurantRow key='ADDNEW' />);

    return (
        <div className='content_holder'>
            <div className="rest_holder">
                {rows}
            </div>
            <Map/>
        </div>
    );
}

export default RestaurantContainer;