import { useCartStore } from "../../store/cart.store";

export const CartItem = ({ name, price, quantity }) => {
  const { deleteItemCart } = useCartStore();
  return (
    <div className="border-1 border-transparent border-b-Blue-300 text-sm py-4">
      <div className="flex justify-between items-center">
        <div>
          <h3>{name}</h3>
          <div className="flex gap-2">
            <p className="text-Red font-semibold">{quantity}x</p>
            <p className="text-gray-500">@${price.toFixed(2)}</p>
            <p className="text-Coral-600 font-semibold">
              {(quantity * price).toFixed(2)}
            </p>
          </div>
        </div>

        <img
          onClick={() => deleteItemCart(name)}
          className="  size-[15px] border border-Blue-300 rounded-full p-0.5 cursor-pointer"
          src="/assets/images/icon-remove-item.svg"
          alt=""
        />
      </div>
    </div>
  );
};
