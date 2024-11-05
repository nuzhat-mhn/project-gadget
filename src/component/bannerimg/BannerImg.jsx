import bannerimg from "../../assets/banner.jpg";
const BannerImg = () => {
  return (
    <div className="-mt-44 bg-[rgba(255,255,255,0.5)] border-2 border-solid border-white w-[73%]  mx-auto rounded-3xl">
      <div className="p-6 h-[600px]">
        <img
          src={bannerimg}
          alt=""
          className="w-full h-full rounded-3xl object-cover"
        />
      </div>
    </div>
  );
};

export default BannerImg;
