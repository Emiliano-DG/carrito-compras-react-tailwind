import { CardContainer } from "./components/cardContainer";
import { Cart } from "./components/Cart";

function App() {
  return (
    <main className=" flex justify-center">
      <section className="  my-6">
        <h1 className="text-[2.5rem] font-bold mb-[30px]">Desserts</h1>
        <div className="desktop:flex desktop:gap-8 desktop:items-start">
          <CardContainer />
          <Cart />
        </div>
      </section>
    </main>
  );
}

export default App;
