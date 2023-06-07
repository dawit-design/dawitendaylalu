import './App.css';
import { BrowserRouter as Routes, Route } from 'react-router-dom';
import Header from './components/Header'
function App() {
  return (
    <Routes>

     {/* <Switch> */}
      <Route exact path="/" component={Header} />
     {/* </Switch> */}
    </Routes>
    
  );
}

export default App;
