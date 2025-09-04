import { useCartStore } from "../store/cart.store";
import { CardProducto } from "./CardProducto";

export const CardContainer = () => {
  const { products } = useCartStore();

  return (
    <div className="grid md:grid-cols-3 gap-6 mb-6  w-[327px] md:w-[668px]">
      {products.map((item, index) => (
        <CardProducto key={index} {...item} />
      ))}
    </div>
  );
};
