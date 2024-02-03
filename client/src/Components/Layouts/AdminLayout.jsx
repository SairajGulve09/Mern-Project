import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { FaUser ,FaHome } from "react-icons/fa";
import { MdContacts ,MdMiscellaneousServices   } from "react-icons/md";
import { useAuth } from '../../store/Auth';

const AdminLayout = () => {


  const {user} = useAuth();

  console.log("user in admin layout",user);

  if(user.isAdmin)
  {

  return (
    <>
    
      <header>
        <div className="container">
          <ul>
            <li><NavLink to="/admin/users"><FaUser /> users</NavLink></li>
            <li><NavLink to="/admin/contacts"><MdContacts  /> contacts</NavLink></li>
            <li><NavLink to="/admin/users"><MdMiscellaneousServices /> services</NavLink></li>
            <li><NavLink to="/"><FaHome /> home </NavLink></li>
          </ul>
        </div>
      </header>
      <Outlet/>
    </>
  )
  }
  else{
    return(
      <>
      <h1>Access Denied!</h1>
      </>
    )
  }
}

export default AdminLayout
