import { useCategories } from "../../context/CategoriesProvider";
import Select from "../../ui/Select";
import TextField from "../../ui/TextField";

const initialCategoryOptions = [{ label: "All", value: "all" }];
const initialSortOptions = [
  { label: "latest", value: "latest" },
  { label: "earliest", value: "earliest" },
  { label: "last modify", value: "lastModify" },
];

function ProductFilters({
  sort,
  onSortChange,
  category,
  onCategoryChange,
  title,
  onTitleChange,
}) {
  const { categories } = useCategories();
  const categoryOptions = [
    ...initialCategoryOptions,
    ...categories.map((c) => ({ label: c.title, value: c.title })),
  ];
  return (
    <div>
      <h3 className="text-secondary-400 mb-6 font-bold text-base border-b border-b-secondary-300">
        Filters
      </h3>
      <div className="space-y-6">
        <TextField
          onChange={onTitleChange}
          value={title}
          name="filterTitle"
          containerClassName="flex justify-between items-center"
          label="search"
        />
        <Select
          onChange={onSortChange}
          name="filterSort"
          value={sort}
          label="sort"
          containerClassName="flex justify-between"
          options={initialSortOptions}
          placeholder="select sort method"
        />
        <Select
          onChange={onCategoryChange}
          value={category}
          name="filterCategory"
          label="Category"
          containerClassName="flex justify-between"
          options={categoryOptions}
        />
      </div>
    </div>
  );
}

export default ProductFilters;
