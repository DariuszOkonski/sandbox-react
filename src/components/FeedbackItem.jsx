import Card from './shared/Card';
import { PropTypes } from 'prop-types';

function FeedbackItem({ text, rating }) {
    return (
        <Card>
            <div className="num-display">{rating}</div>
            <div className="text-display">{text}</div>
        </Card>
    )
}

FeedbackItem.defaultProps = {
    text: 'no data',
    rating: 0
}

FeedbackItem.propTypes = {
    text: PropTypes.string,
    rating: PropTypes.number,
}

export default FeedbackItem