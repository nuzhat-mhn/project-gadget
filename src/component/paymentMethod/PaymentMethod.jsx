import {
  FaCreditCard,
  FaPaypal,
  FaApplePay,
  FaGooglePay,
} from "react-icons/fa";
import bkash from "../../assets/bkashlogo.png";
import nagad from "../../assets/nagadlogo.png";
const PaymentMethod = ({ modalprice, paymentSuccess }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2
        className="text-3xl font-bold text-center mb-10"
        style={{ color: "rgb(149, 56, 226)" }}
      >
        Payment Methods
      </h2>

      {/* Payment Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-fit">
        {/* Cash on Delivery */}
        <div className="flex flex-col justify-center text-center items-center p-3 bg-white shadow-md rounded-lg">
          <FaCreditCard
            className="text-4xl mb-4"
            style={{ color: "rgb(149, 56, 226)" }}
          />
          <h3 className="text-lg font-medium mb-2">Cash on Delivery</h3>
        </div>

        {/* Nagad */}
        <div className="flex flex-col justify-center text-center items-center p-3 bg-white shadow-md rounded-lg">
          <div className="w-14">
            <img src={nagad} alt="" />
          </div>
          <h3 className="text-lg font-medium mb-2">Nagad</h3>
        </div>

        {/* Bkash */}
        <div className="flex flex-col justify-center text-center items-center p-3 bg-white shadow-md rounded-lg">
          <div className="w-14">
            <img src={bkash} alt="" />
          </div>
          <h3 className="text-lg font-medium mb-2">Bkash</h3>
        </div>
      </div>

      {/* Card Details Form */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold mb-4 bg-[rgb(149, 56, 226)]">
          Enter Card Details
        </h3>
        <form className="bg-white shadow-md rounded-lg p-6 space-y-6">
          {/* Card Number */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Card Number</span>
            </label>
            <input
              type="text"
              placeholder="1234 5678 9012 3456"
              className="input input-bordered w-full"
            />
          </div>

          {/* Expiry Date and CVV */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Expiry Date</span>
              </label>
              <input
                type="text"
                placeholder="MM/YY"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">CVV</span>
              </label>
              <input
                type="text"
                placeholder="123"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <p className="py-4">Total price: {modalprice}</p>
          {/* Name on Card */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name on Card</span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="input input-bordered w-full"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-block"
            onClick={paymentSuccess}
            style={{
              backgroundColor: "rgb(149, 56, 226)",
              borderColor: "rgb(149, 56, 226)",
              color: "#fff",
            }}
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentMethod;
