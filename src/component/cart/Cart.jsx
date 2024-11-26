import { useContext, useEffect, useState } from "react";
import {
  clearAll,
  deletedata,
  getaddcardData,
} from "../utilities/Localstorage";
import AddcartItem from "./addcartItem/AddcartItem";
import { AssestContext } from "../../main";
import { useNavigate } from "react-router-dom";
import { HiCheckBadge } from "react-icons/hi2";
import PaymentMethod from "../paymentMethod/PaymentMethod";
const Cart = ({ setloalData, localData, remove }) => {
  // context
  const { addToCart, cartData, setWishlist } = useContext(AssestContext);
  const [price, setprice] = useState(0);
  const [modalprice, setmodalprice] = useState(0);
  useEffect(() => {
    const Localstoragedata = getaddcardData();
    setloalData(Localstoragedata);
    sumOfPrice();
  }, [cartData]);
  // delete item from local storage and also the product cart
  const deleteItem = (id) => {
    deletedata(id);
    const Localstoragedata = getaddcardData();
    setloalData(Localstoragedata);
    addToCart(Localstoragedata);
    remove();
  };
  // set the total price of product
  const sumOfPrice = () => {
    const totalprice = cartData?.reduce(
      (sum, item) => sum + (item.price || 0),
      0
    );
    setprice(totalprice);
  };
  // set the price for show the modal
  const sumOfModalPrice = () => {
    const total = cartData?.reduce((sum, item) => sum + (item.price || 0), 0);
    setmodalprice(total);
  };
  // handlesort function
  const handlesort = () => {
    const getlocalStoredata = getaddcardData();
    const sortedData = [...getlocalStoredata].sort((a, b) => a.price - b.price);
    setloalData(sortedData);
  };
  // handlemodal function
  const handlemodal = () => {
    document.getElementById("my_modal_5").showModal();
    sumOfModalPrice();
  };
  // payment button function
  const navigate = useNavigate();
  const paymentSuccess = () => {
    clearAll();
    addToCart([]);
    setWishlist([]);
    navigate("/");
  };

  return (
    <div>
      {/* modal */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="flex justify-center items-center ">
            <HiCheckBadge className="text-green-500 text-2xl" />
          </div>
          {/* <h3 className="font-bold text-lg text-center">
            Thanks for Purchasing
          </h3> */}
          <PaymentMethod
            modalprice={modalprice}
            paymentSuccess={paymentSuccess}
          />
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
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
