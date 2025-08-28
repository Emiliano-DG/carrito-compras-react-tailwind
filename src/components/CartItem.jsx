export const CartItem = () => {
  return (
    <div className="border-1 border-transparent border-b-Blue-300 text-sm py-4">
      <div className="flex justify-between items-center">
        <div>
          <h3>Vanilla Panna</h3>
          <div className="flex gap-2">
            <p className="text-Red font-semibold">1x</p>
            <p className="text-gray-500">@$6,50</p>
            <p className="text-Blue-500 font-semibold">$13</p>
          </div>
        </div>

        <img
          className=" size-[15px] border border-Blue-300 rounded-full p-0.5 cursor-pointer"
          src="/assets/images/icon-remove-item.svg"
          alt=""
        />
      </div>
    </div>
  );
};
