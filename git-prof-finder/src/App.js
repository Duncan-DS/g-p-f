import './App.css';
import Home from './components/pages/Home/Home';
import User from './components/pages/User/User';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user' element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
