import Banner from "../banner/Banner";
import BannerImg from "../bannerimg/BannerImg";
import DisplayAllCard from "../displayAllCard/DisplayAllCard";
import { Helmet } from "react-helmet-async";
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home page|Gadget Haven</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className=" m-7 mt-0 ">
        <div className=" bg-brand rounded-bl-3xl rounded-br-3xl text-white">
          <div className=" container  mx-auto">
            <Banner />
          </div>
        </div>
        <div>
          <BannerImg />
        </div>
      </div>
      <div className="container mx-auto">
        <DisplayAllCard />
      </div>
    </div>
  );
};

export default Home;
