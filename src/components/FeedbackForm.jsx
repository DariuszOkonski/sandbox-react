import Card from "./shared/Card"
import { useState } from 'react';
import Button from "./shared/Button";

function FeedbackForm() {
    const [text, setText] = useState('')

    const handleTextChange = (e) => {
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(text)
    }

    return (        
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>
                {/* todo - rating select component */}

                <div className="input-group">
                    <input 
                        type="text" 
                        placeholder="Write a review" 
                        value={text}
                        onChange={handleTextChange}
                    />

                    <Button 
                        type='submit' 
                    >Send</Button>
                </div>
            </form>
        </Card>
    )
}

export default FeedbackForm