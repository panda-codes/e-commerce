
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kids_banner from './Components/Assets/banner_kids.png';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>{/*THIS COMPONENT WILL BE DISPLAYED NO MATTER THE ROUTE */}
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/men' element={<ShopCategory banner={men_banner} category='men'/>}/>{/*THIS COMPONENT WILL BE DISPLAYED NO MATTER THE ROUTE */}
          <Route path='/women' element={<ShopCategory banner={women_banner} category='women'/>}/>
          <Route path='/kids' element={<ShopCategory banner={kids_banner} category='kid'/>}/>
          <Route path='/product' element={<Product/>}>
            <Route path=':productID' element={<Product/>}/>{/*why is this route nested in another*/}
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignup/>}/>
        </Routes>
        <Footer/>{/*THIS COMPONENT WILL BE DISPLAYED NO MATTER THE ROUTE */}
      </BrowserRouter>
    </div>
  );
}

export default App;
