
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Footer from './components/Footer';

import AdminDashboard from './components/AdminDashboard';
import UserDashboard from './components/UserDashboard';


function App() {

  return (
    <>
      <BrowserRouter basename='/fitness-area-react-project'>
          <Navbar title="Fitness_Area" home="HOME" about="About Us"  help="Service" admindash="Admin Dashboard" userdash="User Dashboard"/>
          
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About title1="Information About Us" title2="Technology To Be Use" title3="Contact Us" />}/>
            <Route path='/admindashboard' element={<AdminDashboard/>}/>
            <Route path='/userdashboard' element={<UserDashboard />} />
          </Routes>
          
          <Footer home="Home" about="About_Us"  contact_us="Contact_Us" service="Service" email="gajbhiye.vikas29@gmail.com" mobile="7709008992" address="Gautam Nagar, MahadevKhori, Amaravati, MH"/>
      </BrowserRouter> 
   </>                                                                                                                                                                                          
  );
}
export default App;