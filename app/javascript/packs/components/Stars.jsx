import React from 'react'
import ReactDOM from 'react-dom'

const Stars = (props) =>
{
    if (!props.rating) {
        return (<div className="stars-none"/>);
    }

    let ratingRounded = Math.round(props.rating * 2) /2 ;
    let ratingPercent = (ratingRounded*100) / props.starmax;
    return(
        <div className="stars-outer">
            <div className="stars-inner" style={{width: ratingPercent + '%'}}/>
        </div>
    );
};


export default Stars;