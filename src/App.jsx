import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProtectedRouter from './component/PrivateRouter/ProtectedRouter';
import Content from './component/Page/ToDoList/Content';
import FormLogin from './component/Login/FormLogin';
import ParentPage from './component/Page/ParentPage/ParentPage';
import Contact from './component/Contact/Contact';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Login />}></Route> */}
        <Route path='/login' element={<FormLogin></FormLogin>}></Route>
        {/* <Route element={<ProtectedRouter />}> */}
        <Route path='/' element={<ParentPage />}>
          <Route path='/content' element={<Content />}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
        </Route>
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
