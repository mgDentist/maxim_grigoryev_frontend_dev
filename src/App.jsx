import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Projects from './Pages/Projects/Projects';
import Contacts from './Pages/Contacts/Contacts';

import './App.css'

function App() {

  return (
    <div className='container'>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
        {/* <Route path="*" element={NotFound}></Route> */}
      </Routes>
      <Footer />
    </div>
  )
}

export default App
