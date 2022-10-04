import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.min.css';
import Login from './component/Login/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProtectedRouter from './component/PrivateRouter/ProtectedRouter';
import Content from './component/Page/Content';


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
