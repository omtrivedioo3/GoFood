import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'; //npm i bootstrap-dark-5 boostrap
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import './App.css';

import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import Home from './screens/Home';
// import Navbar from './components/Navbar';
import { CartProvider } from './components/ContextReducer';
import Login from './screens/Login';
import MyOrder from './screens/MyOrder';
import Signup from './screens/Signup';


function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/createuser" element={<Signup />} />
            <Route exact path="/myOrder" element={<MyOrder />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;