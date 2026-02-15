import { HiPencil, HiTrash } from "react-icons/hi2";
import Button from "../../ui/Button";
import toLocalDateShort from "../../utils/toLocalDateShort";
import { useState } from "react";
import Modal from "../../ui/Modal";
import ProductForm from "../../ui/ProductForm";

function Product({ product, removeProduct }) {
  const { count, createdAt, name, category, id } = product;
  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-between items-center">
      <p className="text-secondary-500">{name}</p>
      <div className="flex gap-x-3 items-center">
        <span className="text-secondary-500">
          {toLocalDateShort(createdAt)}
        </span>
        <span className="badge--outline text-sm">{category}</span>
        <span className="size-8 flex items-center justify-center rounded-full border-2 border-secondary-500 bg-secondary-300 text-secondary-700 font-bold">
          {count}
        </span>
        <Button
          onClick={() => setOpen(true)}
          variant="success"
          className="p-0 border-none"
        >
          <HiPencil className="size-6" />
        </Button>
        <Button
          onClick={() => removeProduct(id)}
          variant="danger"
          className="p-0 border-none"
        >
          <HiTrash className="size-6" />
        </Button>
        {open && (
          <Modal
            open={open}
            title="Edit product"
            onClose={() => setOpen(false)}
          >
            <ProductForm onClose={() => setOpen(false)} productId={id} />
          </Modal>
        )}
      </div>
    </div>
  );
}

export default Product;
