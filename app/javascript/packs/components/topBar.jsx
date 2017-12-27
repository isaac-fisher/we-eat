import React from 'react'
import ReactDOM from 'react-dom'



class TopBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleCuisinesFilterChange = this.handleCuisinesFilterChange.bind(this);
        this.handleRatingsFilterChange = this.handleRatingsFilterChange.bind(this);
        this.handleSpeedFilterChange = this.handleSpeedFilterChange.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
    }

    handleCuisinesFilterChange(e) {
        let changedFilters = this.props.filters;
        changedFilters.cuisine = e.target.value;
        this.props.handleFilterChange(changedFilters);
    }

    handleRatingsFilterChange(e) {
        let changedFilters = this.props.filters;
        changedFilters.maxRating = e.target.value;
        this.props.handleFilterChange(changedFilters);
    }

    handleSpeedFilterChange(e) {
        let changedFilters = this.props.filters;
        changedFilters.maxSpeed = e.target.value;
        this.props.handleFilterChange(changedFilters);
    }

    handleSearchChange(e) {
        this.props.handleSearchChange(e.target.value);
    }

    render() {
        let cuisines = [];
        cuisines.push(<option value='' key='choose'>Choose Cuisine:</option>);
        this.props.cuisineData.forEach((cuisine) =>
        {
            cuisines.push(<option value={cuisine.id} key={cuisine.id}>{cuisine.name}</option>);
        });

        return (
            <form className='filter_holder'>
                <div className='filter'><input
                    type="text"
                    placeholder="Search By Name"
                    value={this.props.searchText}
                    onChange={this.handleSearchChange}
                /></div>
                <div className='filter'><select onChange={this.handleCuisinesFilterChange} value={this.props.filters.cuisine || ''}>
                    {cuisines}
                </select></div>
                <div className='filter'><p>Delivery-Time: {this.props.filters.maxSpeed || 'max'}</p>
                <input
                    type='range' min='0' max='300' defaultValue='300' step='10'
                    className='Speed'
                    onChange={this.handleSpeedFilterChange}
                /></div>
                <div className='filter'><fieldset className="star-check" onChange={this.handleRatingsFilterChange}>
                    <input type="radio" className='radiostar' id="star3" name="rating" value="3" /><label className = "radiolabel" htmlFor="star3" />
                    <input type="radio" className='radiostar' id="star2" name="rating" value="2" /><label className = "radiolabel" htmlFor="star2" />
                    <input type="radio" className='radiostar' id="star1" name="rating" value="1.0" /><label className = "radiolabel" htmlFor="star1" />
                </fieldset></div>
            </form>
        );
    }
}


export default TopBar;