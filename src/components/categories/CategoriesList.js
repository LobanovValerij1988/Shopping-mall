import { useState, useCallback } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {CategoryForm} from "./CategoryForm";
import { CategoriesApearence } from "./CategoriesApearence";
import {categoryAdded, categoryUpdated} from "./redux/thunk";
import {useDispatch, useSelector} from "react-redux";

export function CategoriesList() {
  const [isFormCategoryOpen, setIsFormCategoryOpen] = useState(false);
  const [updateCategoryId, setUpdateCategoryId] = useState(null);

  const roles = useSelector(state => state.auth.roles )

  const dispatch = useDispatch();

  const onSaveCategory = (name) => {
    dispatch(categoryAdded(name));
  }

  const onUpdateCategory = ({name})=> {
    dispatch( categoryUpdated( {name, _id: updateCategoryId}));
  }

  const openFormCategory = useCallback((e) => {
    setUpdateCategoryId(e.target.getAttribute("data-category-id"));
    setIsFormCategoryOpen(true);
  }, []);

  const closeFormCategory = () => {
    setUpdateCategoryId(null);
    setIsFormCategoryOpen(false);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <CategoriesApearence onUpdate={openFormCategory} />

      { roles.includes('manager') &&
      <Button sx={{ m: 5 }} variant="contained" onClick={openFormCategory}>
        Add new category
      </Button>
      }
      {isFormCategoryOpen && (
        <CategoryForm
          isOpen={isFormCategoryOpen}
          categoryID = {updateCategoryId}
          onSubmit = {updateCategoryId ? onUpdateCategory : onSaveCategory}
          formMessage ={updateCategoryId ? "update" : "add"}
          onClose={closeFormCategory}
        />
      )}
    </Box>
  );
}
