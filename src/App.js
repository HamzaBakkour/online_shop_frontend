import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import PaymentSuccess from "./pages/PaymentSuccess";
import PaymentFailed from "./pages/PaymentFailed";


function App() {

  return (
    <Routes>

      <Route path = "/" element = {
        <Home />
      }/>

      <Route path = "/success" element = {
        <PaymentSuccess />
      }/>

      <Route path = "/failed" element = {
        <PaymentFailed />
      }/>

    </Routes>
  );

}

export default App;
