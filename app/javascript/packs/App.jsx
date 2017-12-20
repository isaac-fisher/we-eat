import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import $ from 'jquery'
import RestaurantContent from './components/restaurantContent'
import TopBar from './components/topBar'

class RestaurantViewPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {searchText: '',
                    filterCuisines: '',
                    filterSpeed: '',
                    filterRating: '',
                    restData: []
        }

        // this.handleFilterChange = this.handleFilterChange.bind(this)
        this.handleSearchChange = this.handleSearchChange.bind(this);
    }

    componentDidMount(){
        $.get( "/restaurants/", data => {
             this.setState({restData: data});
        });
    }

    handleSearchChange(searchText) {
        this.setState({searchText: searchText})
    }

    // handleFilterChange(filterText) {
    //     this.setState({filterText: filterText})
    // }

    render() {
        return (
            <div className="rest_page">
                <div className="header">
                </div>
                <TopBar
                    searchText={this.state.searchText}
                    // filterCuisines={this.state.filterCuisines}
                    // filterSpeed={this.state.filterSpeed}
                    // filterRating={this.state.filterRating}
                    // handleFilterChange={this.handleFilterChange}
                    handleSearchChange={this.handleSearchChange}
                />
                <RestaurantContent
                    searchText={this.state.searchText}
                    restData={this.state.restData}
                />
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