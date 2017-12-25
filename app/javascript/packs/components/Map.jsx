import React from 'react'
import ReactDOM from 'react-dom'


class Map extends React.Component {
    render(){
        return (
        <iframe
            style={{borderTopRightRadius: '30px', boxShadow: '-3px 3 8px black', minHeight: '600px' }}
            width="850"
            frameBorder="0"
            src="https://www.google.com/maps/embed/v1/place?&q=Tel%20Aviv&zoom=13&key=AIzaSyCkiUHqV065uCy4s1koyM6xjMXFBCnnoCk"></iframe>
    );
    }
}

//AIzaSyB5ezv5cr9Qp1SVYL5o2e1A0obHRNgjC0g

export default Map;