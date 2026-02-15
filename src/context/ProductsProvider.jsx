import { createContext, useContext } from "react";
import useLocalStorageReducer from "../hooks/useLocalStorageReducer";

const ProductsContext = createContext();

const initialState = [];

function productsReducer(state, { type, payload }) {
  switch (type) {
    case "remove":
      return state.filter((p) => p.id !== payload);
    case "add":
      return [...state, payload];
    case "edit":
      return [
        ...state.filter((p) => p.id !== payload.id),
        {
          ...state.find((p) => p.id === payload.id),
          ...payload.data,
        },
      ];
    default:
      throw new Error("Unknown action");
  }
}

export default function ProductsProvider({ children }) {
  const [products, dispatch] = useLocalStorageReducer(
    "products",
    productsReducer,
    initialState,
  );

  const addProduct = (product) => {
    dispatch({ type: "add", payload: product });
  };
  const removeProduct = (productId) => {
    dispatch({ type: "remove", payload: productId });
  };
  const editProduct = (productId, data) => {
    dispatch({ type: "edit", payload: { id: productId, data } });
  };

  return (
    <ProductsContext.Provider
      value={{ products, editProduct, addProduct, removeProduct }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductsContext);
  if (context === undefined)
    throw new Error("ProductsContext was used outside of ProductsProvider");
  return context;
}
