
import './App.css';
import Button from './components/reusablebutton/button.jsx'
import Home from './components/homepage/hero'
import Header from "../src/components/header/header"
import Information from './components/homepage/information';
import Loginform from './components/loginform/loginform';
import Service from './components/service/service';
import Footer from './components/footer/footer';
function App() {
  return (
    <div className="App">
    <Header />
    <Home/>
    <Information/>
    
    <Loginform />
    <Service />
    
    <Footer />
    </div>
  );
}

export default App;
