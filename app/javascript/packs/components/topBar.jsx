import React from 'react'
import ReactDOM from 'react-dom'


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


export default TopBar;