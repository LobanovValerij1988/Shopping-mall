import React, {memo} from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from "@mui/material";
import {useAppSelector} from "../../hooks/reduxHooksTS";

export const ProductsTable = memo(({ onProductUpdate, onProductBuy }:
  {
    onProductUpdate: (e: React.MouseEvent<HTMLButtonElement>) => void,
    onProductBuy :(e:  React.MouseEvent<HTMLButtonElement>)=> void })  =>
    {
  const products = useAppSelector((state) => state.products.products);
  const roles = useAppSelector(state => state.auth.roles )
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={4}>
              Product List
            </TableCell>
          </TableRow>
          <TableRow sx={{ display: "flex" }}>
            <TableCell sx={{ flex: 1 }}>Name</TableCell>
            <TableCell sx={{ flex: 1 }}>Quantity </TableCell>
            <TableCell sx={{ flex: 1 }}>Price</TableCell>
            <TableCell sx={{ flex: 1 }}>Category</TableCell>
            <TableCell sx={{ flex: 2 }} align="center">
              Edit
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product._id} sx={{ display: "flex" }}>
              <TableCell sx={{ flex: 1 }}>{product.name}</TableCell>
              <TableCell sx={{ flex: 1 }}>{product.quantity}</TableCell>
              <TableCell sx={{ flex: 1 }}>{product.price}</TableCell>
              <TableCell sx={{ flex: 1 }}>{product.category.name}</TableCell>
              <TableCell sx={{ flex: 2 }} align="center">

                { roles.includes('manager') &&
                    ( <Button
                        onClick={onProductUpdate}
                        data-product-id={product._id}
                        variant="contained"
                      >
                        edit
                      </Button>
                    )
                }
                <Button
                  sx={{ ml: 1 }}
                  data-product-id={product._id}
                  variant="contained"
                  onClick={onProductBuy}
                  disabled={product.quantity === 0}
                >
                  Add to cart
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
});
