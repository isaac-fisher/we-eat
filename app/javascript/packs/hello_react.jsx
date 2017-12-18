import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import $ from 'jquery'

class RestaurantRow extends React.Component {
    render() {
        const restaurant = this.props.restaurant;
        const name = restaurant.name

        return (
            <p>
                <span style={{color: 'red'}}>{name} </span>
                <sub>{restaurant.address}</sub>
            </p>
        );
    }
}

class RestTable extends React.Component {
    render() {

        console.log(JSON.stringify(this.props.restData)) //TODO: REMOVE
        const rows = [];
        let searched = this.props.searchText.trim().toLowerCase()
        this.props.restData.filter(rest => !searched || rest.name.toLowerCase().includes(searched)).forEach((restaurant) => {
            rows.push(
                <RestaurantRow
                    restaurant={restaurant}
                    key={restaurant.name} />
            );});

        return (
            <div>
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
            <form>
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
            <div>
                <TopBar
                    searchText={this.state.searchText}
                    // filterCuisines={this.state.filterCuisines}
                    // filterSpeed={this.state.filterSpeed}
                    // filterRating={this.state.filterRating}
                    // handleFilterChange={this.handleFilterChange}
                    handleSearchChange={this.handleSearchChange}
                />
                <RestTable
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



// const mockRestestData = [{"id":1,"name":"Moses","card_acceptance":true,"address":"mklmafer ar ef 100","delivery_time":65,"cuisine_id":1,"rating":"2.5"},
//     {"id":3,"name":"wolfesnight","card_acceptance":false,"address":"ljksndav 90","delivery_time":90,"cuisine_id":1,"rating":"3"},
//     {"id":3,"name":"Magic's burger","card_acceptance":false,"address":"rrrr 4","delivery_time":90,"cuisine_id":1,"rating":"1"}]
