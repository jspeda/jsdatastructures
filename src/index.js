import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import About from './About';
import DataStructures from './DataStructures';
import Algorithms from './Algorithms';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const Root = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/about" component={About} />
        <Route exact path="/data-structures" component={DataStructures} />
        <Route exact path="/algorithms" component={Algorithms} />
      </div>
    </Router>
  )
}





ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
