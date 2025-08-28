import { useState } from "react";

export const CardProducto = ({ image, name, category, price }) => {
  const [quantity, setQuantity] = useState(0);

  const addOne = () => {
    setQuantity(quantity + 1);
  };

  const subtractOne = () => {
    setQuantity(quantity - 1);
  };
  return (
    <div className="relative">
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
          className="bg-blue-50  border-2 border-Blue-300 rounded-full w-40 flex justify-center p-3 gap-2 absolute inset-x-0 mx-auto top-[192px] cursor-pointer hover:border-Red transition-colors"
        >
          <img
            src="assets/images/icon-add-to-cart.svg"
            alt="icon-add-to-cart"
          />
          <span>Add to Card</span>
        </button>
      ) : (
        <div className="bg-Red  rounded-full w-40 flex justify-between items-center p-3 gap-2 absolute inset-x-0 mx-auto top-[192px] cursor-pointer">
          {/* BOTON DE DISMINUCION */}
          <img
            onClick={subtractOne}
            className="border border-Blue-50 size-[18px]  rounded-full p-1 hover:border-Blue-500"
            src="assets/images/icon-decrement-quantity.svg"
            alt="icon-decrement-quantity"
          />
          {/* CONTADOR */}
          <p className="text-Blue-50">{quantity}</p>
          {/* BOTON DE INCREMENTO */}
          <img
            onClick={addOne}
            className="border border-Blue-50 size-[18px] rounded-full p-1 hover:border-Blue-500"
            src="./assets/images/icon-increment-quantity.svg"
            alt="icon-increment-quantity"
          />
        </div>
      )}
      {/* CATEGORIA,NOMBRE Y PRECIO DEL PRODUCTO */}
      <p className="text-gray-500    text-sm">{category}</p>
      <h2 className="font-bold">{name}</h2>
      <p className=" text-Red font-semibold">${price}</p>
    </div>
  );
};
