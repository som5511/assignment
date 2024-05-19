import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Signin} from "./pages/Signin";
import {Dashboard} from "./pages/Dashboard";
import { Signup } from './pages/Signup';
import {  CoursePage1 } from './pages/CoursePage1';
import { CoursePage2 } from './pages/CoursePage2';
import { CoursePage3 } from './pages/CoursePage3';
import { CoursePage4 } from './pages/CoursePage4';
import { CoursePage5 } from './pages/CoursePage5';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path = "/signup" element = {<Signup />} />
          <Route path = "/signin" element = {<Signin/>}/>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path = "/course1" element = {<CoursePage1 />} />
          <Route path = "/course2" element = {<CoursePage2 />} />
          <Route path = "/course3" element = {<CoursePage3 />} />
          <Route path = "/course4" element = {<CoursePage4 />} />
          <Route path = "/course5" element = {<CoursePage5 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
