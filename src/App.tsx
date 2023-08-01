import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import CounterComponent from './components/counter-component/counter-compontent';
import { GoogleOAuthProvider } from '@react-oauth/google';  
import DashboardComponent from './components/dashboard-component/dashboard-component';
function App() {
  return(
  <GoogleOAuthProvider clientId="612007383351-g2u5lsvf4agul48ho1qj3c9ni07j4f8q.apps.googleusercontent.com">
    <DashboardComponent />
    </GoogleOAuthProvider>)
}

export default App;
