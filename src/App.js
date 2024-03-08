import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home'
import ChangePassword from './components/ChangePassword';
import EditProfile from './components/EditProfile';
import { Toaster, toast } from 'react-hot-toast';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Profile from './components/Profile';
import ShowList from './components/ShowList';
import UploadImage from './components/UploadImage';
import ShowProduct from './components/ShowProduct';
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Toaster/>
      <Navbar/>
      <BrowserRouter>
      <Routes >
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home/>} />
      <Route path="/cpassword" element={<ChangePassword/>}/>
      <Route path="/editprofile" element={<EditProfile/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/showlist" element={<ShowList/>}/>
      <Route path="/uploadimage" element={<UploadImage/>}/>
      <Route path="/showproduct/:id" element={<ShowProduct/>}/>
     </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
