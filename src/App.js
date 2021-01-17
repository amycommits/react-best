import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/home'
import Form from './components/form'
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/Form">
            <Form />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
