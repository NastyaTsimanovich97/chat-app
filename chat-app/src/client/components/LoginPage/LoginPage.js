import React from 'react';
import LoginForm from '../LoginForm';
import SignupForm from '../SignupForm';
import './LoginPage.css';

export default function LoginPage() {
  return (
    <div className="LoginPage">
      <LoginForm />
      <SignupForm />
    </div>
  );
}
