
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';


function App() {
  // Dark Mode Is Enable Or Not
  const [mode, setMode] = useState('light'); 
  const [button, setButton] = useState('OFF');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    })
   setTimeout(() => {
    setAlert(null);
   }, 1500);
  }
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark')
      setButton('ON')
      document.body.style.backgroundColor = 'black';
      showAlert("Dark Mode ON", "success")
    }else{
      setMode('light')
      setButton('OFF')
      document.body.style.backgroundColor = 'white';
      showAlert("Dark Mode OFF", "success")
    }
  }
  return (
    <>
      <BrowserRouter>
          <Navbar title="Fitness_Area" home="HOME" about="About Us" login="Login" register="Register" help="Help" mode={mode} toggleMode={toggleMode} button={button}/>
          <Alert alert={alert}/>
         <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About title1="Information About Us" title2="Technology To Be Use" title3="Contact Us" mode={mode}/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </BrowserRouter> 
   </>
  );
}
export default App;