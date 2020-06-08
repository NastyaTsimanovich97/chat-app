import React from 'react';
import LoginForm from '../LoginForm';
import SignupForm from '../SignupForm';
import './MainPage.css';

export default function MainPage() {
  return (
    <div className="MainPage">
      <LoginForm />
      <SignupForm />
    </div>
  );
}
