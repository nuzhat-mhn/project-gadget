import { Link } from "react-router-dom";

const SingleProduct = ({ product }) => {
  return (
    <div>
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={product.product_image} alt={product.product_title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product.product_title}</h2>
          <p>Price: {product.price}</p>
          <div className="card-actions justify-end">
            <Link
              to={`/details/${product.product_id}`}
              className="btn btn-primary"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
