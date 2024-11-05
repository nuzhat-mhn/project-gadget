import { useState } from "react";
import Cart from "../cart/Cart";
import Wishlist from "../wishlist/Wishlist";

const Dashboard = () => {
  const [togole, settogole] = useState(false);
  const [localData, setloalData] = useState(null);
  const hangletogol = () => {
    settogole(!togole);
  };
  return (
    <div>
      <div className="bg-brand text-white pt-7">
        <div className="w-[73%] mx-auto py-8">
          <h1 className="text-[32px] font-bold text-center">Dashboard</h1>
          <p className="text-center text-base mt-6 mb-8 w-[70%] mx-auto">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <div className="flex justify-center items-center gap-8">
            <button
              className="px-11 py-5 rounded-xl border-2 border-solid border-white text-black"
              style={{ background: togole ? "transparent" : "white" }}
              onClick={() => hangletogol()}
            >
              cart
            </button>
            <button
              className="px-12 py-5 rounded-xl border-2 border-solid border-white  text-black"
              style={{ background: togole ? "white" : "transparent" }}
              onClick={() => hangletogol()}
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="" style={{ display: togole ? "none" : "block" }}>
          <Cart localData={localData} setloalData={setloalData} />
        </div>
        <div className="" style={{ display: togole ? "block" : "none" }}>
          <Wishlist />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
