import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Projects from './Pages/Projects/Projects';
import Contacts from './Pages/Contacts/Contacts';
import MyPath from './Pages/MyPath/MyPath';
// import Blog from './Pages/Blog/Blog';
import NotFound from './Pages/NotFound/NotFound';

import './App.css'

function App() {

  return (
    <div className='container'>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/my_path" element={<MyPath />}/>
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contacts />} />
        {/* <Route path="/blog" element={<Blog />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
