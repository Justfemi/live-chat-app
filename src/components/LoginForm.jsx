import { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = { 'project-ID': "3e37d075-7840-4b0e-8a03-ed10f2b83a85", 'User-Name': username, 'User-Secret': password};

        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();
        } catch (error) {
            setError('Invalid credentials, please use the login details provided')
        }

    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Zuri Chat App</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Enter username here" required/>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Enter password here" required/>
                    <div align="center">
                        <button type="submit" className="button">
                            <span>LogIn</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>


        </div>
    )
}

export default LoginForm;