import React, { PureComponent } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "0100",
    uv: 4000,
    pv: 2400,
  },
  {
    name: "0200",
    uv: 3000,
    pv: 1398,
  },
  {
    name: "0300",
    uv: 2000,
    pv: 9800,
  },
  {
    name: "0400",
    uv: 2780,
  },
  {
    name: "0500",
    uv: 1890,
    pv: 4800,
  },
  {
    name: "0600",
    uv: 2390,
    pv: 3800,
  },
  {
    name: "0700",
    uv: 3490,
    pv: 4300,
  },
  {
    name: "0730",
    pv: 1000,
  },
  {
    name: "0800",
    uv: 3490,
    pv: 4300,
  },
  {
    name: "0900",
    uv: 3490,
    pv: 4300,
  },
  {
    name: "1000",
    uv: 3490,
    pv: 4300,
  },
  {
    name: "1100",
    uv: 3490,
    pv: 4300,
  },
  {
    name: "1200",
    uv: 3490,
    pv: 4300,
  },
  {
    name: "1300",
    uv: 3490,
    pv: 4300,
  },
  {
    name: "1400",
    uv: 3490,
    pv: 4300,
  },
  {
    name: "1500",
    uv: 3490,
    pv: 4300,
  },
  {
    name: "1600",
    uv: 3490,
    pv: 4300,
  },
  {
    name: "1700",
    uv: 3490,
    pv: 4300,
  },
  {
    name: "1800",
    uv: 3490,
    pv: 4300,
  },
  {
    name: "1900",
    uv: 3490,
    pv: 4300,
  },
  {
    name: "2000",
    uv: 3490,
    pv: 4300,
  },
  {
    name: "2100",
    uv: 1314,
    pv: 2524,
  },
  {
    name: "2200",
    uv: 3520,
    pv: 1111,
  },
  {
    name: "2300",
    uv: 1833,
    pv: 2683,
  },
  {
    name: "2400",
    uv: 1235,
    pv: 2570,
  },
];

const LineGraph = () => {
  return (
    <>
      <h1>line graph</h1>
      <Card>
        <CardContent>
          <LineChart
            width={1200}
            height={500}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </CardContent>
      </Card>
    </>
  );
};

export default LineGraph;
