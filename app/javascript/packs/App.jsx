import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import $ from 'jquery'
import RestaurantContent from './components/restaurantContainer'
import TopBar from './components/topBar'
import Header from './components/Header'

class RestaurantViewPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {searchText: '',
                    filters: {cuisine:'',maxSpeed:0, maxRating:''},
                    restData: [],
                    cuisineData: [],
        }

        this.handleFilterChange = this.handleFilterChange.bind(this)
        this.handleSearchChange = this.handleSearchChange.bind(this);
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

    render() {
        return (
            <div className="rest_page">
                <Header/>
                <TopBar
                    searchText={this.state.searchText}
                    filters={this.state.filters}
                    handleFilterChange={this.handleFilterChange}
                    handleSearchChange={this.handleSearchChange}
                    cuisineData={this.state.cuisineData}

                />
                <RestaurantContent
                    searchText={this.state.searchText}
                    filters={this.state.filters}
                    restData={this.state.restData}
                    cuisineData={this.state.cuisineData}
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