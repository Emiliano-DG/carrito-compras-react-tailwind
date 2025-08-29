export const CartButton = ({ text }) => {
  return (
    <button className="bg-Red text-Blue-50 p-2 rounded-full w-full hover:bg-red-900 transition-colors cursor-pointer">
      {text}
    </button>
  );
};
