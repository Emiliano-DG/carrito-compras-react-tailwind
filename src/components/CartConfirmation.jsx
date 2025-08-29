import { CartButton } from "./CartButton";
import { CartConfirmationItem } from "./CartConfirmationItem";
import { CartTotal } from "./CartTotal";

export const CartConfirmation = () => {
  return (
    <dialog
      open
      className="bg-black/50 w-full h-screen grid place-content-center"
    >
      <div className="w-[375px] py-10 px-6 bg-white rounded-xl">
        <img
          src="/assets/images/icon-order-confirmed.svg"
          alt="icon-order-confirmed.svg"
        />
        <h2 className="text-[2.5rem] font-bold">Order Confirmed</h2>
        <p>Me hope you enjoy your food!</p>
        <div className="bg-Blue-50">
          <CartConfirmationItem />
          <CartConfirmationItem />
          <CartConfirmationItem />
          <CartTotal />
        </div>
        <CartButton text="Start New Order" />
      </div>
    </dialog>
  );
};
