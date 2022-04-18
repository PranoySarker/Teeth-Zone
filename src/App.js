import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Services from './pages/Home/Services/Services';
import About from './pages/About/About';
import Header from './pages/shared/Header/Header';
import RequireAuth from './pages/RequireAuth/RequireAuth';
import CheckOut from './pages/CheckOut/CheckOut';
import NotFound from './pages/NotFound/NotFound';
import Blog from './pages/Blog/Blog';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/signin' element={<SignIn></SignIn>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        }></Route>
        <Route path='/*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
