import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Landing from './pages/Landing';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact={true} component={Landing} />
        <Route path='/home' exact={true} component={Home} />
      </Switch>
    </Router>
  );
}

export default App;

