import { useState } from "react";
import AddCategoryForm from "../../ui/AddCategoryForm";

function AddCategory() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className={open ? "block" : "hidden"}>
        <h2 className="text-xl text-secondary-600 font-bold mb-3">
          Add New Category
        </h2>
        <AddCategoryForm onClose={() => setOpen(false)} />
      </div>
      <button
        onClick={() => setOpen(true)}
        className={`${open ? "hidden" : "block"} text-secondary-400 transition-all duration-300 ease-out hover:text-secondary-500 text-lg mb-4 font-medium`}
      >
        Add new Category?
      </button>
    </div>
  );
}

export default AddCategory;
