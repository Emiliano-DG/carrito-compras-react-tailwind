export const CartConfirmationItem = ({ image, name, price, quantity }) => {
  return (
    <div className="border-1 border-transparent border-b-Blue-300 text-sm py-4">
      <div className="flex justify-between items-center px-4">
        <div className="flex gap-4">
          <img
            className="size-12 "
            src={image.thumbnail}
            alt="image-baklava-thumbnail"
          />
          <div>
            <h3 className="font-semibold">{name}</h3>
            <div className="flex gap-2">
              <p className="text-Red font-semibold">{quantity}x</p>
              <p className="text-gray-500">@${price.toFixed(2)}</p>
            </div>
          </div>
        </div>

        <p className="text-Blue-900 font-bold">
          ${(quantity * price).toFixed(2)}
        </p>
      </div>
    </div>
  );
};
