import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <header>            
            <Link to="/">Home</Link>
            <Link to="/otherpage">Other Page</Link>
          </header>
          <main>
            <Route exact path="/" component={Fib} />
            <Route path="/otherpage" component={OtherPage} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
