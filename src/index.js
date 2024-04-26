import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ClerkProvider } from '@clerk/clerk-react';

// const PUBLISHABLE_KEY = process.env.CLERK_PUBLISHABLE_KEY
 
// if (!PUBLISHABLE_KEY) {
//   throw new Error("Missing Publishable Key")
// } else {
//   console.log(PUBLISHABLE_KEY);
// }

const PUBLISHABLE_KEY = 'pk_test_c3RlcmxpbmctaWJleC04LmNsZXJrLmFjY291bnRzLmRldiQ';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <App />
    </ClerkProvider>
  // {/* </React.StrictMode> */}
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
