import React, { PureComponent } from "react";
import { useLoaderData } from "react-router-dom";
import {
  ComposedChart,
  Area,
  Bar,
  CartesianGrid,
  Legend,
  XAxis,
  YAxis,
  Scatter,
  ResponsiveContainer,
} from "recharts";
const ComposeChart = () => {
  const alldata = useLoaderData();
  return (
    <div>
      <div className="w-full h-96">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={alldata}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <Legend />
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="product_title" axisLine={false} />
            <YAxis axisLine={false} />
            <Area
              type="monotone"
              dataKey="price"
              fill="rgba(149,56,226,0.15)"
              stroke="#8884d8"
            />
            <Bar dataKey="price" barSize={40} fill="#9538E2" />
            <Scatter dataKey="rating" fill="red" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ComposeChart;
