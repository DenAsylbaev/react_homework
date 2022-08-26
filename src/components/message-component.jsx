import React from 'react';
import '../css/style.css';

function Message(props) {
    // const [counter, setCounter] = useState(0);

    return (
        <div className='message'>
            <div className='message_txt'>
                First message text: { props.text[1] }
            </div>
            <div className='message_txt'>
                Second message text: { props.text[2] }
            </div>
        </div>
    )
}

export default Message;

