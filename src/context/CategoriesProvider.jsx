import { createContext, useContext } from "react";
import useLocalStorageReducer from "../hooks/useLocalStorageReducer";

const CategoriesContext = createContext();

const initialState = [];

function categoriesReducer(state, { type, payload }) {
  switch (type) {
    case "add":
      return [...state, payload];
    default:
      throw new Error("Unknown action");
  }
}

export default function CategoriesProvider({ children }) {
  const [categories, dispatch] = useLocalStorageReducer(
    "categories",
    categoriesReducer,
    initialState,
  );

  const addCategory = (category) => {
    dispatch({ type: "add", payload: category });
  };

  return (
    <CategoriesContext.Provider value={{ categories, addCategory }}>
      {children}
    </CategoriesContext.Provider>
  );
}

export function useCategories() {
  const context = useContext(CategoriesContext);
  if (context === undefined)
    throw new Error("CategoriesContext was used outside of CategoriesProvider");
  return context;
}
