import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'



const Review = (props) =>
{
    return(<p>{JSON.stringify(props.reviewData)}</p>);



};




class ReviewPopup extends React.Component {

    constructor(props) {
        super(props)
        this.state = {reviewsData: []};
    }

    componentDidMount() {
        $.get('/reviews?restaurant=' + this.props.show, data => {
            this.setState({reviewsData: data});
        });
    }

    render() {
        let reviews = [];
        this.state.reviewsData.forEach(review => {
            reviews.push(<Review reviewData={review} key={review.id}/>);
        });
        return (
            <div className='popupReview' onClick={() => this.props.showPopup('')}>
                <div className='popupReview_inner'>
                    <a className='close' onClick={() => this.props.showPopup('')}/>
                    {reviews}
                </div>
            </div>
        );
    }
}



export default ReviewPopup;