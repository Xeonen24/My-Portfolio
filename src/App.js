import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

const App = () => {
  
  return (
    <Router>
      <Header />
      <Routes>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
