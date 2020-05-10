import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/app';


const Form = () => <App />;


export default Form;

const wrapper = document.getElementById('container');
wrapper ? ReactDOM.render(<Form />, wrapper) : false;
