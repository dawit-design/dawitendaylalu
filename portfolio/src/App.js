import './App.css';
import Header from './components/Header';
import { BrowserRouter as Routes, Route, Link} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <h1>Welcome to my portfolio!</h1>
      <Header />
      {/* <Routes>
        <Route exac path='/' components={Header}><Header /></Route>
      </Routes> */}
    </div>
  );
}

export default App;
