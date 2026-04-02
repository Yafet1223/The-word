import React from "react";
export default function LandingPage({ onEnter }) {
  return (
    <div style={{
      padding: 40,
      color: '#fff',
      textAlign: 'center',
      background: '#1a3a2a',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <h1 style={{ fontSize: 48, marginBottom: 24 }}>Welcome to The Word App!</h1>
      <p style={{margin: '20px 0', fontSize: 22}}>Grow in faith, share prayers, and connect with others.</p>
      <button style={{padding: '16px 40px', fontSize: 24, cursor: 'pointer', background: '#4caf50', color: '#fff', border: 'none', borderRadius: 8}} onClick={onEnter}>
        Enter Prayer Wall
      </button>
      <div style={{marginTop: 40, fontSize: 16, color: '#b2dfdb'}}>This is the landing page. You should see this first!</div>
    </div>
  );
}
