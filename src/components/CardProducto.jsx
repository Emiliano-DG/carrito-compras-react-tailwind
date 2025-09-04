import { useCartStore } from "../store/cart.store";
import { AddToCartButton } from "./AddToCardButton";

export const CardProducto = ({ image, name, category, price }) => {
  const { addItemToCard, updateItemCart, deleteItemCart, cart } =
    useCartStore();

  // variable contador
  let quantity = 0;
  const itemInCart = cart.filter((item) => item.name === name);

  if (itemInCart.length > 0) {
    quantity = itemInCart[0].quantity;
  }

  const addOne = () => {
    const newQuantity = quantity + 1;
    if (newQuantity > 1) {
      updateItemCart({
        image,
        name,
        price,
        quantity: newQuantity,
      });
    } else {
      addItemToCard({
        image,
        name,
        price,
        quantity: newQuantity,
      });
    }
  };

  const subtractOne = () => {
    const newQuantity = quantity - 1;

    if (newQuantity === 0) {
      deleteItemCart(name);
    } else {
      updateItemCart({
        image,
        name,
        price,
        quantity: newQuantity,
      });
    }
  };
  return (
    <div className="relative bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-4">
      {/* IMAGEN */}
      <picture>
        <source media="(min-width:768px)" srcSet={image.tablet} />
        <source media="(min-width:1440px)" srcSet={image.desktop} />
        <img
          className="rounded-lg mb-[38px]"
          src={image.mobile}
          alt="imagen-mobile"
        />
      </picture>

      {/* BOTÓN */}
      <AddToCartButton
        quantity={quantity}
        addOne={addOne}
        subtractOne={subtractOne}
      />

      {/* CATEGORIA,NOMBRE Y PRECIO DEL PRODUCTO */}
      <p className="text-Gray-700    text-sm">{category}</p>
      <h2 className="font-bold">{name}</h2>
      <p className=" text-Coral-600 font-semibold">${price.toFixed(2)}</p>
    </div>
  );
};
