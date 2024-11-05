import { useContext, useEffect, useState } from "react";
import {
  deletewishlistData,
  getaddcardData,
  getwishlistData,
  setAddData,
} from "../utilities/Localstorage";
import AddWishItem from "./addWishlistItem/AddWishItem";
import { AssestContext } from "../../main";

const Wishlist = ({ warn, successfull, remove }) => {
  const { addToWishlist, addToCart, wishlist } = useContext(AssestContext);
  const [localwishlistData, setlocalwishlistData] = useState(null);
  useEffect(() => {
    const wishlistData = getwishlistData();
    setlocalwishlistData(wishlistData);
  }, [wishlist]);
  // handeAddCart function
  const handleAddCart = (item) => {
    const addcartItem = getaddcardData() || [];
    const copy = addcartItem.find(
      (element) => element.product_id == item.product_id
    );

    if (copy) {
      warn();
    } else {
      setAddData(item);
      const updatedCart = [...addcartItem, item];
      addToCart(updatedCart);
      successfull();
    }
  };

  // delete from localstore & whislist cart
  const deleteItem = (id) => {
    deletewishlistData(id);
    const wishlistData = getwishlistData();
    setlocalwishlistData(wishlistData);
    addToWishlist(wishlistData);
    remove();
  };
  return (
    <div>
      <div className="container mx-auto">
        <h1>hello Wishlist</h1>
        {localwishlistData?.map((item) => {
          return (
            <AddWishItem
              key={item.product_id}
              item={item}
              handleAddCart={handleAddCart}
              deleteItem={deleteItem}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Wishlist;
