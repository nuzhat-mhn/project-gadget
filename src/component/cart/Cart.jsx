import { useContext, useEffect, useState } from "react";
import {
  clearAll,
  deletedata,
  getaddcardData,
} from "../utilities/Localstorage";
import AddcartItem from "./addcartItem/AddcartItem";
import { AssestContext } from "../../main";
import { useNavigate } from "react-router-dom";

const Cart = ({ setloalData, localData }) => {
  // context
  const { addToCart, cartData, setWishlist } = useContext(AssestContext);
  const [price, setprice] = useState(0);
  useEffect(() => {
    const Localstoragedata = getaddcardData();
    setloalData(Localstoragedata);
    console.log("cartDatea");
    sumOfPrice();
  }, [cartData]);
  // delete item from local storage and also the product cart
  const deleteItem = (id) => {
    deletedata(id);
    const Localstoragedata = getaddcardData();
    setloalData(Localstoragedata);
    addToCart(Localstoragedata);
  };
  // set the total price of product
  const sumOfPrice = () => {
    const totalprice = cartData?.reduce(
      (sum, item) => sum + (item.price || 0),
      0
    );
    setprice(totalprice);
  };
  // handlesort function
  const handlesort = () => {
    const sortedData = [...localData].sort((a, b) => a.price - b.price);
    setloalData(sortedData);
  };
  // handlemodal function
  const handlemodal = () => {
    document.getElementById("my_modal_5").showModal();
    clearAll();
    addToCart([]);
    setWishlist([]);
  };
  const navigate = useNavigate();
  // handleNavigate function
  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Thanks for Purchasing</h3>
          <p className="py-4">price: {price}</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn" onClick={handleNavigate}>
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-10">
          <h2 className="text-black font-bold text-3xl">Cart</h2>
          <div className="flex items-center justify-normal gap-6">
            <p className="text-black font-bold text-2xl">Total cost: {price}</p>
            <div className="flex items-center gap-4">
              <button
                className="btn hover:bg-brand hove:text-white "
                onClick={() => handlesort()}
                disabled={price === 0 ? true : false}
              >
                Sort by Price
              </button>
              <button
                className="btn hover:bg-brand hove:text-white "
                onClick={() => handlemodal()}
                disabled={price === 0 ? true : false}
              >
                Purcase
              </button>
            </div>
          </div>
        </div>
        {localData?.map((item, idx) => {
          return <AddcartItem key={idx} item={item} deleteItem={deleteItem} />;
        })}
      </div>
    </div>
  );
};

export default Cart;
