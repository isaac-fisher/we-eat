import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import $ from 'jquery'

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

class RestTable extends React.Component {
    render() {

        // console.log(JSON.stringify(this.props.restData)) //TODO: REMOVE
        const rows = [];
        let searched = this.props.searchText.trim().toLowerCase()
        this.props.restData.filter(rest => !searched || rest.name.toLowerCase().includes(searched)).forEach((restaurant) => {
            rows.push(
                <RestaurantRow
                    restaurant={restaurant}
                    key={restaurant.name} />
            );});

        return (
            <div className="rest_holder">
                {rows}
            </div>
        );
    }
}

class TopBar extends React.Component {
    constructor(props) {
        super(props);
        //this.handleFilterChange = this.handleFilterChange.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
    }

    // handleFilterChange(e) {
    //     this.props.handleFilterChange(e.target.value);
    // }

    handleSearchChange(e) {
        this.props.handleSearchChange(e.target.value);
    }

    render() {
        return (
            <form className='filter_holder'>
                <input
                    type="text"
                    placeholder="Search..."
                    value={this.props.searchText}
                    onChange={this.handleSearchChange}
                />
            </form>
        );
    }
}


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
                <div className='content_holder'>
                    <RestTable
                        searchText={this.state.searchText}
                        restData={this.state.restData}
                    />
                    <div className='map_holder'></div>
                </div>
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