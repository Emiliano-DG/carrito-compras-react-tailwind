export const CartButton = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-Coral text-Gris p-2 m-1 rounded-full w-full hover:bg-Coral-600 transition-colors cursor-pointer"
    >
      {text}
    </button>
  );
};
