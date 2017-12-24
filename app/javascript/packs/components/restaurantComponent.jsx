import React from 'react'
import ReactDOM from 'react-dom'


const Stars = (props) =>
{
    if (!props.rating) {
        return (<div className="stars-none"/>);
    }

    let ratingRounded = Math.round(props.rating * 2) /2 ;
    let ratingPercent = (props.rating*100) / props.starmax;
    return(<div className="stars-outer">
        <div className="stars-inner" style={{width: ratingPercent + '%'}}/>
    </div>);
};

class RestaurantRow extends React.Component {
    render() {
        const restaurant = this.props.restaurant;


        return (
            <div className="rest_row">
                <p className='logo'>{this.props.logo}</p>
                <div className='rest_data'>
                    <div className='rest_inner_data'>
                        <h2>{restaurant.name}</h2>
                        <img className={restaurant.card_acceptance ? 'card-accept' : 'card-reject'}/>
                        <Stars
                            starmax={3}
                            rating={restaurant.rating}
                        />
                    </div>
                    <p>{restaurant.address}</p>
                </div>
            </div>
        );
    }
}

export default RestaurantRow;
