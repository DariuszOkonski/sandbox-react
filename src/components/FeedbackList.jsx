import { PropTypes } from 'prop-types';
import FeedbackItem from "./FeedbackItem"

function FeedbackList({ feedback, handleDelete }) {
    if(!feedback || feedback.length === 0) {
        return <p>No Feedback Yet</p>
    }

    return (
        <div className="feedback-list">
            {
                feedback.map(item => 
                    <FeedbackItem 
                        key={item.id} 
                        {...item} 
                        handleDelete={handleDelete}
                    />)
            }
        </div>
  )
}

FeedbackList.defaultProps = {
    feedback: [],
    handleDelete: () => console.log('No handleDelete was provided from App.js')
}

FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
        })
    ).isRequired,
    handleDelete: PropTypes.func.isRequired
}

export default FeedbackList