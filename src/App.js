import './App.css';
import './common/common.css';
import AOScom from './components/aos/aos-com';
// Bootstrap CSS
 import "bootstrap/dist/css/bootstrap.min.css";
//Bootstrap Bundle JS
 import "bootstrap/dist/js/bootstrap.bundle.min";
 import Home from './views/home/Home';
import VehicleList from './components/VehicleList';
import { Suspense } from 'react';

//routing
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
import Stocklist from './views/stocklist/Stocklist';

import Aboutus from './views/aboutus/Aboutus';
import Warranty from './views/warranty/Warranty';

import Finance from './views/finance/Finance';
import Contactus from './views/contactus/Contactus';


const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home/>}></Route>,
      <Route path="stock-list" element={<Stocklist/>}></Route>,
      <Route path="home" element={<Home/>}></Route>,
      <Route path="finance" element={<Finance/>}></Route>,
      <Route path="about" element={<Aboutus/>}></Route>,
      <Route path="warranty" element={<Warranty/>}></Route>,
      <Route path="contact" element={<Contactus/>}></Route>,
    </Route>
  )
)


function App() {
  return (
    <div className="App">
      
    <RouterProvider index router={routes}></RouterProvider>
    <AOScom/>
  
    </div>
  );
}

export default App;
