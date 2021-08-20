import Table from './Table';
import SearchCity from './SearchCity';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Table}></Route>
          <Route exact path='/city' component={SearchCity}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
