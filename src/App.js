import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Images from './components/Images';
import Videos from './components/Videos';
import Stocks from './components/Stocks';
import './App.scss';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="images" element={<Images />} />
          <Route path="stocks" element={<Stocks />} />
          <Route path="videos" element={<Videos />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
