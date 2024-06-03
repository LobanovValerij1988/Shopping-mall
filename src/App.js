import { Routes, Route } from "react-router-dom";

import { CategoriesPage } from "./pages/CategoiesPage/CategoriesPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { OrdersPage } from "./pages/OrdersPage/OrdersPage";
import { ProductsPage } from "./pages/ProductsPage/ProductsPage";
import { CartPage } from "./pages/CartPage/CartPage";
import { NavigationPanel } from "./components/shared/Navigation";

function App() {
  return (
    <div>
      <NavigationPanel />
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="/categories" element={<CategoriesPage />} />
        <Route exact path="/products" element={<ProductsPage />} />
        <Route exact path="/orders" element={<OrdersPage />} />
        <Route exact path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
