import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { productUpdated } from "../../redux/thunk";
import { ProductForm } from "./ProductForm";
import { isAllFieldsInProductCorrect } from "../../helpers/helpers";

export function UpdateProductForm({ onClose, productId }) {
  const dispatch = useDispatch();
  const product = useSelector((state) =>
    state.products.products.find((product) => product._id === productId)
  );

  const [name, setName] = useState(product.name);
  const [quantity, setQuantity] = useState(product.quantity);
  const [price, setPrice] = useState(product.price);
  const [categoryID, setCategoryID] = useState(product.category._id);

  const onSaveProduct = () => {
    const errMsg = isAllFieldsInProductCorrect({
      name,
      quantity,
      price,
      categoryID,
    });
    if (errMsg) {
      return;
    }
    dispatch(
      productUpdated( { productId,
        productData:{
          name,
          category: categoryID,
          price,
          quantity,
      }
      })
    );

    onClose();
  };
  return (
    <ProductForm
      onClose={onClose}
      onSaveProduct={onSaveProduct}
      name={name}
      setName={setName}
      quantity={quantity}
      setQuantity={setQuantity}
      price={price}
      setPrice={setPrice}
      category={categoryID}
      setCategory={setCategoryID}
      formMessage="Edit product"
    />
  );
}
