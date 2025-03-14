import React from "react";
import ChartHeader from "../../components/chartheader/ChartHeader";
import ChartMain from "../../components/chartmain/ChartMain";
import { motion } from "framer-motion";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import { ShowPage } from "../../utils/FramerAniamtion";
function Chart() {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
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
  return (
    <motion.div
      variants={ShowPage}
      exit="exit"
      initial="hidden"
      animate="visible"
    >
      <div className="grid gap-7 mt-4 grid-cols-[repeat(auto-fit,minmax(265px,1fr))]">
        <ChartHeader
          Title="Bookings"
          Icon={
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 17.2C7.5 17.2 5.29 15.92 4 14C4.03 12 8 10.9 10 10.9C12 10.9 15.97 12 16 14C14.71 15.92 12.5 17.2 10 17.2ZM10 3C10.7956 3 11.5587 3.31607 12.1213 3.87868C12.6839 4.44129 13 5.20435 13 6C13 6.79565 12.6839 7.55871 12.1213 8.12132C11.5587 8.68393 10.7956 9 10 9C9.20435 9 8.44129 8.68393 7.87868 8.12132C7.31607 7.55871 7 6.79565 7 6C7 5.20435 7.31607 4.44129 7.87868 3.87868C8.44129 3.31607 9.20435 3 10 3ZM10 0C8.68678 0 7.38642 0.258658 6.17317 0.761205C4.95991 1.26375 3.85752 2.00035 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C3.85752 17.9997 4.95991 18.7362 6.17317 19.2388C7.38642 19.7413 8.68678 20 10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 4.47 15.5 0 10 0Z"
                fill="white"
              />
            </svg>
          }
          Desc="281"
          Profit="+55%"
          IconColor="bg-gradient-to-b from-[#3E3D45] to-[#202020]"
          Date="than last week"
        />
        <ChartHeader
          Title="Today’s Users"
          Desc="2,300"
          IconColor="bg-gradient-to-b from-[#E93B77] to-[#DA1F63]"
          Profit="+3%"
          Date="than last week"
          Icon={
            <svg
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 18H0V0H2V16H4V7H8V16H10V3H14V16H16V11H20V18Z"
                fill="white"
              />
            </svg>
          }
        />
        <ChartHeader
          Title="Revenue"
          Icon={
            <svg
              width="18"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 14H3V10H9V14ZM18 10V8L17 3H1L0 8V10H1V16H11V10H15V16H17V10H18ZM17 0H1V2H17V0Z"
                fill="white"
              />
            </svg>
          }
          IconColor="bg-gradient-to-b from-[#63B967] to-[#4BA64F]"
          Profit="+1%"
          Date="than yesterday"
          Desc="34k"
        />
        <ChartHeader
          Title="Followers"
          Icon={
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 17.2C7.5 17.2 5.29 15.92 4 14C4.03 12 8 10.9 10 10.9C12 10.9 15.97 12 16 14C14.71 15.92 12.5 17.2 10 17.2ZM10 3C10.7956 3 11.5587 3.31607 12.1213 3.87868C12.6839 4.44129 13 5.20435 13 6C13 6.79565 12.6839 7.55871 12.1213 8.12132C11.5587 8.68393 10.7956 9 10 9C9.20435 9 8.44129 8.68393 7.87868 8.12132C7.31607 7.55871 7 6.79565 7 6C7 5.20435 7.31607 4.44129 7.87868 3.87868C8.44129 3.31607 9.20435 3 10 3ZM10 0C8.68678 0 7.38642 0.258658 6.17317 0.761205C4.95991 1.26375 3.85752 2.00035 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C3.85752 17.9997 4.95991 18.7362 6.17317 19.2388C7.38642 19.7413 8.68678 20 10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 4.47 15.5 0 10 0Z"
                fill="white"
              />
            </svg>
          }
          IconColor="bg-gradient-to-b from-[#439DEE] to-[#1E78E9]"
          Date="Just updated"
          Profit="+1%"
          Desc="+91"
        />
      </div>
      <div className="mt-14 grid gap-[30px] grid-cols-[repeat(auto-fit,minmax(380px,1fr))]">
        <ChartMain
          Title="Website Views"
          Desc="Last Campaign Performance"
          Date="campaign sent 2 days ago"
          ChartColor="bg-gradient-to-l from-[#E93B77] to-[#DA1F63]"
          Chart={
            <ResponsiveContainer width="100%" height="80%">
              <BarChart
                data={data}
                margin={{ top: 15, right: 30, left: 0, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name"></XAxis>
                <YAxis />
                <Bar radius={10} barSize={10} dataKey="pv" fill="#ffff"></Bar>
              </BarChart>
            </ResponsiveContainer>
          }
        />
        <ChartMain
          Title="Daily Sales"
          Desc="(+15%) increase in today sales."
          Date="updated 4 min ago"
          ChartColor="bg-gradient-to-l from-[#63B967] to-[#4BA64F]"
          Chart={
            <ResponsiveContainer width="100%" height="80%">
              <LineChart
                data={data}
                margin={{ top: 15, right: 30, left: 0, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" tickMargin={10} />
                <YAxis tickMargin={10} />
                <Tooltip />

                <Line type="monotone" dataKey="pv" stroke="#fff" />
              </LineChart>
            </ResponsiveContainer>
          }
        />
        <ChartMain
          Title="Completed Tasks"
          Desc="Last Campaign Performance"
          Date="just updated"
          ChartColor="bg-gradient-to-l from-[#3E3D45] to-[#202020]"
          Chart={
            <ResponsiveContainer width="100%" height="80%">
              <LineChart
                data={data}
                margin={{ top: 15, right: 30, left: 0, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis tick dataKey="name" tickMargin={10} />
                <YAxis tickMargin={10} />
                <Tooltip />

                <Line type="monotone" dataKey="pv" stroke="#fff" />
              </LineChart>
            </ResponsiveContainer>
          }
        />
      </div>
    </motion.div>
  );
}

export default Chart;
