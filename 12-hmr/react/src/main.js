import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './hello'

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(<HelloWorld />, root);
