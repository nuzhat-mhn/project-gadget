import { useLoaderData, useParams } from "react-router-dom";
import { GiRoyalLove } from "react-icons/gi";
import {
  getaddcardData,
  getwishlistData,
  setAddData,
  setWishlistData,
} from "../utilities/Localstorage";
import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// context
import { AssestContext } from "../../main";
import { Helmet } from "react-helmet-async";
const ProductDetails = () => {
  const params = useParams();
  const allproduct = useLoaderData();

  // tostify
  const successfullcard = () => {
    toast.success("product added to the cart", {
      position: "top-left",
    });
  };
  const warncard = () => {
    toast.warn("product already Added to the cart!", {
      position: "top-left",
    });
  };
  const successfullWishlist = () => {
    toast.success("product added to the wishlist", {
      position: "top-left",
    });
  };
  const warnWishlist = () => {
    toast.warn("Product is already to the wishlist!", {
      position: "top-left",
    });
  };
  const findproduct = allproduct.find(
    (product) => product.product_id === params.id
  );
  const {
    product_id,
    product_title,
    price,
    category,
    Specification,
    availability,
    description,
  } = findproduct;
  // context
  const { addToCart, addToWishlist } = useContext(AssestContext);
  // handleAddCart function
  const handleAddCart = (item) => {
    const addcartItem = getaddcardData();
    const copy = addcartItem.find(
      (element) => element.product_id == item.product_id
    );

    if (copy) {
      warncard();
    } else {
      setAddData(item);
      const updatedCart = [...addcartItem, item];
      addToCart(updatedCart);
      successfullcard();
    }
  };

  // handleWishlist function
  const handleWishlist = (item) => {
    const oldData = getwishlistData();
    const copy = oldData?.find(
      (element) => element.product_id == item.product_id
    );
    if (copy) {
      warnWishlist();
    } else {
      setWishlistData(item);
      const getAddcartData = getwishlistData();
      addToWishlist(getAddcartData);
      successfullWishlist();
    }
  };
  return (
    <div>
      <ToastContainer />
      <Helmet>
        <title>Product-Details|Gadget Haven</title>
      </Helmet>
      <div className="bg-brand text-white pt-7">
        <div className="w-[73%] mx-auto pb-[200px]">
          <h1 className="text-[32px] font-bold text-center">Product Details</h1>
          <p className="text-center text-base mt-6 mb-8 w-[70%] mx-auto">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="hero  -mt-48 text-black shadow-xl bg-white rounded-3xl">
          <div className="hero-content grid grid-cols-[25%_75%] gap-6 w-full max-w-full p-8">
            <img
              src={findproduct.product_image}
              className="max-w-sm rounded-lg shadow-2xl w-full h-full"
            />
            <div>
              <h2 className="text-5xl font-bold text-[#09080F]">
                {product_title}
              </h2>
              <p className="py-6">price: {price}</p>
              <span style={{ background: availability ? `green` : "red" }}>
                {availability ? `in stock` : `out of stock`}
              </span>
              <p>{description}</p>
              <p className="font-bold text-[18px] text-[#09080F]">
                Specification
              </p>
              <ul className="list-decimal pl-5 text-[rgba(9,8,15,0.6)]">
                {Specification.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <div>
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
              </div>
              <div className="flex items-center gap-5">
                <button
                  className="btn btn-primary"
                  onClick={() => handleAddCart(findproduct)}
                >
                  Add to cart
                </button>
                <button
                  onClick={() => handleWishlist(findproduct)}
                  className=" text-3xl border-2 border-solid border-[rgba(0,0,0,0.5)] rounded-full w-10 h-10 flex justify-center items-center"
                >
                  <GiRoyalLove />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
