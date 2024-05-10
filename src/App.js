
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Footer from './components/Footer';
import Offer from './components/Offer';


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
      <BrowserRouter basename='/fitness-area-react-project'>
          <Navbar title="Fitness_Area" home="HOME" about="About Us"  help="Help" mode={mode} toggleMode={toggleMode} button={button}/>
          <Alert alert={alert}/>
        
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About title1="Information About Us" title2="Technology To Be Use" title3="Contact Us" mode={mode}/>}/>
          </Routes>
          <Offer/>
          <Footer home="Home" about="About_Us"  contact_us="Contact_Us" service="Service" email="gajbhiye.vikas29@gmail.com" mobile="7709008992" address="Gautam Nagar, MahadevKhori, Amaravati, MH"/>
      </BrowserRouter> 
   </>                                                                                                                                                                                          
  );
}
export default App;