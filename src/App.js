import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Resume from './Components/Resume/Resume'

const App = () => {
  return (
   <Router>
    <Routes>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/Contact' component={Contact} />
      <Route exact path='/Resume' component={Resume} />
    </Routes>
   </Router>
  );
}

export default App;
