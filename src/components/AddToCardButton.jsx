export const AddToCartButton = ({ quantity, addOne, subtractOne }) => {
  // Estado inicial (cuando no hay cantidad todavía)
  if (quantity === 0) {
    return (
      <button
        onClick={addOne}
        className="bg-Gris border-2 border-Coral  rounded-full w-40 flex justify-center p-3 gap-2 absolute inset-x-0 mx-auto top-[170px] cursor-pointer hover:border-Coral-600 transition-colors"
      >
        <img
          src="assets/images/icon-add-to-cart.svg"
          alt="icono agregar al carrito"
        />
        <span>Add to Cart</span>
      </button>
    );
  }

  // Estado cuando ya hay productos en el carrito
  return (
    <div className="bg-Coral  rounded-full w-40 flex justify-between items-center p-3 gap-2 absolute inset-x-0 mx-auto top-[170px] cursor-pointer">
      {/* BOTÓN DE DISMINUIR */}
      <img
        onClick={subtractOne}
        className="border border-Gris size-[18px] rounded-full p-1 hover:border-Coral-600"
        src="assets/images/icon-decrement-quantity.svg"
        alt="disminuir cantidad"
      />

      {/* CONTADOR */}
      <p className="text-Gris">{quantity}</p>

      {/* BOTÓN DE AUMENTAR */}
      <img
        onClick={addOne}
        className="border border-Gris size-[18px] rounded-full p-1 hover:border-Coral-600"
        src="assets/images/icon-increment-quantity.svg"
        alt="aumentar cantidad"
      />
    </div>
  );
};
