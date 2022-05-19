import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import Home from './Pages/Home';
import Newspaper from './Pages/Newspaper';
import History from './Pages/History';
import Navbar from './Components/Navbar';
import Customer from './Pages/Customer';
import Notify from './Pages/Notify';
import Request from './Pages/Request';
import Feedback from './Pages/Feedback1';
import Markhistory from './Pages/Markhistory';
import Dashboard from './Components/Dashboard';


function App() {
  return (
    <>
    <Router className='app'>
      <Navbar/> 
    <Routes>
        {/* <Route exact path="/" element={<Dashboard/>}/> */}
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/profile" element={<Profile/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/history" element={<History/>}/>
        <Route exact path="/notify" element={<Notify/>}/>
        <Route exact path="/newspaper" element={<Newspaper/>}/>
        <Route exact path='/customer' element={<Customer/>}/>
        <Route exact path='/request' element={<Request/>}/>
        <Route exact path='/feedback1' element={<Feedback/>}/> 
        <Route exact path='/markhistory' element={<Markhistory/>}/>  
        </Routes>
  </Router>
  </>
    
  );
}

export default App;
