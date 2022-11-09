import React from 'react'
import Footer from '../component/Shared/Footer/Footer'
import NavBar from '../component/Shared/Nav/NavBar'

const Layout = ({ children }) => {
  return (
     <>
     <nav>
       <NavBar />
       {/* <Link to="/">Home</Link>
       <br />
       <Link to="/enterprise">Enterprise</Link>
       <br />
       <Link to="/profile">Profile</Link>
       <br />
       <Link to="/teams">Teams</Link>
       <br />
       <Link to="/login">Login</Link>
       <br />
       <Link to="/signin">Signin</Link>
       <br /> */}
     </nav>
     <main>{children}</main>
     <footer>
       <Footer />
     </footer>
   </>
  )
}

export default Layout