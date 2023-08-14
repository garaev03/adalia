import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
      <div className='main-page'>
        <Navbar />

        <Outlet />

        <Footer />
      </div>
  )
}

export default App;
