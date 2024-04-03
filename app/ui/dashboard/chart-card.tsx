"use client";

import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const isMobile = window.innerWidth <= 768; // Assuming mobile size is 768px or less

export default class Example extends PureComponent {
  render() {
    return (
     <div className="container w-full mx-auto overflow-x-hidden bg-bgSoft rounded-lg p-2 min-w-80 h-fit">
        <ResponsiveContainer
        width="100%"
        height="100%"
        aspect={isMobile ? 16 / 9 : 16 / 5} // Conditional aspect ratio based on screen size
        style={{ backgroundColor: "#182237", color: "#fff", borderRadius: "10px", padding: "20px", overflowX: "hidden"}}
      >
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="#fff" />
          <YAxis stroke="#82ca9d"/>
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="red"
            strokeDasharray="5 5"
          />
          <Line
            type="monotone"
            dataKey="uv"
            stroke="#82ca9d"
            strokeDasharray="3 4 5 2"
          />
        </LineChart>
      </ResponsiveContainer>
      </div>
    );
  }
}
