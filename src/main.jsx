import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './CounterApp';

import { FirstApp } from '../src/firstApp';
// import { HelloWorldApp } from './HelloWorldApp';
import './styles.css';



ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
       <CounterApp value={ 20 } />
        {/* <FirstApp title="Hola, Soy Vegeta" /> */}
   {/* <FirstApp title="Hola, soy Vegeta"/> */} 
    </React.StrictMode>
);