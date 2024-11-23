import {
  FaCreditCard,
  FaPaypal,
  FaApplePay,
  FaGooglePay,
} from "react-icons/fa";

const PaymentMethod = ({ modalprice }) => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2
        className="text-3xl font-bold text-center mb-10"
        style={{ color: "rgb(149, 56, 226)" }}
      >
        Payment Methods
      </h2>

      {/* Payment Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Credit Card */}
        <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg">
          <FaCreditCard
            className="text-4xl mb-4"
            style={{ color: "rgb(149, 56, 226)" }}
          />
          <h3 className="text-lg font-medium mb-2">Credit/Debit Card</h3>
          <p className="text-sm text-gray-600 text-center">
            Pay securely with your credit or debit card.
          </p>
        </div>

        {/* PayPal */}
        <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg">
          <FaPaypal
            className="text-4xl mb-4"
            style={{ color: "rgb(149, 56, 226)" }}
          />
          <h3 className="text-lg font-medium mb-2">PayPal</h3>
          <p className="text-sm text-gray-600 text-center">
            Use your PayPal account for fast checkout.
          </p>
        </div>

        {/* Apple Pay */}
        <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg">
          <FaApplePay
            className="text-4xl mb-4"
            style={{ color: "rgb(149, 56, 226)" }}
          />
          <h3 className="text-lg font-medium mb-2">Apple Pay</h3>
          <p className="text-sm text-gray-600 text-center">
            Pay easily with Apple Pay on your device.
          </p>
        </div>

        {/* Google Pay */}
        <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg">
          <FaGooglePay
            className="text-4xl mb-4"
            style={{ color: "rgb(149, 56, 226)" }}
          />
          <h3 className="text-lg font-medium mb-2">Google Pay</h3>
          <p className="text-sm text-gray-600 text-center">
            Use Google Pay for a seamless checkout.
          </p>
        </div>
      </div>

      {/* Card Details Form */}
      <div className="mt-12">
        <h3
          className="text-xl font-semibold mb-4"
          style={{ color: "rgb(149, 56, 226)" }}
        >
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
