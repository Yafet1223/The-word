import React from "react";
export default function TheWordApp({ onBack }) {
  return (
    <div style={{padding: 40, color: '#fff', textAlign: 'center'}}>
      <h1>Prayer Wall</h1>
      <p style={{margin: '20px 0'}}>This is your new React-powered main page! 🎉</p>
      <button style={{padding: '10px 30px', fontSize: 18, cursor: 'pointer'}} onClick={onBack}>
        Back to Welcome
      </button>
    </div>
  );
}
