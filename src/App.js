
import './App.css';
import Button from './components/reusablebutton/button.jsx'
import Home from './components/homepage/hero'
import Header from "../src/components/header/header"
import Information from './components/homepage/information';
import Loginform from './components/loginform/loginform';
function App() {
  return (
    <div className="App">
    <Header />
    <Home/>
    <Information/>
    <Loginform />
    </div>
  );
}

export default App;
