import "./Chart.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Chart() {

    const data = [
        {
          name: 'Page A',
          "Active User": 4000,
        },
        {
          name: 'Page B',
          "Active User": 3000,
        },
        {
          name: 'Page C',
          "Active User": 2000,
        },
        {
          name: 'Page D',
          "Active User": 2700,
        },
        {
            name: 'Page E',
            "Active User": 2700,
        },
        {
          name: 'Page F',
          "Active User": 2390,
        },
        {
          name: 'Page G',
          "Active User": 3490,
        },
        {
          name: 'Page H',
          "Active User": 3490,
        },
        {
          name: 'Page I',
          "Active User": 3490,
        },
        {
          name: 'Page J',
          "Active User": 3490,
        },
        {
          name: 'Page K',
          "Active User": 3490,
        },
        {
          name: 'Page L',
          "Active User": 3490,
        },
      ];

  return (
    <div className="chart">
      <h3 className="chartTitle">Section Of Charts</h3>
      <ResponsiveContainer width="100%" aspect={4/1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd"/>
          <Line type="monotone" dataKey="Active User"/>
          <Tooltip/>
          <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}