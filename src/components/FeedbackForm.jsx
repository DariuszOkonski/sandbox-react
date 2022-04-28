import Card from "./shared/Card"
import { useEffect, useState } from 'react';
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";

function FeedbackForm() {
    const [text, setText] = useState('');
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('')


    const handleTextChange = (e) => {
        setText(e.target.value)
    }

    useEffect(() => {
        if(text === '') {
            setBtnDisabled(true);
            setMessage(null)
        } else if (text !== '' && text.trim().length <= 10) {
            setBtnDisabled(true)
            setMessage('Text must be at least 10 characters')
        } else {
            setBtnDisabled(false);
            setMessage(null)
        }
    }, [text])
    

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(text)
    }

    return (        
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>
                
                <RatingSelect 
                    select={(rating) => setRating(rating)} 
                />

                <div className="input-group">
                    <input 
                        type="text" 
                        placeholder="Write a review" 
                        value={text}
                        onChange={handleTextChange}
                    />

                    <Button 
                        type='submit' 
                        isDisabled={btnDisabled}
                    >Send</Button>
                </div>

                { message && <div className="message">{message}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm