import { CartItem } from "./CartItem";
import { CartTotal } from "./CartTotal";
import { CartButton } from "./CartButton";
import { useCartStore } from "../../store/cart.store";

export const Cart = () => {
  const { toggleClose, cart, totalQuantityCard } = useCartStore();
  return (
    <div className="bg-white p-6 rounded-xl shadow-xl border border-Blue-100">
      <h2 className="text-Coral-600 font-bold text-xl mb-6">
        Your Cart ({totalQuantityCard()})
      </h2>

      {cart.map((item, index) => (
        <CartItem key={index} {...item} />
      ))}
      <CartTotal />

      <div className="bg-Blue-100 flex gap-1 p-2 mb-6">
        <img
          src="/assets/images/icon-carbon-neutral.svg"
          alt="icon-carbon-neutral"
        />
        <p className="text-sm ">
          This is <span className="font-bold">carbon neutral</span> delivery
        </p>
      </div>
      <CartButton onClick={toggleClose} text="Confirm Order" />
    </div>
  );
};
