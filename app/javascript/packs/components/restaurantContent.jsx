import React from 'react'
import ReactDOM from 'react-dom'


class RestaurantRow extends React.Component {
    render() {
        const restaurant = this.props.restaurant;
        const name = restaurant.name

        return (
            <div className="rest_row">
                <p>{name} <sub>{restaurant.address}</sub> </p>
            </div>
        );
    }
}

const RestaurantContent = (props) => {
    // console.log(JSON.stringify(props.restData)) //TODO: REMOVE
    const rows = [];
    let searched = props.searchText.trim().toLowerCase()
    props.restData.filter(rest => !searched || rest.name.toLowerCase().includes(searched))
        .forEach((restaurant) => {
            rows.push(
                <RestaurantRow
                    restaurant={restaurant}
                    key={restaurant.id}
                />
            );
    });

    return (
        <div className='content_holder'>
            <div className="rest_holder">
                {rows}
            </div>
            <div className='map_holder'></div>
        </div>
    );
}

export default RestaurantContent;