import CategoriesProvider from "./context/CategoriesProvider";
import { DarkModeProvider } from "./context/DarkModeProvider";
import ProductsProvider from "./context/ProductsProvider";
import AppLayout from "./ui/AppLayout";

function App() {
  return (
    <DarkModeProvider>
      <CategoriesProvider>
        <ProductsProvider>
          <AppLayout />
        </ProductsProvider>
      </CategoriesProvider>
    </DarkModeProvider>
  );
}

export default App;
