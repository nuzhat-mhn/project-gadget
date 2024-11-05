import { Link } from "react-router-dom";

const ProductNabar = ({ handlesort }) => {
  return (
    <div className="bg-white shadow-xl">
      <ul className="p-6  flex flex-col gap-3  justify-center items-center">
        <p>
          <button
            className="btn hover:bg-brand w-[192px]"
            onClick={() => handlesort("all")}
          >
            All Product
          </button>
        </p>
        <p>
          <button
            to="/laptops"
            className="btn hover:bg-brand w-[192px]"
            onClick={() => handlesort("Laptops")}
          >
            Laptops
          </button>
        </p>
        <p>
          <button
            className="btn hover:bg-brand w-[192px]"
            onClick={() => handlesort("Smartphones")}
          >
            Phones
          </button>
        </p>
        <p>
          <button
            className="btn hover:bg-brand w-[192px]"
            onClick={() => handlesort("smartWacth")}
          >
            Smart Watches
          </button>
        </p>
        <p>
          <button
            className="btn hover:bg-brand w-[192px]"
            onClick={() => handlesort()}
          >
            Accessories
          </button>
        </p>
        <p>
          <button
            className="btn hover:bg-brand w-[192px]"
            onClick={() => handlesort()}
          >
            Mackbook
          </button>
        </p>
        <p>
          <button
            className="btn hover:bg-brand w-[192px]"
            onClick={() => handlesort()}
          >
            Iphone
          </button>
        </p>
      </ul>
    </div>
  );
};

export default ProductNabar;
