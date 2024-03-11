import './App.css';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home'
import ChangePassword from './pages/ChangePassword';
import EditProfile from './pages/EditProfile';
import { Toaster, toast } from 'react-hot-toast';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Profile from './pages/Profile';
import ShowList from './pages/ShowList';
import UploadImage from './pages/UploadImage';
import ShowProduct from './pages/ShowProduct';
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
