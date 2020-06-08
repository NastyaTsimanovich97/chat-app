import React from 'react';
import SigninForm from '../SigninForm';
import SignupForm from '../SignupForm';
import './MainPage.css';

export default function MainPage() {
  return (
    <div className="MainPage">
      <SigninForm />
      <SignupForm />
    </div>
  );
}
