import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import '../App.css';

const Register = () => {
    const [form, setForm] = useState({ username: '', password: '' });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/auth/register', form);
            alert("Account Created!");
            navigate('/login');
        } catch (err) {
            alert(err.response?.data?.error || "Registration failed");
        }
    };

    return (
        <div className="auth-card">
            <div style={{fontSize: '40px', marginBottom: '10px'}}>👤</div>
            <h2>Create Account</h2>
            <form onSubmit={handleSubmit}>
                <input className="auth-input" type="text" placeholder="Choose Username" required 
                    onChange={e => setForm({...form, username: e.target.value})} />
                <input className="auth-input" type="password" placeholder="Create Password" required 
                    onChange={e => setForm({...form, password: e.target.value})} />
                <button className="auth-btn" type="submit">Register</button>
            </form>
            <p className="auth-link">Already a user? <Link to="/login">Login</Link></p>
        </div>
    );
};

export default Register;