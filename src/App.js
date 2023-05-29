
import './App.css';
import Button from './components/reusablebutton/button.jsx'
import Home from './components/homepage/hero'
import Header from "../src/components/header/header"
import Information from './components/homepage/information';
import Loginform from './components/loginform/loginform';
import Mywork from './components/mywork/mywork';
import Customerservice from './components/customerservice/customerservice';
function App() {
  return (
    <div className="App">
    <Header />
    <Home/>
    <Information/>
    
    <Loginform />
    {/* <Customerservice /> */}
    <Mywork />
    </div>
  );
}

export default App;
