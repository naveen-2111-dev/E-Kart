import TopBar from "./components/TopBar.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Shop } from "./Pages/Shop/shop.jsx";
import { Cart } from "./Pages/cart/cart.jsx";
import { ShopContextProvider } from "./context/shopContext.jsx"

function App() {
  return (
      <div className="App">
        <ShopContextProvider>
            <Router>
              <TopBar />
              <Routes>
                <Route path="/" element={<Shop/>} />
                <Route path="/cart" element={<Cart/>} />
              </Routes>
            </Router>
        </ShopContextProvider> 
       
      </div>
  );
}

export default App;