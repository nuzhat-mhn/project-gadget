import ProductNabar from "../productNavbar/ProductNabar";
import SingleProduct from "../../singleproduct/SingleProduct";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
const DisplayAllCard = () => {
  const allproduct = useLoaderData();
  const [products, setproduct] = useState([]);
  useEffect(() => {
    setproduct(allproduct);
  }, []);

  // handle sorting function
  const handlesort = (productname = null) => {
    if (productname === "all") {
      setproduct(allproduct);
    } else if (productname === "Laptops") {
      const laptop = [...allproduct].filter(
        (item) => item.category === productname
      );
      setproduct(laptop);
    } else if (productname === "Smartphones") {
      const phone = [...allproduct].filter(
        (item) => item.category === productname
      );
      setproduct(phone);
    } else if (productname === "smartWacth") {
      const wacth = [...allproduct].filter(
        (item) => item.category === productname
      );
      setproduct(wacth);
    } else {
      setproduct([]);
    }
  };
  return (
    <div className="container mx-auto">
      <h2 className="font-bold text-4xl text-center mb-7">
        Explore Cutting-Edge Gadgets
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-[20%_80%] gap-6">
        <ProductNabar handlesort={handlesort} />
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {products.length !== 0 ? (
            products.map((product) => {
              return (
                <SingleProduct key={product.product_id} product={product} />
              );
            })
          ) : (
            <h1 className="text-4xl font-bold">No Data Found!!!</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default DisplayAllCard;
