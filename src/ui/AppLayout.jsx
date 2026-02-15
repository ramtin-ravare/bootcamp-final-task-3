import AddCategory from "../features/category/AddCategory";
import AddProduct from "../features/product/AddProduct";
import ProductList from "../features/product/ProductList";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="bg-secondary-100 min-h-screen pb-10">
      <Header />
      <div className="grid md:p-4 md:grid-cols-2 container gap-10">
        <div className="space-y-6">
          <AddCategory />
          <AddProduct />
        </div>
        <ProductList />
      </div>
    </div>
  );
}

export default AppLayout;
