// import logo from './logo.svg';
import './css/style.css';

import Message from './components/message-component';
import MessageList from './components/messageList';


// const myText = "anyText";

function App(props) {  

  return (
    <div className="App">
      <header className="App-header">
      <div>My name is {props.name}</div>
      <Message 
            text = { 
            {
              1: "Hello world!", 
              2: "This is my First React App"
              }
            }
            />
      <MessageList />
      </header>
    </div>
    
  );
}

export default App;
