import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />
  return (
    <ChatEngine 
      height="100vh"
      projectID="3e37d075-7840-4b0e-8a03-ed10f2b83a85"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps} />}
    />
  );
}

//user: femi, secret: femi
//user: Motun, secret: motun
//user: Xyluz, secret: xyluz

export default App;
