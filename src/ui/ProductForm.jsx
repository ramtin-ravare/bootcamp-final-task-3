import { useForm } from "react-hook-form";
import { useCategories } from "../context/CategoriesProvider";
import Button from "./Button";
import RHFSelect from "./RHFSelect";
import RHFTextField from "./RHFTextField";
import { useProducts } from "../context/ProductsProvider";

function ProductForm({ productId, onClose }) {
  const { addProduct, editProduct, products } = useProducts();
  const productToEdit = products.find((p) => p.id === productId);
  let isEditSession = !!productToEdit;
  const defaultValues = isEditSession
    ? {
        productTitle: productToEdit.name,
        productQuantity: productToEdit.count,
        productCategory: productToEdit.category,
      }
    : "";

  const { categories } = useCategories();
  const categoryOptions = categories.map((c) => ({
    label: c.title,
    value: c.title,
  }));
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  const onSubmit = (data) => {
    const { productTitle, productQuantity, productCategory } = data;
    if (isEditSession) {
      if (
        productTitle === productToEdit.name &&
        productQuantity === productToEdit.count &&
        productCategory === productToEdit.category
      )
        return;
      const editedProduct = {
        name: productTitle.trim(),
        count: productQuantity,
        category: productCategory,
        updatedAt: new Date().toISOString(),
      };
      editProduct(productToEdit.id, editedProduct);
      onClose();
      return;
    }
    addProduct({
      name: productTitle.trim(),
      count: productQuantity,
      category: productCategory,
      createdAt: new Date().toISOString(),
      id: new Date().getTime(),
    });
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full bg-secondary-200 p-4 rounded-xl space-y-4"
    >
      <RHFTextField
        register={register}
        errors={errors}
        validationSchema={{
          required: "Title is necessary",
        }}
        label="title"
        name="productTitle"
      />

      <RHFTextField
        register={register}
        errors={errors}
        validationSchema={{
          required: "Quantity is necessary",
          min: {
            value: 0,
            message: "Qunatity should be more than 0",
          },
          validate: (value) =>
            /^[0-9]+$/.test(value) || "Qunatity should be an positive integer number",
          setValueAs: (v) => Number(v),
        }}
        type="number"
        label="quantity"
        name="productQuantity"
      />
      <RHFSelect
        register={register}
        errors={errors}
        validationSchema={{
          required: "Category is necessary",
        }}
        label="category"
        placeholder="select a category"
        selectClassName="w-full"
        options={categoryOptions}
        name="productCategory"
      />
      <div className="w-full">
        <Button type="submit" className="w-full" variant="secondary">
          {isEditSession ? "Edit" : "Add New"} Product
        </Button>
      </div>
    </form>
  );
}

export default ProductForm;
