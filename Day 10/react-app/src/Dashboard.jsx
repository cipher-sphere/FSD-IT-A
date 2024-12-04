import React from 'react';
import './Dashboard.css'; // Import the CSS file

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <h1>Welcome to the Dashboard</h1>
            <div className="dashboard-content">
                <div className="card">
                    <h2>Profile</h2>
                    <p>Manage your profile information and settings.</p>
                </div>
                <div className="card">
                    <h2>Settings</h2>
                    <p>Adjust your application preferences.</p>
                </div>
                <div className="card">
                    <h2>Notifications</h2>
                    <p>View and manage your notifications.</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;