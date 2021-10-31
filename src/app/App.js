import '../css/App.css';
import { Header } from './Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ProjectCards } from './ProjectCards';
import { Home } from './Home';
import { ProjectInfo } from './ProjectInfo';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/projects' exact component={ProjectInfo} />
      </Switch>
    </Router>
  );
}

export default App;
