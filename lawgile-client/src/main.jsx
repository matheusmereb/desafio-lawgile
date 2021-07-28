import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css'
import App from './App'/* 
import { Amplify } from 'aws-amplify';
import config from './config';

Amplify.configure({
  Storage: {
    region: config.s3.REGION,
    bucket: config.s3.BUCKET,
  },
  API: {
    endpoints: [
      {
        name: "lawgile",
        endpoint: config.apiGateway.URL,
        region: config.apiGateway.REGION
      },
    ]
  }
}); */


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
