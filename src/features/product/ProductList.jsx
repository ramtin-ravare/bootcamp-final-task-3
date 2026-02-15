import { useProducts } from "../../context/ProductsProvider";
import Product from "./Product";
import ProductFilters from "./ProductFilters";
import { useState } from "react";

function ProductList() {
  const { products, removeProduct } = useProducts();
  const [title, setTitle] = useState("");
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("");

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const onCategoryChange = (e) => {
    setCategory(e.target.value);
  };
  const onSortChange = (e) => {
    setSort(e.target.value);
  };

  const filteredProducts = products
    .filter((p) => !category || category === "all" || p.category === category)
    .filter((p) => p.name.toLowerCase().includes(title.trim().toLowerCase()))
    .sort((a, b) => {
      const aDate =
        sort === "lastModify" ? (a.updatedAt ?? a.createdAt) : a.createdAt;
      const bDate =
        sort === "lastModify" ? (b.updatedAt ?? b.createdAt) : b.createdAt;
      if (sort === "earliest") {
        return new Date(aDate) - new Date(bDate);
      }
      if (sort === "latest") {
        return new Date(bDate) - new Date(aDate);
      }
      if (sort === "lastModify") {
        return new Date(bDate) - new Date(aDate);
      }
    });

  return (
    <div>
      <ProductFilters
        sort={sort}
        category={category}
        title={title}
        onSortChange={onSortChange}
        onCategoryChange={onCategoryChange}
        onTitleChange={onTitleChange}
      />
      <div className="mt-8">
        <h2 className="text-secondary-500 mb-6 font-bold text-lg border-b border-b-secondary-500">
          ProductList
        </h2>
        <div className="space-y-4">
          {filteredProducts.map((p) => (
            <Product key={p.id} product={p} removeProduct={removeProduct} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
