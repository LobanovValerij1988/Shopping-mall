import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ProductIcon from "@mui/icons-material/LocalMall";
import CategoryIcon from "@mui/icons-material/Redeem";
import OrdersIcon from "@mui/icons-material/Store";
import MainPageIcon from "@mui/icons-material/AccountBalance";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { BadgeBottomNavigationAction } from "./BadgeBottomNavigationAction";

export function NavigationPanel() {
  const navigate = useNavigate();
  const location = useLocation();
  const [value, setValue] = useState();

  useEffect(() => {
    setValue(location.pathname);
  }, [location.pathname]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(newValue);
  };

  return (

  <BottomNavigation showLabels value={value} onChange={handleChange}>
      <BottomNavigationAction
        to="/"
        value="/"
        component={Link}
        label="main"
        icon={<MainPageIcon />}
      />
      <BottomNavigationAction
        to="/products"
        value="/products"
        component={Link}
        label="product"
        icon={<ProductIcon />}
      />
      <BottomNavigationAction
        to="/categories"
        value="/categories"
        component={Link}
        label="categories"
        icon={<CategoryIcon />}
      />
      <BottomNavigationAction
        to="/orders"
        value="/orders"
        component={Link}
        label="orders"
        icon={<OrdersIcon />}
      />
      <BadgeBottomNavigationAction
        to="/cart"
        value="/cart"
        component={Link}
        label="cart"
        icon={<AddShoppingCartIcon />}
      />
    </BottomNavigation>
  );
}
