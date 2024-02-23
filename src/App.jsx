import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import About from './Pages/About';
import Home from './Pages/Home';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';
import Faq from './Pages/Faq';
import Terms from './Pages/Terms';
import How from './Pages/How';
import Privacy from './Pages/Privacy';
import Donation from './Pages/Donation';
import SinglePage from './Pages/SinglePage';
import Blog from './Pages/Blog';
import Signup from './Pages/Signup';
import Layout from './component/Layout';
import AuthLayout from './component/AuthLayout';

function App() {
  return (
    <>
      <Router>
        {/* <Header /> */}
        <Routes>
          <Route path={`/*`} element={<AuthLayout />}>
            <Route path='signup' element={<Signup />} />
          </Route>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='About' element={<About />} />
            <Route path='Portfolio' element={<Portfolio />} />
            <Route path='Contact' element={<Contact />} />
            <Route path='FAQ' element={<Faq />} />
            <Route path='Terms&condition' element={<Terms />} />
            <Route path='Howitworks' element={<How />} />
            <Route path='Privacy' element={<Privacy />} />
            <Route path='Donation' element={<Donation />} />
            <Route path='Blog' element={<Blog />} />
            <Route path='SinglePage/:id' element={<SinglePage />} />

          </Route>
        </Routes>
       
      </Router>
    </>
  );
}

export default App;
