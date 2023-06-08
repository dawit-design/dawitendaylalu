import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <>
      <h1>Welcome to my portfolio!</h1>
      <Navbar />
      <Header />
      
      <Router>
        <Route exac path='/' components={Header}><Header /></Route>
      </Router>
      </>
    </div>
  );
}

export default App;
