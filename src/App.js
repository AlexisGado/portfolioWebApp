import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import Footer from './Footer';
import Projects from './Projects';
import Resume from './Resume';
import About from './About';
import ProjectCloseUp from './ProjectCloseUp';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/projects' exact component={Projects} />
          <Route path='/resume' exact component={Resume} />
          <Route path='/about' exact component={About} />
          <Route path='/projects/:id' exact component={ProjectCloseUp} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
