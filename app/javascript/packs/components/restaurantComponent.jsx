import React from 'react'
import ReactDOM from 'react-dom'


const Stars = (props) =>
{
    if (!props.rating) {
        return (<div className="stars-none"/>);
    }

    let ratingRounded = Math.round(props.rating * 2) /2 ;
    let ratingPercent = (ratingRounded*100) / props.starmax;
    return(<div className="stars-outer">
        <div className="stars-inner" style={{width: ratingPercent + '%'}}/>
    </div>);
};

function ShowSpeedTime(delivery_time) {
    let hours = Math.floor(delivery_time / 60);
    let minutes = (delivery_time % 60);
    return hours + ':' + (minutes > 10 ? minutes : '0'+ minutes);
}

class RestaurantRow extends React.Component {
    render() {
        const restaurant = this.props.restaurant;
        let showSpeed = restaurant.delivery_time ? ShowSpeedTime(restaurant.delivery_time) : ' - ';


        return (
            <div className="rest_row" onClick={() => this.props.showPopup(restaurant.id)}>
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
                    <div className='rest_inner_data'>
                        <p>{restaurant.address}</p>
                        <q>{showSpeed}</q>
                    </div>
                </div>
            </div>
        );
    }
}

export default RestaurantRow;
