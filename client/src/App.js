import logo from './logo.svg';
import './App.scss';
import Navbar from './Components/NavBar/NavBar';
import HomePage from './Components/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage/>
    </div>
  );
}

export default App;
