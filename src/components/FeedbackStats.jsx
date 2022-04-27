import { PropTypes } from 'prop-types';

function FeedbackStats({ feedback }) {
    console.log(feedback)
    let average = (feedback.reduce((acc, curr) => acc + curr.rating, 0)) / feedback.length;
    average = average.toFixed(1).replace(/[.,]0$/, '');

    return (
        <div className="feedback-stats">
            <h4>{feedback.length} Reviews</h4>
            <h4>Average Rating: {isNaN(average) ? '0' : average}</h4>
        </div>
    )
}

FeedbackStats.defaultProps = {
    feedback: []
}

FeedbackStats.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
        })
    ).isRequired
}

export default FeedbackStats