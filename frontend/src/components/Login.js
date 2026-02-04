import { useState } from 'react';
import axios from 'axios';
import { useAuth } from './context/authContext';
import { useNavigate, Link } from 'react-router-dom';
import '../App.css'; // Import the new styles

const Login = () => {
    const [form, setForm] = useState({ username: '', password: '' });
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', form);
            login(res.data.token);
            navigate('/dashboard');
        } catch (err) {
            alert("Invalid credentials");
        }
    };

    return (
        <div className="auth-card">
            <div style={{fontSize: '40px', marginBottom: '10px'}}>🔒</div>
            <h2>Secure Login</h2>
            <form onSubmit={handleSubmit}>
                <input className="auth-input" type="text" placeholder="Username" required 
                    onChange={e => setForm({...form, username: e.target.value})} />
                <input className="auth-input" type="password" placeholder="Password" required 
                    onChange={e => setForm({...form, password: e.target.value})} />
                <button className="auth-btn" type="submit">Login</button>
            </form>
            <p className="auth-link">Don't have an account? <Link to="/register">Sign Up</Link></p>
        </div>
    );
};

export default Login;