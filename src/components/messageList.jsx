import React from 'react';
import '../css/style.css';

export default class MessageList extends React.Component {
    state = {
        messageList: [],
        text: '',
        author: '',
        messageObj: {},
        answer: ''
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.messageList !== this.state.messageList && prevState.messageList.length !== 0) {
            setTimeout(() => this.setState({answer: 'Dear user, your request has been accepted.'}), 1500)
        }
    }

    messageSend = () => {
        const obj = {
            text: this.state.text,
            author: this.state.author
        };

        this.setState(prev => 
            ({...prev, messageObj: {...prev.messageObj,...obj}}),
            () => {
                // console.log(this.state.messageObj)

                this.setState(prevState => ({
                    messageList: [...prevState.messageList,this.state.messageObj]}),
                    () => {
                        // console.log(this.state.messageList)
                    }
                )
            }
        )
    }

    inputText = (e) => {
        this.setState({text: e.target.value})
    }

    inputAuthor = (e) => {
        this.setState({author: e.target.value})
    }


    render() {
        return (
            <div className='input-form'>
                <h2>INPUT FORM</h2>
                <input className='input' placeholder='Input your name' value={ this.state.author } onChange={ this.inputAuthor }/>
                <input className='input' placeholder='Input your message' value={ this.state.test } onChange={ this.inputText }/>
                <button className='btn' onClick={ this.messageSend }>SUBMIT</button>

                <div className='answer'>
                    {this.state.answer}
                </div>
                    {this.state.messageList.map(el => {
                        return (
                            <ul className='input_list'>
                                <li>Author: {el.author}</li>
                                <li>Text: {el.text}</li>

                            </ul>
                    )
                    })}
            </div>
        )
    }
}