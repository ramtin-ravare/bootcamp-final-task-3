import ProductForm from "../../ui/ProductForm";

function AddProduct() {
  return (
    <div>
      <div>
        <h2 className="text-xl text-secondary-600 font-bold mb-3">
          Add New Product
        </h2>
        <ProductForm />
      </div>
    </div>
  );
}

export default AddProduct;
