import React from 'react'
import ReactDOM from 'react-dom'



class Header extends React.Component {
    render(){
        return(
            <div className="header">
                <video loop muted autoPlay poster="" className="video">
                    <source src="https://ak3.picdn.net/shutterstock/videos/17873323/preview/stock-footage-young-couple-talking-eating-and-sharing-food-in-cafe-in-the-city.mp4" type="video/mp4"/>
                </video>
                <h1>WeAvoid</h1>
                <h3>Digi's Where Not-to-go Guide</h3>
            </div>
        );
    }
}


export default Header;