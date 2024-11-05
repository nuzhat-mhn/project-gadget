const Footer = () => {
  return (
    <div className="py-28 bg-white shadow-lg">
      <div className="container mx-auto py-10">
        <h2 className="font-bold text-3xl text-black text-center mb-5">
          Gadget Heaven
        </h2>
        <p className="text-base text-black text-center">
          Leading the way in cutting-edge technology and innovation.
        </p>
      </div>
      <hr />
      <div className="container mx-auto grid grid-cols-3 mt-8">
        <div>
          <h3 className="text-[18px] text-black font-medium ">Services</h3>
          <ul>
            <li>Product Support</li>
            <li>Order Tracking</li>
            <li>Shipping & Delivery</li>
            <li>Returns</li>
          </ul>
        </div>
        <div>
          <h3 className="text-[18px] text-black font-medium">Company</h3>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h3 className="text-[18px] text-black font-medium">Legal</h3>
          <ul>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
