import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import ContactForm from './ContactForm';
import Home from './Home';
import Contact from './Contact';
import Task from './Task';
import Nav from './Nav';
function App() {
  return (
    <div className="App">
    {/* <ContactForm /> */}
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/task' element={<Task />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
