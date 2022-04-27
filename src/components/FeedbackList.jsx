import FeedbackItem from "./FeedbackItem"

function FeedbackList({ feedback }) {
    return (
        <>
            {
                feedback.map(element => 
                    <FeedbackItem key={element.id} {...element} />)
            }
        </>
  )
}

export default FeedbackList