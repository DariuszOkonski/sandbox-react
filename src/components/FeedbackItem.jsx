import { FaTimes } from 'react-icons/fa'
import { PropTypes } from 'prop-types';
import Card from './shared/Card';

function FeedbackItem({ text, rating, id, handleDelete }) {
    return (
        <Card>
            <div className="num-display">{rating}</div>
            <button className="close" onClick={() => handleDelete(id)}>
                <FaTimes color='purple'/>
            </button>
            <div className="text-display">{text}</div>
        </Card>
    )
}

FeedbackItem.defaultProps = {
    text: 'no data',
    rating: 0,
    handleDelete: () => console.log('No handleDelete was provided from FeedbackList')
}

FeedbackItem.propTypes = {
    text: PropTypes.string,
    rating: PropTypes.number,
    id: PropTypes.string.isRequired,
    handleDelete: PropTypes.func.isRequired
}

export default FeedbackItem