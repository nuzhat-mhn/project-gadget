import { MdDeleteForever } from "react-icons/md";
const AddWishItem = ({ item, deleteItem, handleAddCart }) => {
  const { product_id, product_title, price, product_image, description } = item;

  return (
    <div className="p-7 shadow-lg rounded-xl">
      <div className="flex justify-normal items-start gap-6">
        <div className="h-[200px]">
          <img
            src={product_image}
            alt={product_title}
            className="w-full h-full"
          />
        </div>
        <div className="flex flex-grow justify-between items-center">
          <div>
            <h3 className="text-2xl text-black font-bold">{product_title}</h3>
            <p className="text-base text-black font-medium my-7">
              {description}{" "}
            </p>
            <p>price: ${price} </p>
            <button
              className="btn btn-primary mt-5"
              onClick={() => handleAddCart(item)}
            >
              Add to cart
            </button>
          </div>
          <div>
            <button
              onClick={() => deleteItem(product_id)}
              className="text-red-500 text-2xl"
            >
              <MdDeleteForever />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddWishItem;
