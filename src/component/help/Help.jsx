import { useState } from "react";
import { Helmet } from "react-helmet-async";
import cart1 from "../../assets/addtocart1.png";
import wishlist1 from "../../assets/wishlistcart.png";
import details from "../../assets/seedetails.png";
import purcase from "../../assets/purcase.png";
import sort from "../../assets/sort.png";
const Help = () => {
  const [togol, settogol] = useState("1");
  const handlehelp = (id) => {
    if (id === 1) {
      settogol("1");
    } else if (id === 2) {
      settogol("2");
    } else if (id === 3) {
      settogol("3");
    } else if (id === 4) {
      settogol("4");
    } else if (id === 5) {
      settogol("5");
    }
  };
  return (
    <div>
      <Helmet>
        <title>Help|Gadget Haven</title>
      </Helmet>

      <div className="container mx-auto">
        <h1 className="text-2xl text-black my-4 font-bold">
          Search Of Your Help Library:{" "}
        </h1>
        <div className="w-full">
          <input
            type="text"
            placeholder="type your problem here"
            className="w-full placeholder:text-brand p-4 border-2 border-solid border-brand"
          />
        </div>
        <h2 className="text-lg text-black font-semibold my-4">
          All help topics:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-[20%_80%] gap-5">
          <div>
            <button
              className="btn w-full py-3 px-5 text-black text-base font-medium hover:bg-brand mb-4 h-fit border-brand"
              style={{
                background: togol === "1" ? "rgb(149 56 226)" : "transparent",
              }}
              onClick={() => handlehelp(1)}
            >
              How to Show the product Details
            </button>
            <button
              className="btn w-full py-3 px-5 text-black text-base font-medium hover:bg-brand mb-4 h-fit border-brand"
              onClick={() => handlehelp(2)}
              style={{
                background: togol === "2" ? "rgb(149 56 226)" : "transparent",
              }}
            >
              How to purchase products
            </button>
            <button
              className="btn w-full py-3 px-5 text-black text-base font-medium hover:bg-brand mb-4 h-fit border-brand"
              onClick={() => handlehelp(3)}
              style={{
                background: togol === "3" ? "rgb(149 56 226)" : "transparent",
              }}
            >
              How to Wishlist products
            </button>
            <button
              className="btn w-full py-3 px-5 text-black text-base font-medium hover:bg-brand mb-4 h-fit border-brand"
              onClick={() => handlehelp(4)}
              style={{
                background: togol === "4" ? "rgb(149 56 226)" : "transparent",
              }}
            >
              How to add products
            </button>
            <button
              className="btn w-full py-3 px-5 text-black text-base font-medium hover:bg-brand mb-4 h-fit border-brand"
              onClick={() => handlehelp(5)}
              style={{
                background: togol === "5" ? "rgb(149 56 226)" : "transparent",
              }}
            >
              How to filter products
            </button>
          </div>
          {/* display information */}
          <div className="overflow-hidden bg-brand text-white p-4">
            <div style={{ display: togol === "1" ? "block" : "none" }}>
              <p className="text-2xl font-medium">
                In your product item bottom right you can show a button called{" "}
                <b className="text-yellow-300">Details</b>. By click this button
                you can show your products details{" "}
              </p>
              <div className="card card-compact bg-base-100 w-96 shadow-xl mt-3">
                <figure>
                  <img src={details} alt="Shoes" />
                </figure>
              </div>
            </div>
            <div style={{ display: togol === "2" ? "block" : "none" }}>
              <p className="text-2xl font-medium">
                After you add item in your cart you can purchase the product by
                clickng the <b className="text-yellow-300">purchase</b> button.
              </p>
              <div className="card card-compact bg-base-100 w-96 shadow-xl mt-3 w-full">
                <figure className="w-full">
                  <img src={purcase} alt="Shoes" className="w-full" />
                </figure>
              </div>
            </div>
            <div style={{ display: togol === "3" ? "block" : "none" }}>
              <p className="text-2xl font-medium">
                After going to the product details option your can see the{" "}
                <b className="text-yellow-300">hart</b> icon button . By click
                this button your item is added to the wishlist.
              </p>
              <div className="card card-compact bg-base-100 w-96 shadow-xl mt-3">
                <figure>
                  <img src={wishlist1} alt="Shoes" />
                </figure>
              </div>
            </div>
            <div style={{ display: togol === "4" ? "block" : "none" }}>
              <p className="text-2xl font-medium">
                After going to the product details option your can see the{" "}
                <b className="text-yellow-300">Add cart</b> button . By click
                this button your item is added to the cart.
              </p>
              <div className="card card-compact bg-base-100 shadow-xl mt-3">
                <figure>
                  <img src={cart1} alt="Shoes" />
                </figure>
              </div>
            </div>
            <div style={{ display: togol === "5" ? "block" : "none" }}>
              <p className="text-2xl font-medium">
                After you add item in your cart you can short the product on
                their prices by clickng the{" "}
                <b className="text-yellow-300">sort by price</b> button.
              </p>
              <div className="card card-compact bg-base-100  shadow-xl mt-3 w-full">
                <figure className="w-full">
                  <img src={sort} alt="Shoes" className="w-full" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
