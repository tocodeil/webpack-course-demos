import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './helloworld';
import { hot } from 'react-hot-loader/root';
import Counter from "./counter";

const App = hot((props) => (
    <div>
        <HelloWorld name="ynon" />
        <HelloWorld name="demo" />
        <Counter />
    </div>

));

ReactDOM.render(
    <App />,
    document.querySelector('main'));
