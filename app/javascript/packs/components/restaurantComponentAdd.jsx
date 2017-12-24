import React from 'react'
import ReactDOM from 'react-dom'


class AddRestaurantRow extends React.Component {
    render() {
        const restaurant = this.props.restaurant;


        return (
            <div className="rest_row_add">
                <div className='plus' />
            </div>
        );
    }
}

export default AddRestaurantRow;
