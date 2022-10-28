import logo from './logo.svg';
import './App.css';
import Intro from './component/Intro';
import { Routes, Route} from "react-router-dom";
import Register from "../src/component/Register"
import Login from "../src/component/Login"


function App() {
  return (
    <>

    <Intro/>

    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>


    </>
  );
}

export default App;
