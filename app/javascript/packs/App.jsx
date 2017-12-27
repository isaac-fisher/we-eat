import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import $ from 'jquery'
import RestaurantContainer from './components/restaurantContainer'
import TopBar from './components/topBar'
import Header from './components/Header'
import ReviewPopup from './components/ReviewPopup'

class RestaurantViewPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {searchText: '',
                    filters: {cuisine:'',maxSpeed:0, maxRating:''},
                    restData: [],
                    cuisineData: [],
                    showReviewPopup: ''
        }

        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.togglePopup = this.togglePopup.bind(this);
    }

    componentDidMount(){
        $.get( "/restaurants/", data => {
             this.setState({restData: data});
        });
        $.get( "/cuisines/", data => {
            this.setState({cuisineData: data});
        });
    }

    handleSearchChange(searchText) {
        this.setState({searchText: searchText})
    }

    handleFilterChange(filters) {
        this.setState({filters: filters})
    }

    togglePopup(restaurantToShow) {
        this.setState({
            showReviewPopup: restaurantToShow
        });
    }

    render() {
        let blurPage = this.state.showReviewPopup ? 'blur(10px)' : '';
        return (
            <div>
                <div className="rest_page" style={{filter:blurPage}}>
                    <Header/>
                    <TopBar
                        searchText={this.state.searchText}
                        filters={this.state.filters}
                        handleFilterChange={this.handleFilterChange}
                        handleSearchChange={this.handleSearchChange}
                        cuisineData={this.state.cuisineData}

                    />
                    <RestaurantContainer
                        searchText={this.state.searchText}
                        filters={this.state.filters}
                        restData={this.state.restData}
                        cuisineData={this.state.cuisineData}
                        showPopup={this.togglePopup}
                    />
                </div>
                {this.state.showReviewPopup ?
                    <ReviewPopup
                        showPopup={this.togglePopup}
                        show={this.state.showReviewPopup}
                    />
                    : null }
            </div>
        );
    }
}

document.addEventListener('DOMContentLoaded', () => {

    ReactDOM.render(
        <RestaurantViewPage />,
    document.body.appendChild(document.createElement('container')),
  )
})