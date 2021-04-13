import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import Navbar from './Components/navbar'

//Pages
import Home from './Pages/Home'
import Products from './Pages/Products'
import NotFound from './Pages/NotFound'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/products' component={Products} />
        <Route exact path="/404" component={ NotFound } />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}

export default App;
