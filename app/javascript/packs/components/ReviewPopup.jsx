import React from 'react'
import ReactDOM from 'react-dom'
import Stars from './Stars'


class AddReview extends React.Component {
    constructor(props) {
        super(props)

        this.addNewReview = this.addNewReview.bind(this)
    }

    addNewReview() {
        let reviewParams = {};

        reviewParams.restaurant_id = this.props.restaurant_id;
        reviewParams.reviewer_name = $('#reviewerName').val();
        reviewParams.comment = $('#reviewerComment').val();

        let rating = $('input[name=rating]:checked', '#reviewerRating');
        reviewParams.rating = rating ? rating.val() : null ;

        let validate = (...args) => {return args.some((obj) => obj == null || obj.trim() === '' )}
        if (validate(reviewParams.rating,reviewParams.comment,reviewParams.reviewer_name))
        {
            $('#validationError').show();
        }
        else
        {
            let reviewData = {};
            reviewData.review = reviewParams;
           $.post("/reviews", reviewData,
            function(data, status){
               //check success?
            });
            this.props.showPopup('');
        }
    }

    render() {
        return (
            <div className='addReview'>
                <div className='reviewData' data-title='Name'><input
                    id='reviewerName'
                    type="text"
                    placeholder="Name"
                /></div>
                <div className='reviewData' data-title='Rating'>
                    <fieldset id='reviewerRating' className="star-new-review">
                        <input type="radio" className='newradiostar' id="newstar3" name="rating" value="3.0"/><label
                        className="newstarlable" htmlFor="newstar3"/>
                        <input type="radio" className='newradiostar' id="newstar2" name="rating" value="2.0"/><label
                        className="newstarlable" htmlFor="newstar2"/>
                        <input type="radio" className='newradiostar' id="newstar1" name="rating" value="1.0"/><label
                        className="newstarlable" htmlFor="newstar1"/>
                    </fieldset>
                </div>
                <div className='reviewComment' data-title='Comment'><input
                    id='reviewerComment'
                    type=''
                    placeholder="Comment"
                /></div>
                <div className='reviewSubmit'>
                    <button onClick={this.addNewReview}>Save</button>
                    <p id='validationError' hidden>Please fill all fields.</p>
                </div>
            </div>);
    }
};


const Review = (props) =>
{
    return(
        <div className='reviewComponent'>
            <h2 className='reviewData' data-title='Name'>{props.reviewData.reviewer_name}</h2>
            <div className='reviewData' data-title='Rating'>
                <Stars
                starmax={3}
                rating={props.reviewData.rating}
                />
            </div>
            <p className='reviewComment' data-title='Comment'>{props.reviewData.comment || '-' }</p>

        </div>);
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
        if (reviews.length === 0) {
            reviews.push(<div className='reviewComponent' key='NONE'>No reviews available for this restaurant. Be the first one to review it!</div>)
        }
        reviews.push(<AddReview key='ADD' showPopup={this.props.showPopup} restaurant_id={this.props.show}/>);
        return (
            <div className='popupReview' >
                <div className='popupReview_inner' >
                    <a className='close' onClick={() => this.props.showPopup('')}/>
                    {reviews}
                </div>
            </div>
        );
    }
}



export default ReviewPopup;