const Footer = () => {
  return (
    <div className="py-16 bg-white shadow-lg">
      {/* Main Content */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2
            className="font-bold text-3xl mb-3"
            style={{ color: "rgb(149, 56, 226)" }}
          >
            Gadget Heaven
          </h2>
          <p className="text-base text-gray-700">
            Leading the way in cutting-edge technology and innovation.
          </p>
        </div>
        <hr className="border-gray-300" />
        {/* Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
          <div>
            <h3
              className="text-lg font-medium mb-3"
              style={{ color: "rgb(149, 56, 226)" }}
            >
              Services
            </h3>
            <ul className="text-gray-700 space-y-2">
              <li>Product Support</li>
              <li>Order Tracking</li>
              <li>Shipping & Delivery</li>
              <li>Returns</li>
            </ul>
          </div>
          <div className="text-center">
            <h3
              className="text-lg font-medium mb-3"
              style={{ color: "rgb(149, 56, 226)" }}
            >
              Company
            </h3>
            <ul className="text-gray-700 space-y-2">
              <li>About Us</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="w-3/2 text-end">
            <h3
              className="text-lg font-medium mb-3"
              style={{ color: "rgb(149, 56, 226)" }}
            >
              Legal
            </h3>
            <ul className="text-gray-700 space-y-2">
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Copyright Section */}
      <div
        className="mt-10 py-4 text-center text-white"
        style={{ backgroundColor: "rgb(149, 56, 226)" }}
      >
        <p className="text-sm">
          © {new Date().getFullYear()} Gadget Heaven. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
