import { CartItem } from "./CartItem";

export const Cart = () => {
  return (
    <div className="bg-Blue-50  p-6 rounded-xl">
      <h2 className="text-Red font-bold text-xl mb-6">Your Cart (7)</h2>
      <CartItem />
      <CartItem />
      <CartItem />
      <div className="flex justify-between items-center my-6">
        <p className="text-sm">Order Total</p>
        <p className="text-2xl font-bold">$46,5</p>
      </div>
      <div className="bg-Blue-100 flex gap-1 p-2 mb-6">
        <img
          src="/assets/images/icon-carbon-neutral.svg"
          alt="icon-carbon-neutral"
        />
        <p className="text-sm ">
          This is <span className="font-bold">carbon neutral</span> delivery
        </p>
      </div>
      <button className="bg-Red text-Blue-50 p-2 rounded-full w-full hover:bg-red-900 transition-colors cursor-pointer">
        Confirm Order
      </button>
    </div>
  );
};
