import React from 'react'
import FeedbackForm from '../components/FeedbackForm'
import FeedbackList from '../components/FeedbackList'
import FeedbackStats from '../components/FeedbackStats'

function FeedbackPage({handleAdd, feedback, handleDelete}) {
  return (
    <>
        <FeedbackForm handleAdd={handleAdd} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={handleDelete} />
    </>
  )
}

export default FeedbackPage