import { CartItem } from "./CartItem";
import { CartTotal } from "./CartTotal";
import { CartButton } from "./CartButton";

export const Cart = () => {
  return (
    <div className="bg-Blue-50  p-6 rounded-xl">
      <h2 className="text-Red font-bold text-xl mb-6">Your Cart (7)</h2>
      <CartItem />
      <CartItem />
      <CartItem />
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
      <CartButton text="Confirm Order" />
    </div>
  );
};
