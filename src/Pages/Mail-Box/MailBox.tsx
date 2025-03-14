import React, { useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  Pie,
  PieChart,
  Tooltip,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import 'react-quill/dist/quill.snow.css'
import imgPP from "../../assets/img/PP.png";
import imgFJ from "../../assets/img/FJ.png";
import imgKD from "../../assets/img/KD.png";
function MailBox() {

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
  const data1 = [
    {
      name: "Group A",
      value: 400,
    },
    {
      name: "Group B",
      value: 300,
    },
    {
      name: "Group C",
      value: 300,
    },
    {
      name: "Group D",
      value: 200,
    },
    {
      name: "Group E",
      value: 278,
    },
    {
      name: "Group F",
      value: 189,
    },
  ];
  const data2 = [
    {
      name: "Group A",
      value: 2400,
    },
    {
      name: "Group B",
      value: 4567,
    },
    {
      name: "Group C",
      value: 1398,
    },
    {
      name: "Group D",
      value: 9800,
    },
    {
      name: "Group E",
      value: 3908,
    },
    {
      name: "Group F",
      value: 4800,
    },
  ];

  return (
    <div className="p-3">
      <div className="max-h-[216px] flex flex-col gap-2 items-center justify-center rounded-2xl py-7 px-28 bg-secondery-color">
        <h6 className="font-normal text-[12px] text-secondery-color">
          Drag and drop files here
        </h6>
        <span className="text-[12px] font-normal text-gray-black opacity-70">
          or
        </span>
        <input type="file" id="uplaod-file" hidden />
        <label
          className="flex bg-black cursor-pointer text-white px-2 py-2 rounded-full items-center gap-2 "
          htmlFor="upload-file"
        >
          <span className=" text-[12px]">Choose files</span>
          <svg
            width="15"
            height="14"
            viewBox="0 0 15 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.31305 7.875L5.92992 8.49187L7.06305 7.36312V12.6875H7.93805V7.36312L9.07117 8.49187L9.68805 7.875L7.50055 5.6875L5.31305 7.875Z"
              fill="white"
            />
            <path
              d="M10.7818 9.625H10.563V8.75H10.7818C11.3039 8.77088 11.813 8.58349 12.197 8.22905C12.581 7.8746 12.8084 7.38214 12.8293 6.86C12.8502 6.33785 12.6628 5.82879 12.3083 5.44481C11.9539 5.06083 11.4614 4.83338 10.9393 4.8125H10.563L10.5193 4.45375C10.4222 3.71719 10.0607 3.04103 9.50215 2.55123C8.94356 2.06142 8.22597 1.79136 7.48305 1.79136C6.74013 1.79136 6.02253 2.06142 5.46394 2.55123C4.90536 3.04103 4.54386 3.71719 4.4468 4.45375L4.43805 4.8125H4.0618C3.53965 4.83338 3.04719 5.06083 2.69275 5.44481C2.3383 5.82879 2.15091 6.33785 2.1718 6.86C2.19268 7.38214 2.42014 7.8746 2.80412 8.22905C3.1881 8.58349 3.69715 8.77088 4.2193 8.75H4.43805V9.625H4.2193C3.51773 9.62055 2.84256 9.35692 2.3236 8.88479C1.80465 8.41265 1.47854 7.76535 1.40798 7.06732C1.33742 6.36929 1.52738 5.66981 1.94135 5.10337C2.35531 4.53693 2.96406 4.14351 3.65055 3.99875C3.83942 3.11785 4.32466 2.32836 5.02531 1.76201C5.72596 1.19567 6.59963 0.886719 7.50055 0.886719C8.40147 0.886719 9.27514 1.19567 9.97579 1.76201C10.6764 2.32836 11.1617 3.11785 11.3505 3.99875C12.037 4.14351 12.6458 4.53693 13.0597 5.10337C13.4737 5.66981 13.6637 6.36929 13.5931 7.06732C13.5226 7.76535 13.1964 8.41265 12.6775 8.88479C12.1585 9.35692 11.4834 9.62055 10.7818 9.625Z"
              fill="white"
            />
          </svg>
        </label>
      </div>
      <span className="text-[12px] font-normal text-gray-black opacity-70">
        XLS TXT, PNG, JPEG, GIF
      </span>
      <form
        className="h-12 max-w-[368px]  mt-2  relative pl-8 bg-secondery-color  rounded-2xl"
        action=""
      >
        <button className="absolute top-4 left-3 ">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            className="fill-primery-color"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14.5001 13.7931L10.7241 10.017C11.6314 8.9277 12.0839 7.5305 11.9873 6.11608C11.8908 4.70165 11.2526 3.37891 10.2057 2.423C9.15867 1.4671 7.78347 0.951637 6.36612 0.983845C4.94877 1.01605 3.5984 1.59345 2.59593 2.59593C1.59345 3.5984 1.01605 4.94877 0.983845 6.36612C0.951637 7.78347 1.4671 9.15867 2.423 10.2057C3.37891 11.2526 4.70165 11.8908 6.11608 11.9873C7.5305 12.0839 8.9277 11.6314 10.017 10.7241L13.7931 14.5001L14.5001 13.7931ZM2.00012 6.50012C2.00012 5.6101 2.26404 4.74007 2.75851 4.00005C3.25297 3.26003 3.95578 2.68325 4.77804 2.34266C5.60031 2.00207 6.50511 1.91295 7.37802 2.08658C8.25094 2.26022 9.05276 2.6888 9.6821 3.31814C10.3114 3.94747 10.74 4.7493 10.9137 5.62221C11.0873 6.49513 10.9982 7.39993 10.6576 8.22219C10.317 9.04446 9.7402 9.74726 9.00018 10.2417C8.26016 10.7362 7.39013 11.0001 6.50012 11.0001C5.30705 10.9988 4.16323 10.5243 3.3196 9.68064C2.47597 8.83701 2.00144 7.69319 2.00012 6.50012Z" />
          </svg>
        </button>
        <input
          type="text"
          placeholder="Search"
          className="text-[14px]  h-full w-full outline-none bg-transparent  font-normal text-secondery-color"
        />
      </form>
      <div className="rounded-2xl mt-4 p-8 bg-secondery-color  h-[326px] max-w-">
        <div className="flex bg-primery-color p-3 w-1/3 rounded-xl justify-between items-start">
          <div className="flex gap-2 items-center">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.3333 4H10.4959C9.85392 4 9.33325 4.52067 9.33325 5.16267V10.002H19.3333V4Z"
                fill="#169154"
              />
              <path
                d="M9.33325 22.0359V26.8372C9.33325 27.4792 9.85392 27.9999 10.4953 27.9999H19.3333V22.0359H9.33325Z"
                fill="#18482A"
              />
              <path
                d="M9.33325 10.002H19.3333V16.0033H9.33325V10.002Z"
                fill="#0C8045"
              />
              <path
                d="M9.33325 16.0034H19.3333V22.0368H9.33325V16.0034Z"
                fill="#17472A"
              />
              <path
                d="M28.1706 4H19.3333V10.002H29.3333V5.16267C29.3333 4.52067 28.8126 4 28.1706 4Z"
                fill="#29C27F"
              />
              <path
                d="M19.3333 22.0359V27.9999H28.1713C28.8126 27.9999 29.3333 27.4792 29.3333 26.8379V22.0366L19.3333 22.0359Z"
                fill="#27663F"
              />
              <path
                d="M19.3333 10.002H29.3333V16.0033H19.3333V10.002Z"
                fill="#19AC65"
              />
              <path
                d="M19.3333 16.0034H29.3333V22.0368H19.3333V16.0034Z"
                fill="#129652"
              />
              <path
                d="M14.8794 22.6666H3.78741C3.16875 22.6666 2.66675 22.1646 2.66675 21.5459V10.4539C2.66675 9.83525 3.16875 9.33325 3.78741 9.33325H14.8794C15.4981 9.33325 16.0001 9.83525 16.0001 10.4539V21.5459C16.0001 22.1646 15.4981 22.6666 14.8794 22.6666Z"
                fill="#0C7238"
              />
              <path
                d="M6.53792 12.6667H8.12859L9.41925 15.1694L10.7833 12.6667H12.2693L10.2219 16.0001L12.3159 19.3334H10.7486L9.34192 16.7134L7.94125 19.3334H6.35059L8.47925 15.9881L6.53792 12.6667Z"
                fill="white"
              />
            </svg>

            <div className="flex flex-col">
              <h6 className="text-[12px] font-medium text-secondery-color">
                Form_group.xls
              </h6>
              <span className="text-[12px] font-normal text-gray-black opacity-60">
                28.5 mb
              </span>
            </div>
          </div>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            className="fill-secondery-color"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 4.7L11.3 4L8 7.3L4.7 4L4 4.7L7.3 8L4 11.3L4.7 12L8 8.7L11.3 12L12 11.3L8.7 8L12 4.7Z" />
          </svg>
        </div>
        <div className=" bg-primery-color mt-5 p-3 w-1/3 rounded-xl ">
          <div className="flex justify-between items-start">
            <div className="flex gap-2 items-center">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.3333 4H10.4959C9.85392 4 9.33325 4.52067 9.33325 5.16267V10.002H19.3333V4Z"
                  fill="#169154"
                />
                <path
                  d="M9.33325 22.0359V26.8372C9.33325 27.4792 9.85392 27.9999 10.4953 27.9999H19.3333V22.0359H9.33325Z"
                  fill="#18482A"
                />
                <path
                  d="M9.33325 10.002H19.3333V16.0033H9.33325V10.002Z"
                  fill="#0C8045"
                />
                <path
                  d="M9.33325 16.0034H19.3333V22.0368H9.33325V16.0034Z"
                  fill="#17472A"
                />
                <path
                  d="M28.1706 4H19.3333V10.002H29.3333V5.16267C29.3333 4.52067 28.8126 4 28.1706 4Z"
                  fill="#29C27F"
                />
                <path
                  d="M19.3333 22.0359V27.9999H28.1713C28.8126 27.9999 29.3333 27.4792 29.3333 26.8379V22.0366L19.3333 22.0359Z"
                  fill="#27663F"
                />
                <path
                  d="M19.3333 10.002H29.3333V16.0033H19.3333V10.002Z"
                  fill="#19AC65"
                />
                <path
                  d="M19.3333 16.0034H29.3333V22.0368H19.3333V16.0034Z"
                  fill="#129652"
                />
                <path
                  d="M14.8794 22.6666H3.78741C3.16875 22.6666 2.66675 22.1646 2.66675 21.5459V10.4539C2.66675 9.83525 3.16875 9.33325 3.78741 9.33325H14.8794C15.4981 9.33325 16.0001 9.83525 16.0001 10.4539V21.5459C16.0001 22.1646 15.4981 22.6666 14.8794 22.6666Z"
                  fill="#0C7238"
                />
                <path
                  d="M6.53792 12.6667H8.12859L9.41925 15.1694L10.7833 12.6667H12.2693L10.2219 16.0001L12.3159 19.3334H10.7486L9.34192 16.7134L7.94125 19.3334H6.35059L8.47925 15.9881L6.53792 12.6667Z"
                  fill="white"
                />
              </svg>

              <div className="flex flex-col">
                <h6 className="text-[12px] font-medium text-secondery-color">
                  Form_group.xls
                </h6>
                <span className="text-[12px] font-normal text-gray-black opacity-60">
                  28.5 mb
                </span>
              </div>
            </div>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              className="fill-secondery-color"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 4.7L11.3 4L8 7.3L4.7 4L4 4.7L7.3 8L4 11.3L4.7 12L8 8.7L11.3 12L12 11.3L8.7 8L12 4.7Z" />
            </svg>
          </div>
          <div className="flex items-center  gap-2">
            <div className=" w-full rounded-2xl overflow-hidden h-[6px] w bg-[#EBEBEB]">
              <div className="bg-[#2E61B4] w-1/2 h-full"></div>
            </div>
            <span className="text-[12px] font-normal text-secondery-color opacity-50">
              50%
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center lg:flex-nowrap sm:flex-wrap mt-3 gap-3">
        <div className="rounded-[20px] p-4 max-h-[290px] bg-secondery-color lg:w-1/3 sm:w-full">
          <div className="flex items-center justify-between">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.4142 12L14.7071 16.2929C15.0976 16.6834 15.0976 17.3166 14.7071 17.7071C14.3166 18.0976 13.6834 18.0976 13.2929 17.7071L8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929L13.2929 6.29289C13.6834 5.90237 14.3166 5.90237 14.7071 6.29289C15.0976 6.68342 15.0976 7.31658 14.7071 7.70711L10.4142 12Z"
                fill="#92929D"
              />
            </svg>
            <span className="text-secondery-color  text-[16px] font-semibold">
              2017
            </span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.5858 12L9.29289 7.70711C8.90237 7.31658 8.90237 6.68342 9.29289 6.29289C9.68342 5.90237 10.3166 5.90237 10.7071 6.29289L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L10.7071 17.7071C10.3166 18.0976 9.68342 18.0976 9.29289 17.7071C8.90237 17.3166 8.90237 16.6834 9.29289 16.2929L13.5858 12Z"
                fill="#92929D"
              />
            </svg>
          </div>

          <ResponsiveContainer width="100%" height={250}>
            <PieChart width={730} height={250}>
              <Pie
                data={data1}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={50}
                fill="#8884d8"
              />
              <Pie
                data={data2}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#82ca9d"
                label
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="rounded-[20px] p-4  max-h-[290px] bg-secondery-color lg:w-1/3 sm:w-full">
          <div className="flex items-center justify-between">
            <h6 className="font-semibold text-[16px] text-secondery-color">
              UPLOAD DATA
            </h6>
            <span className="text-[12px] font-normal text-gray-black opacity-50">
              In Million
            </span>
            <svg
              width="16"
              height="18"
              viewBox="0 0 16 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 9.05344C14.0009 8.86178 13.9249 8.66981 13.772 8.53193L8.43865 3.72266C8.16139 3.47264 7.74023 3.50192 7.49797 3.78807C7.25571 4.07421 7.28409 4.50885 7.56135 4.75887L11.5647 8.36888L2.66667 8.36888C2.29848 8.36888 2 8.67691 2 9.0569C2 9.43688 2.29848 9.74491 2.66667 9.74491L11.5533 9.74491L7.56064 13.3556C7.28372 13.606 7.25594 14.0407 7.49859 14.3265C7.74124 14.6122 8.16244 14.6409 8.43936 14.3905L13.7077 9.62627C13.8841 9.50249 14 9.29366 14 9.0569L14 9.05344Z"
                fill="#92929D"
              />
            </svg>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart
              data={data}
              margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" tickMargin={10} />
              <YAxis tickMargin={10} />
              <Tooltip />

              <Line type="monotone" dataKey="pv" stroke="#FFC542" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="rounded-[20px] p-4 max-h-[290px] bg-secondery-color lg:w-1/3 sm:w-full">
          <div className="flex items-center justify-between">
            <h6 className="font-semibold text-secondery-color text-[14px]">
              UPLOAD USERS
            </h6>
            <svg
              width="34"
              height="24"
              viewBox="0 0 34 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.267 12C10.267 10.8954 9.0432 10 7.53363 10C6.02405 10 4.80029 10.8954 4.80029 12C4.80029 13.1046 6.02405 14 7.53363 14C9.0432 14 10.267 13.1046 10.267 12Z"
                fill="#B5B5BE"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.8336 12C19.8336 10.8954 18.6099 10 17.1003 10C15.5907 10 14.367 10.8954 14.367 12C14.367 13.1046 15.5907 14 17.1003 14C18.6099 14 19.8336 13.1046 19.8336 12Z"
                fill="#B5B5BE"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M29.4003 12C29.4003 10.8954 28.1765 10 26.667 10C25.1574 10 23.9336 10.8954 23.9336 12C23.9336 13.1046 25.1574 14 26.667 14C28.1765 14 29.4003 13.1046 29.4003 12Z"
                fill="#B5B5BE"
              />
            </svg>
          </div>
          <div className="mt-2 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img src={imgPP} />
                <div>
                  <div>
                    <h5 className="text-[14px] font-semibold text-secondery-color">
                      Franklin Jackson
                    </h5>
                  </div>
                  <div className="flex items-center gap-5 justify-between">
                    <span className="text-[12px] font-normal text-gray-black opacity-50">
                      ID #3124
                    </span>{" "}
                    <span className="text-[12px] font-normal text-green-color">
                      Paid
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <svg
                  width="71"
                  height="36"
                  viewBox="0 0 71 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.1"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.68848 16.6918C12.4592 15.6973 12.4592 7.79379 19.159 7.79379C27.4281 7.79379 32.6069 21.4032 40.1295 21.4032C47.6075 21.4032 51.4548 8.93797 59.635 12.722C65.8888 15.615 69.4998 5 69.4998 5V36C69.4998 36 15.1116 36 1.68848 36C1.68848 28.8651 1.68848 19.4869 1.68848 16.6918Z"
                    fill="url(#paint0_linear_13_533)"
                  />
                  <path
                    d="M1.68848 13.521C11.0628 11.703 12.4592 4.73888 19.159 4.73888C27.4281 4.73888 32.6069 17.1657 40.1295 17.1657C47.6075 17.1657 51.4548 4.88097 59.635 8.61026C65.8888 11.4613 69.4998 1 69.4998 1"
                    stroke="#0062FF"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_13_533"
                      x1="13.9437"
                      y1="16.205"
                      x2="13.9437"
                      y2="36"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#0062FF" />
                      <stop offset="1" stop-color="white" stop-opacity="0.01" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img src={imgFJ} />
                <div>
                  <div>
                    <h5 className="text-[14px] font-semibold text-secondery-color">
                      Lily Saunders
                    </h5>
                  </div>
                  <div className="flex items-center gap-5 justify-between">
                    <span className="text-[12px] font-normal text-gray-black opacity-50">
                      ID #3124
                    </span>{" "}
                    <span className="text-[12px] font-normal text-green-color">
                      Paid
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <svg
                  width="71"
                  height="36"
                  viewBox="0 0 71 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.1"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.68848 16.6918C12.4592 15.6973 12.4592 7.79379 19.159 7.79379C27.4281 7.79379 32.6069 21.4032 40.1295 21.4032C47.6075 21.4032 51.4548 8.93797 59.635 12.722C65.8888 15.615 69.4998 5 69.4998 5V36C69.4998 36 15.1116 36 1.68848 36C1.68848 28.8651 1.68848 19.4869 1.68848 16.6918Z"
                    fill="url(#paint0_linear_13_533)"
                  />
                  <path
                    d="M1.68848 13.521C11.0628 11.703 12.4592 4.73888 19.159 4.73888C27.4281 4.73888 32.6069 17.1657 40.1295 17.1657C47.6075 17.1657 51.4548 4.88097 59.635 8.61026C65.8888 11.4613 69.4998 1 69.4998 1"
                    stroke="#0062FF"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_13_533"
                      x1="13.9437"
                      y1="16.205"
                      x2="13.9437"
                      y2="36"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#0062FF" />
                      <stop offset="1" stop-color="white" stop-opacity="0.01" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img src={imgKD} />
                <div>
                  <div>
                    <h5 className="text-[14px] font-semibold text-secondery-color">
                      Lily Saunders
                    </h5>
                  </div>
                  <div className="flex items-center gap-5 justify-between">
                    <span className="text-[12px] font-normal text-gray-black opacity-50">
                      ID #3124
                    </span>{" "}
                    <span className="text-[12px] font-normal text-[#fC5A5A]">
                      Pending
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <svg
                  width="70"
                  height="36"
                  viewBox="0 0 70 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.1"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M68.978 16.6918C58.2073 15.6973 58.2073 7.79379 51.5075 7.79379C43.2384 7.79379 38.0596 21.4032 30.537 21.4032C23.059 21.4032 19.2117 8.93797 11.0315 12.722C4.77766 15.615 1.16666 5 1.16666 5V36C1.16666 36 55.5549 36 68.978 36C68.978 28.8651 68.978 19.4869 68.978 16.6918Z"
                    fill="url(#paint0_linear_13_508)"
                  />
                  <path
                    d="M68.978 13.521C59.6037 11.703 58.2073 4.73888 51.5075 4.73888C43.2384 4.73888 38.0596 17.1657 30.537 17.1657C23.059 17.1657 19.2117 4.88097 11.0315 8.61026C4.77766 11.4613 1.16667 1 1.16667 1"
                    stroke="#FC5A5A"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_13_508"
                      x1="56.7228"
                      y1="16.205"
                      x2="56.7228"
                      y2="36"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FC5A5A" />
                      <stop offset="1" stop-color="white" stop-opacity="0.01" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
        {/* <div>
          <ReactQuill
            theme="snow"
            value={convertedText}
            onChange={setConvertedText}
            style={{ minHeight: "300px" }}
            
          />
        </div> */}
      </div>
    </div>
  );
}

export default MailBox;
