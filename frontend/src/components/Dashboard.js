import { useAuth } from './context/authContext';
import '../App.css';

const Dashboard = () => {
    const { logout } = useAuth();
    return (
        <div className="auth-card" style={{width: '500px'}}>
            <div style={{fontSize: '50px', marginBottom: '10px'}}>🚀</div>
            <h1 style={{color: '#00d2ff'}}>Access Granted</h1>
            <p style={{margin: '20px 0', lineHeight: '1.6'}}>
                Welcome to the protected dashboard. Your session is secured with **JWT (JSON Web Token)**.
            </p>
            <div style={{background: 'rgba(0,210,255,0.1)', padding: '15px', borderRadius: '10px', fontSize: '0.85rem', marginBottom: '20px'}}>
                ✅ Password Hashed with Bcrypt<br/>
                ✅ SQLite Database Connected<br/>
                ✅ Role-Based Access Active
            </div>
            <button className="auth-btn" style={{background: '#ff4b2b'}} onClick={logout}>Sign Out</button>
        </div>
    );
};

export default Dashboard;