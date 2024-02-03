import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Error from './Pages/Error';
import Logout from './Pages/Logout';
import AdminLayout from './Components/Layouts/AdminLayout';
import AdminUsers from './Pages/AdminUsers';
import AdminContacts from './Pages/AdminContacts';
import AdminUpdate from './Pages/AdminUpdate';

const App = () => {
  return <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='*' element={<Error />} />
        <Route path='/admin' element={<AdminLayout />}>
          <Route path='users' element={<AdminUsers />} />
          <Route path='contacts' element={<AdminContacts />} />
          <Route path='users/:id/edit' element={<AdminUpdate/>}/>
        </Route>
      </Routes>
      <Footer />
    </Router>
  </>
};

export default App;