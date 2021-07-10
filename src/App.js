import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { StateProvider } from 'src/store';
import { Home, About, NotFound } from 'src/screens';
import { NavBar } from 'src/components';
import './App.css';

function App() {  
  return (    
    <StateProvider>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </StateProvider>
  );
}

export default App;
