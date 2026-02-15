import { useProducts } from "../context/ProductsProvider";
import DarkModeToggle from "./DarkModeToggle";

function Header() {
  const { products } = useProducts();
  return (
    <div className="h-14 flex items-center justify-center gap-x-4 bg-secondary-200 mb-6 sticky top-0">
      <DarkModeToggle />
      <h1 className="md:text-xl text-sm font-bold text-secondary-600">
        Inventory App using tailwind & React.js
      </h1>
      <span className="size-9 flex items-center justify-center rounded-full border-2 border-secondary-500 bg-secondary-300 text-secondary-700 font-bold">
        {products.reduce((current, acc) => acc.count + current, 0)}
      </span>
    </div>
  );
}

export default Header;
