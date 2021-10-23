
import './App.css';
import Header from './containers/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ProductListing from './containers/ProductListing';
import ProductDetails from './containers/ProductDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={ProductListing} />
          <Route exact path="/product/:productId" component={ProductDetails} />
          <Route>404 Not Found</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
