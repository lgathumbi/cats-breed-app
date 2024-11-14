import './App.css';
import Home from './Components/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import About from './Components/About';
import Contact from './Components/Contact';
import AddCats from './Components/AddCats';

function App() {
  return (
  <>
  <Router>
    <div>
      <NavBar/>
      <Routes>
        <Route>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={< About/>}/>
          <Route path='/contact' element={<Contact />}/> 
          <Route path='/add-cats' element={<AddCats/>}/>
        </Route>
      </Routes>
    </div>
  </Router>
  </>
  );
}

export default App;
