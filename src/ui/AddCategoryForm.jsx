import { useForm } from "react-hook-form";
import { useCategories } from "../context/CategoriesProvider";
import Button from "./Button";
import RHFTextField from "./RHFTextField";

function AddCategoryForm({ onClose }) {
  const { addCategory } = useCategories();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { categoryTitle, categoryDescription } = data;
    addCategory({ title: categoryTitle, description: categoryDescription });
    reset();
    onClose();
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
        name="categoryTitle"
      />
      <RHFTextField
        register={register}
        errors={errors}
        validationSchema={{
          required: "Description is necessary",
        }}
        type="textarea"
        label="description"
        name="categoryDescription"
      />
      <div className="w-full flex gap-x-4">
        <Button onClick={onClose} className="flex-1" variant="outline">
          Cancel
        </Button>
        <Button type="submit" className="flex-1" variant="secondary">
          Add Category
        </Button>
      </div>
    </form>
  );
}

export default AddCategoryForm;
