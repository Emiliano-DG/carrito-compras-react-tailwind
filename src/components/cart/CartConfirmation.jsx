import { useCartStore } from "../../store/cart.store";
import { CartButton } from "./CartButton";
import { CartConfirmationItem } from "../CartConfirmationItem";
import { CartTotal } from "./CartTotal";

export const CartConfirmation = () => {
  const { isClose, toggleClose, cart, resetCart } = useCartStore();

  const handleNewOrder = () => {
    (toggleClose(), resetCart());
  };

  return (
    <dialog
      hidden={isClose}
      className="bg-black/50 w-full fixed h-screen grid place-content-center"
    >
      <div className="w-[375px] md:w-[600px] py-6 px-6 bg-white rounded-xl">
        <img
          src="/assets/images/icon-order-confirmed.svg"
          alt="icon-order-confirmed.svg"
        />
        <h2 className="text-[2.5rem] font-bold">Order Confirmed</h2>
        <p>Me hope you enjoy your food!</p>
        <div className="bg-Blue-50">
          {cart.map((item, index) => (
            <CartConfirmationItem key={index} {...item} />
          ))}
          <CartTotal />
        </div>
        <CartButton onClick={handleNewOrder} text="Start New Order" />
      </div>
    </dialog>
  );
};
