import { CardProducto } from "./CardProducto";
import data from "../../data.json";

export const CardContainer = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6 mb-6  w-[327px] md:w-[700px]">
      {data.map((item, index) => (
        <CardProducto key={index} {...item} />
      ))}
    </div>
  );
};
