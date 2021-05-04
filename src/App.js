import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {
  return (
    <ChatEngine 
      height="100vh"
      projectID="3e37d075-7840-4b0e-8a03-ed10f2b83a85"
      userName="Femi"
      userSecret="1234"
      renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps} />}
    />
  );
}

//user: femi, secret: 1234
//user: Motun, secret: motun

export default App;
