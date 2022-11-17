// import logo from './logo.svg';
// import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import { Home } from './pages/home/home'
import { User } from './pages/user/user'

function App() {
  return (
    <div class="container">
      <BrowserRouter>
      <nav>
        <Link to="">Home</Link> {" | "}
        <Link to="/user">User</Link> {" | "}
        <Link to="/profile">Profile</Link>
      </nav>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
      </Routes>
    </BrowserRouter>
    </div>
  );

}


export default App;
