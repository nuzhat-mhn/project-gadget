import ComposeChart from "./composeChart/ComposeChart";
import { Helmet } from "react-helmet-async";
const Statistic = () => {
  return (
    <div className="container mx-auto">
      <Helmet>
        <title>Statistic page|Gadget Haven</title>
      </Helmet>
      <h1 className="font-bold text-3xl text-black my-7">Statistics</h1>
      <ComposeChart />
    </div>
  );
};

export default Statistic;
