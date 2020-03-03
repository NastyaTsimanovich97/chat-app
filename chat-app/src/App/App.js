import React from 'react';
import './App.style.css';
import Header from '../Header';
import Footer from '../Footer';
import ChatContent from '../ChatContent';

function App() {
  return (
    <div className="App">
      <Header />
      <ChatContent />
      <Footer />
    </div>
  );
}

export default App;
