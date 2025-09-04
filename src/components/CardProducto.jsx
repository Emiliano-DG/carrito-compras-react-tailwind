import { useCartStore } from "../store/cart.store";

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

      {quantity == 0 ? (
        // BOTON SELECCIONAR PRODUCTO
        <button
          onClick={addOne}
          className="bg-Gris border-2 border-Coral  rounded-full w-40 flex justify-center p-3 gap-2 absolute inset-x-0 mx-auto top-[170px] cursor-pointer hover:border-Coral-600 transition-colors"
        >
          <img
            src="assets/images/icon-add-to-cart.svg"
            alt="icon-add-to-cart"
          />
          <span className="text-Gray-700">Add to Card</span>
        </button>
      ) : (
        <div className="bg-Coral  rounded-full w-40 flex justify-between items-center p-3 gap-2 absolute inset-x-0 mx-auto top-[170px] cursor-pointer">
          {/* BOTON DE DISMINUCION */}
          <img
            onClick={subtractOne}
            className="border border-Gris size-[18px]  rounded-full p-1 hover:border-Coral-600"
            src="assets/images/icon-decrement-quantity.svg"
            alt="icon-decrement-quantity"
          />
          {/* CONTADOR */}
          <p className="text-Gris">{quantity}</p>
          {/* BOTON DE INCREMENTO */}
          <img
            onClick={addOne}
            className="border border-Gris size-[18px] rounded-full p-1 hover:border-Coral-600"
            src="./assets/images/icon-increment-quantity.svg"
            alt="icon-increment-quantity"
          />
        </div>
      )}
      {/* CATEGORIA,NOMBRE Y PRECIO DEL PRODUCTO */}
      <p className="text-Gray-700    text-sm">{category}</p>
      <h2 className="font-bold">{name}</h2>
      <p className=" text-Coral-600 font-semibold">${price.toFixed(2)}</p>
    </div>
  );
};
