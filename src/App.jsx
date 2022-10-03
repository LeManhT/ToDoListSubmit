import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.min.css';
import Login from './component/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProtectedRouter from './component/ProtectedRouter';
import Content from './component/Content';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Login />}></Route> */}
        {/* <Route element={<ProtectedRouter />}> */}
        <Route path='/' element={<Content />}></Route>
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
