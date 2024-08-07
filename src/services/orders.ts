import api from "../config";
import {Product} from "../interfaces/globalTypes";
const ROUTE = "orders";

export const getAllOrders = async () => {
  return await api.get(`${ROUTE}`);
};

export const saveOrder = async (products: Pick<Product, "_id" | "quantity">[]) => {
 const body = {products};
  return await api.post(`${ROUTE}`, body);
};
