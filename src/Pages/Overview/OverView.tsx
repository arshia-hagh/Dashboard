import Container from "../../components/container/Container";
import TextAniamtion from "../../components/textanimation/AnmationText";
import { motion } from "framer-motion";
import "./OverView.css";
import { LineChart, lineElementClasses } from "@mui/x-charts/LineChart";
import { useState } from "react";
import CardCoin from "../../components/cardcoin/CardCoin";
import PortFolio from "../../components/portfolio/PortFolio";
import { ShowPage } from "../../utils/FramerAniamtion";
function OverView() {
  const [dataU, setDataU] = useState<number[]>([2, 5.5, 2, 8.5, 1.5, 5]);

  return (
    <motion.div
      variants={ShowPage}
      exit="exit"
      initial="hidden"
      animate="visible"
      className="row-span-5 "
    >
      <div className="flex h-[44px] lg:hidden sm:flex   justify-center mt-5 mb-3">
        <form
          action=""
          className="relative  lg:hidden sm:block   rounded-xl  w-[80%] h-full"
        >
          <input
            className="w-full p-5 focus:placeholder:text-[14px] bg-secondery-color border-none rounded-xl focus:placeholder:font-medium focus:placeholder:text-[#111827] font-normal text-[14px] outline-none h-full"
            type="text"
            placeholder="Search"
          />
          <button className="absolute right-3 top-3">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_9059_1856)">
                <path
                  d="M18.3333 18.3334L16.6666 16.6667M9.58329 17.5001C10.6229 17.5001 11.6524 17.2953 12.6129 16.8975C13.5734 16.4996 14.4461 15.9165 15.1812 15.1813C15.9164 14.4462 16.4995 13.5735 16.8973 12.613C17.2952 11.6525 17.5 10.623 17.5 9.58342C17.5 8.54378 17.2952 7.51433 16.8973 6.55384C16.4995 5.59334 15.9164 4.72062 15.1812 3.98549C14.4461 3.25036 13.5734 2.66722 12.6129 2.26937C11.6524 1.87152 10.6229 1.66675 9.58329 1.66675C7.48366 1.66675 5.47003 2.50082 3.98536 3.98549C2.5007 5.47015 1.66663 7.48378 1.66663 9.58342C1.66663 11.683 2.5007 13.6967 3.98536 15.1813C5.47003 16.666 7.48366 17.5001 9.58329 17.5001Z"
                  className="stroke-gray-black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_9059_1856">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </form>
      </div>
      <Container>
        <div>
          <div className="ml-4">
            <TextAniamtion
              text={"Total asset value"}
              className=" text-secondery-gray-black font-semibold text-[14px]"
            />
            <div className="my-3 flex items-center gap-6">
              <TextAniamtion
                text={"$ 345,045.31"}
                className="text-[32px] text-primery-color font-semibold"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 1 }}
              >
                <svg
                  width="24"
                  height="22"
                  viewBox="0 0 24 22"
                  className="icon-color"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11.8145 7.13158L15.2727 10.6242V10.4474C15.2727 9.56797 14.9279 8.72458 14.3142 8.10275C13.7004 7.48092 12.868 7.13158 12 7.13158H11.8145ZM7.12364 8.01579L8.81455 9.72895C8.76 9.96105 8.72727 10.1932 8.72727 10.4474C8.72727 11.3268 9.07208 12.1702 9.68583 12.792C10.2996 13.4138 11.132 13.7632 12 13.7632C12.24 13.7632 12.48 13.73 12.7091 13.6747L14.4 15.3879C13.6691 15.7526 12.8618 15.9737 12 15.9737C10.5534 15.9737 9.16598 15.3914 8.14305 14.3551C7.12013 13.3187 6.54545 11.913 6.54545 10.4474C6.54545 9.57421 6.76364 8.75632 7.12364 8.01579ZM1.09091 1.90368L3.57818 4.42368L4.06909 4.92105C2.26909 6.35789 0.850909 8.23684 0 10.4474C1.88727 15.2995 6.54545 18.7368 12 18.7368C13.6909 18.7368 15.3055 18.4053 16.7782 17.8084L17.2473 18.2726L20.4327 21.5L21.8182 20.0963L2.47636 0.5M12 4.92105C13.4466 4.92105 14.834 5.50329 15.8569 6.53967C16.8799 7.57606 17.4545 8.9817 17.4545 10.4474C17.4545 11.1547 17.3127 11.84 17.0618 12.4589L20.2582 15.6974C21.8945 14.3158 23.2036 12.5032 24 10.4474C22.1127 5.59526 17.4545 2.15789 12 2.15789C10.4727 2.15789 9.01091 2.43421 7.63636 2.93158L10.0036 5.30789C10.6255 5.06474 11.2909 4.92105 12 4.92105Z" />
                </svg>
              </motion.div>
            </div>
            <TextAniamtion
              text={"~ 13.4578 BTC"}
              className="text-secondery-gray-black  tracking-widest  font-semibold text-[16px]"
            />
          </div>
          <div className="mt-6 bg-secondery-color rounded-xl px-3  p-5">
            <div className="flex justify-between">
              <h5 className="font-bold text-white-black text-[24px]">Chart</h5>
              <div className="flex items-center gap-3">
                <div className="border-[1px] border-[#31353F] flex items-center gap-3 rounded-md h-[32px] p-[5px]">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.5625 11.9401H10.05C10.5375 11.9401 10.9425 11.5051 10.9425 10.9801C10.9425 10.3276 10.71 10.2001 10.3275 10.0651L9.57 9.80255V11.9401H9.5625Z"
                      fill="#FFC01E"
                    />
                    <path
                      d="M8.97755 1.42494C4.83755 1.43994 1.48505 4.80744 1.50005 8.94744C1.51505 13.0874 4.88255 16.4399 9.02255 16.4249C13.1625 16.4099 16.515 13.0424 16.5 8.90244C16.4851 4.76244 13.1175 1.41744 8.97755 1.42494ZM10.6951 8.99994C11.2801 9.20244 12.0676 9.63744 12.0676 10.9799C12.0676 12.1349 11.16 13.0649 10.05 13.0649H9.56255V13.4999C9.56255 13.8074 9.30755 14.0624 9.00005 14.0624C8.69255 14.0624 8.43755 13.8074 8.43755 13.4999V13.0649H8.16755C6.93755 13.0649 5.94005 12.0299 5.94005 10.7549C5.94005 10.4474 6.19505 10.1924 6.50255 10.1924C6.81005 10.1924 7.06505 10.4474 7.06505 10.7549C7.06505 11.4074 7.56005 11.9399 8.16755 11.9399H8.43755V9.40494L7.30505 8.99994C6.72005 8.79744 5.93255 8.36244 5.93255 7.01994C5.93255 5.86494 6.84005 4.93494 7.95005 4.93494H8.43755V4.49994C8.43755 4.19244 8.69255 3.93744 9.00005 3.93744C9.30755 3.93744 9.56255 4.19244 9.56255 4.49994V4.93494H9.83255C11.0625 4.93494 12.0601 5.96994 12.0601 7.24494C12.0601 7.55244 11.805 7.80744 11.4976 7.80744C11.1901 7.80744 10.9351 7.55244 10.9351 7.24494C10.9351 6.59244 10.4401 6.05994 9.83255 6.05994H9.56255V8.59494L10.6951 8.99994Z"
                      fill="#FFC01E"
                    />
                    <path
                      d="M7.06494 7.02756C7.06494 7.68006 7.29744 7.80756 7.67994 7.94256L8.43744 8.20506V6.06006H7.94994C7.46244 6.06006 7.06494 6.49506 7.06494 7.02756Z"
                      fill="#FFC01E"
                    />
                  </svg>
                  <span className="font-bold text-black-gray text-[10px] opacity-60">
                    USD
                  </span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    className="fill-white-black"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.00012 11.1826C8.85762 11.1826 8.71512 11.1301 8.60262 11.0176L5.95512 8.37005C5.73762 8.15255 5.73762 7.79255 5.95512 7.57505C6.17262 7.35755 6.53262 7.35755 6.75012 7.57505L9.00012 9.82505L11.2501 7.57505C11.4676 7.35755 11.8276 7.35755 12.0451 7.57505C12.2626 7.79255 12.2626 8.15255 12.0451 8.37005L9.39762 11.0176C9.28512 11.1301 9.14262 11.1826 9.00012 11.1826Z" />
                  </svg>
                </div>
                <div className="h-[32px] border-[1px] rounded-md border-[#31353F] p-[7px]">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    className="fill-white-black"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M4.875 17.0625C4.5675 17.0625 4.3125 16.8075 4.3125 16.5V11.25C4.3125 10.9425 4.5675 10.6875 4.875 10.6875C5.1825 10.6875 5.4375 10.9425 5.4375 11.25V16.5C5.4375 16.8075 5.1825 17.0625 4.875 17.0625Z" />
                    <path d="M4.875 4.3125C4.5675 4.3125 4.3125 4.0575 4.3125 3.75V1.5C4.3125 1.1925 4.5675 0.9375 4.875 0.9375C5.1825 0.9375 5.4375 1.1925 5.4375 1.5V3.75C5.4375 4.0575 5.1825 4.3125 4.875 4.3125Z" />
                    <path d="M13.125 17.0625C12.8175 17.0625 12.5625 16.8075 12.5625 16.5V14.25C12.5625 13.9425 12.8175 13.6875 13.125 13.6875C13.4325 13.6875 13.6875 13.9425 13.6875 14.25V16.5C13.6875 16.8075 13.4325 17.0625 13.125 17.0625Z" />
                    <path d="M13.125 7.3125C12.8175 7.3125 12.5625 7.0575 12.5625 6.75V1.5C12.5625 1.1925 12.8175 0.9375 13.125 0.9375C13.4325 0.9375 13.6875 1.1925 13.6875 1.5V6.75C13.6875 7.0575 13.4325 7.3125 13.125 7.3125Z" />
                    <path d="M5.625 11.8125H4.125C2.835 11.8125 2.0625 11.04 2.0625 9.75V5.25C2.0625 3.96 2.835 3.1875 4.125 3.1875H5.625C6.915 3.1875 7.6875 3.96 7.6875 5.25V9.75C7.6875 11.04 6.915 11.8125 5.625 11.8125ZM4.125 4.3125C3.4575 4.3125 3.1875 4.5825 3.1875 5.25V9.75C3.1875 10.4175 3.4575 10.6875 4.125 10.6875H5.625C6.2925 10.6875 6.5625 10.4175 6.5625 9.75V5.25C6.5625 4.5825 6.2925 4.3125 5.625 4.3125H4.125Z" />
                    <path d="M13.875 14.8125H12.375C11.085 14.8125 10.3125 14.04 10.3125 12.75V8.25C10.3125 6.96 11.085 6.1875 12.375 6.1875H13.875C15.165 6.1875 15.9375 6.96 15.9375 8.25V12.75C15.9375 14.04 15.165 14.8125 13.875 14.8125ZM12.375 7.3125C11.7075 7.3125 11.4375 7.5825 11.4375 8.25V12.75C11.4375 13.4175 11.7075 13.6875 12.375 13.6875H13.875C14.5425 13.6875 14.8125 13.4175 14.8125 12.75V8.25C14.8125 7.5825 14.5425 7.3125 13.875 7.3125H12.375Z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex mt-7  justify-between">
              <div>
                <div className="flex mb-3 gap-2">
                  <span className="opacity-60 text-black-gray font-medium text-[14px]">
                    Bitcoin/BTC
                  </span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    className="fill-white-black"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.00012 11.1826C8.85762 11.1826 8.71512 11.1301 8.60262 11.0176L5.95512 8.37005C5.73762 8.15255 5.73762 7.79255 5.95512 7.57505C6.17262 7.35755 6.53262 7.35755 6.75012 7.57505L9.00012 9.82505L11.2501 7.57505C11.4676 7.35755 11.8276 7.35755 12.0451 7.57505C12.2626 7.79255 12.2626 8.15255 12.0451 8.37005L9.39762 11.0176C9.28512 11.1301 9.14262 11.1826 9.00012 11.1826Z" />
                  </svg>
                </div>
                <h4 className="text-black-gray  font-bold text-[18px]">
                  $35,352.02
                </h4>
              </div>
              <div className="flex gap-4 flex-wrap  justify-center">
                <button
                  onClick={() => {
                    setDataU([2, 5.5, 2, 8.5, 1.5, 5]);
                  }}
                  className="btn-paginate btnActivate-paginate"
                >
                  1h
                </button>
                <button
                  onClick={() => {
                    setDataU([1, 5, 8, 3, 9, 2]);
                  }}
                  className="btn-paginate "
                >
                  3h
                </button>
                <button
                  x
                  onClick={() => {
                    setDataU([2, 10, 1, 10, 7]);
                  }}
                  className="btn-paginate"
                >
                  1d
                </button>
                <button
                  onClick={() => {
                    setDataU([2, 3, 4, 10, 5]);
                  }}
                  className="btn-paginate "
                >
                  1w
                </button>
                <button
                  onClick={() => {
                    setDataU([1, 10, 5, 10, 5]);
                  }}
                  className="btn-paginate "
                >
                  1m
                </button>
              </div>
            </div>
            <LineChart
              xAxis={[
                {
                  data: [1, 2, 3, 5, 8, 10],
                  hideTooltip: true,
                  disableTicks: true,
                  disableLine: true,
                },
              ]}
              series={[
                {
                  data: dataU,
                  area: true,
                  color: "#3A6FF8",
                  showMark: false,
                  connectNulls: true,
                  curve: "catmullRom",
                },
              ]}
              sx={{
                fontFamily: "Raleway",
                width: "100%",
                [`& .${lineElementClasses.root}`]: { display: "none" },
                padding: "0px",
                fontWeight: 500,
                fontSize: "12px",
                borderBottom: "1px solid #31353F",
              }}
              height={300}
            />
          </div>
          <div className="mt-4 bg-secondery-color rounded-xl lg:p-3 md:p-2 sm:p-1">
            <div className="flex justify-between items-center">
              <h5 className="text-white-black font-medium tracking-wide text-[18px]">
                Operation
              </h5>
              <div className="bg-primery-color p-1 rounded-lg flex ">
                <button className="btnOperation-Active">Buy</button>
                <button className="btnOperation">Sell</button>
                <button className="btnOperation">Exchange</button>
              </div>
              <span className="text-secondery-gray-black  font-semibold tracking-wide text-[14px]">
                1 BTC = $2,345
              </span>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="w-[70%]">
                <div>
                  <h5 className="text-[14px] text-secondery-gray-black  mb-2 font-bold tracking-widest">
                    You Pay
                  </h5>
                  <div className="bg-primery-color px-2 h-[42px] rounded-lg flex justify-between items-center">
                    <div className="bg-secondery-color rounded-lg py-1 px-2 flex gap-2 items-center">
                      <div className="bg-[#50AF95] w-[20px] h-[20px] flex items-center justify-center rounded-2xl">
                        <svg
                          width="12"
                          height="10"
                          viewBox="0 0 12 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M2.47904 0.215993L0.452234 4.47244C0.444129 4.48786 0.441338 4.50553 0.444293 4.5227C0.447247 4.53986 0.455783 4.55558 0.468576 4.56741L5.9398 9.81274C5.95554 9.82693 5.97598 9.83479 5.99718 9.83479C6.01837 9.83479 6.03881 9.82693 6.05456 9.81274L11.529 4.56741C11.5417 4.5555 11.5501 4.53979 11.5531 4.52266C11.556 4.50552 11.5533 4.4879 11.5454 4.47244L9.51858 0.215993C9.51319 0.201188 9.50327 0.18846 9.49023 0.179624C9.47719 0.170788 9.46169 0.166295 9.44595 0.166784H2.55095C2.53541 0.167209 2.52032 0.172068 2.50745 0.180786C2.49458 0.189504 2.48447 0.20172 2.47832 0.215993H2.47904Z"
                            fill="#14161D"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M6.70295 4.90783C6.66373 4.9111 6.46072 4.92418 6.00876 4.92418C5.64869 4.92418 5.3932 4.91437 5.30151 4.90783C3.91005 4.84573 2.87213 4.60332 2.87213 4.31515C2.87213 4.02698 3.91005 3.78149 5.30151 3.71939V4.6656C5.3923 4.67214 5.65196 4.68848 6.01203 4.68848C6.4442 4.68848 6.66028 4.66887 6.69968 4.6656V3.71939C8.08787 3.78149 9.12579 4.0239 9.12579 4.31188C9.12579 4.59987 8.09077 4.84573 6.70295 4.90783ZM6.70295 3.62442V2.77625H8.64133V1.48303H3.36331V2.77625H5.30151V3.62442C3.72665 3.69705 2.54147 4.00737 2.54147 4.38397C2.54147 4.76057 3.72665 5.06835 5.30151 5.14353V7.85798H6.70295V5.14353C8.27453 5.07089 9.45663 4.76039 9.45663 4.38724C9.45663 4.01409 8.27453 3.69632 6.70295 3.6246V3.62442Z"
                            fill="#50AF95"
                          />
                        </svg>
                      </div>
                      <span className="text-[16px] text-white-black font-semibold">
                        USD
                      </span>
                      <svg
                        width="7"
                        height="5"
                        viewBox="0 0 7 5"
                        className="fill-white-black"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0.420825 2.11557L2.84342 4.69967C3.19898 5.07894 3.80102 5.07894 4.15658 4.69967L6.57918 2.11557C7.11805 1.54077 6.71049 0.600024 5.92259 0.600024L1.07741 0.600024C0.289513 0.600024 -0.118049 1.54077 0.420825 2.11557Z" />
                      </svg>
                    </div>
                    <div className="flex gap-5">
                      <span className="text-white-black  font-semibold text-[14px] tracking-wider ">
                        $321.40
                      </span>
                      <span className="bg-purple-color text-white-black text-[10px] font-bold tracking-wider  py-[2px] px-2 rounded-[20px]">
                        MAX
                      </span>
                    </div>
                  </div>
                </div>
                <svg
                  className="mx-auto fill-white-black mt-4"
                  width="12"
                  height="17"
                  viewBox="0 0 12 17"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.32195 16.2622L11.7481 12.9616C11.828 12.8847 11.8913 12.7933 11.9345 12.6928C11.9778 12.5923 12 12.4846 12 12.3757C12 12.156 11.9094 11.9453 11.7481 11.7899C11.5868 11.6345 11.3681 11.5472 11.14 11.5472C10.9119 11.5472 10.6931 11.6345 10.5318 11.7899L8.57034 13.6877L8.57034 4.12425C8.57034 3.90541 8.4801 3.69553 8.31947 3.54078C8.15884 3.38604 7.94097 3.2991 7.71381 3.2991C7.48664 3.2991 7.26877 3.38604 7.10814 3.54078C6.94751 3.69553 6.85727 3.90541 6.85727 4.12425L6.85727 15.6763C6.85811 15.8393 6.90899 15.9983 7.0035 16.1334C7.098 16.2685 7.2319 16.3736 7.38832 16.4355C7.54431 16.4987 7.71622 16.5159 7.88238 16.4851C8.04854 16.4543 8.2015 16.3767 8.32195 16.2622ZM5.14419 12.3757L5.14419 0.823653C5.14335 0.660747 5.09247 0.501728 4.99796 0.366634C4.90346 0.23154 4.76956 0.126418 4.61314 0.0645151C4.45715 0.0013256 4.28524 -0.0159387 4.11908 0.0149005C3.95292 0.0457397 3.79996 0.123301 3.67951 0.237797L0.253363 3.5384C0.173081 3.6151 0.109358 3.70637 0.065873 3.80692C0.0223873 3.90747 -1.75515e-07 4.01532 -1.80277e-07 4.12425C-1.85038e-07 4.23318 0.0223873 4.34103 0.065873 4.44159C0.109358 4.54214 0.173081 4.6334 0.253362 4.71011C0.332989 4.78745 0.427722 4.84883 0.5321 4.89073C0.636476 4.93262 0.748431 4.95419 0.861503 4.95419C0.974577 4.95419 1.08653 4.93262 1.19091 4.89073C1.29529 4.84883 1.39002 4.78745 1.46965 4.71011L3.43112 2.81226L3.43112 12.3757C3.43112 12.5946 3.52136 12.8045 3.68199 12.9592C3.84262 13.114 4.06049 13.2009 4.28765 13.2009C4.51482 13.2009 4.73269 13.114 4.89332 12.9592C5.05395 12.8045 5.14419 12.5946 5.14419 12.3757Z" />
                </svg>
                <div>
                  <h5 className="text-[14px] text-secondery-gray-black  mb-2 font-bold tracking-widest">
                    You Pay
                  </h5>
                  <div className="bg-primery-color px-2 h-[42px] rounded-lg flex justify-between items-center">
                    <div className="bg-secondery-color rounded-lg py-1 px-2 flex gap-2 items-center">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="10" cy="10" r="10" fill="#F5B300" />
                        <path
                          d="M7.7122 6.26133C7.99911 6.33958 8.28602 6.39174 8.57292 6.46999C8.85983 6.54824 9.14674 6.6004 9.43364 6.67865C9.51189 6.70473 9.53797 6.67865 9.56405 6.6004C9.66838 6.157 9.77271 5.73968 9.87704 5.29628C9.90313 5.21803 9.92921 5.19195 10.0075 5.21803C10.2683 5.29628 10.503 5.34844 10.7638 5.40061C10.8421 5.42669 10.8421 5.45277 10.816 5.50494C10.7117 5.92226 10.6074 6.36566 10.503 6.78298C10.503 6.80906 10.503 6.83514 10.4769 6.88731C10.6856 6.93947 10.9203 6.99164 11.129 7.0438C11.1551 7.0438 11.1812 6.99164 11.2072 6.96556C11.2855 6.62648 11.3637 6.31349 11.4681 5.97442C11.4942 5.87009 11.5202 5.76576 11.5463 5.66143C11.5463 5.60927 11.5724 5.58319 11.6246 5.60927C11.8854 5.68752 12.1462 5.73968 12.4331 5.81793C12.4592 5.81793 12.4592 5.84401 12.4853 5.84401C12.407 6.18308 12.3288 6.49607 12.2505 6.80906C12.2245 6.93947 12.1984 7.06988 12.1462 7.2003C12.1201 7.27854 12.1462 7.30463 12.2245 7.33071C12.5114 7.46112 12.7983 7.59153 13.0852 7.72195C13.346 7.87844 13.5807 8.0871 13.7633 8.34792C13.9981 8.73916 14.0241 9.15648 13.9198 9.5738C13.8416 9.8607 13.7372 10.1215 13.5286 10.3302C13.3721 10.4867 13.1634 10.591 12.9548 10.6693C12.9287 10.6693 12.9026 10.6953 12.8504 10.6953C12.9548 10.7736 13.0591 10.8258 13.1634 10.904C13.4764 11.1387 13.6851 11.4256 13.7894 11.7908C13.8416 12.0777 13.8155 12.3907 13.7372 12.6776C13.6329 13.0428 13.5025 13.3557 13.2678 13.6427C12.9809 13.9817 12.6157 14.1643 12.1984 14.2165C11.6506 14.2947 11.129 14.2426 10.6074 14.1643C10.5291 14.1382 10.4769 14.1643 10.4509 14.2426C10.3465 14.6599 10.2422 15.1033 10.1379 15.5206C10.1118 15.6249 10.1118 15.651 9.98137 15.5988C9.74663 15.5467 9.48581 15.4684 9.25107 15.4163C9.17282 15.3902 9.17282 15.3641 9.1989 15.3119C9.30323 14.8685 9.40756 14.4251 9.53797 14.0078C9.53797 13.9556 9.56405 13.9296 9.51189 13.9035C9.30323 13.8513 9.09457 13.7991 8.85983 13.747C8.80766 13.9817 8.72942 14.2165 8.67725 14.4512C8.62509 14.686 8.54684 14.9207 8.49468 15.1554C8.46859 15.2076 8.46859 15.2337 8.39035 15.2076C8.12952 15.1294 7.8687 15.0772 7.60787 15.025C7.52963 14.9989 7.52963 14.9729 7.55571 14.9207C7.66004 14.4773 7.76437 14.0339 7.89478 13.6166C7.89478 13.5905 7.92086 13.5644 7.92086 13.5122C7.32097 13.3557 6.72107 13.1993 6.09509 13.0428C6.14726 12.9384 6.17334 12.8602 6.2255 12.7559C6.32983 12.5211 6.43416 12.2864 6.51241 12.0777C6.53849 11.9995 6.56458 11.9995 6.64282 11.9995C6.8254 12.0516 7.03406 12.1038 7.21664 12.1299C7.4253 12.182 7.58179 12.0777 7.60787 11.8951C7.94694 10.5649 8.28602 9.23473 8.599 7.87844C8.65117 7.66978 8.52076 7.43504 8.28602 7.35679C8.05127 7.27854 7.81653 7.22638 7.60787 7.17421C7.55571 7.17421 7.52963 7.14813 7.55571 7.09597C7.63396 6.80906 7.7122 6.49607 7.79045 6.20916C7.68612 6.28741 7.68612 6.28741 7.7122 6.26133ZM9.04241 12.7037C9.06849 12.7037 9.09457 12.7298 9.09457 12.7298C9.51189 12.8341 9.95529 12.9645 10.3987 12.9906C10.7117 13.0167 10.9986 13.0167 11.2855 12.9123C11.7811 12.7559 11.9897 12.1038 11.7028 11.6865C11.5724 11.4778 11.3637 11.3474 11.1551 11.217C10.6856 10.9562 10.1379 10.8518 9.61622 10.7475C9.53797 10.7214 9.53797 10.7475 9.51189 10.8258C9.45972 11.0866 9.38148 11.3213 9.32931 11.5821C9.22498 11.9473 9.14674 12.3125 9.04241 12.7037ZM11.2333 10.0433C11.2855 10.0433 11.4159 10.0172 11.5202 9.99112C12.0158 9.88679 12.2766 9.31297 12.0158 8.86957C11.8854 8.63483 11.6506 8.47834 11.4159 8.37401C11.0508 8.21751 10.6856 8.13926 10.2944 8.03493C10.2161 8.00885 10.19 8.03493 10.1639 8.11318C10.0335 8.66091 9.90313 9.18256 9.74663 9.73029C9.72055 9.78246 9.74663 9.80854 9.7988 9.83462C9.90313 9.8607 9.98137 9.88679 10.0857 9.91287C10.4769 9.96503 10.816 10.0433 11.2333 10.0433Z"
                          fill="#14161D"
                        />
                      </svg>

                      <span className="text-[16px] text-white-black font-semibold">
                        BTC
                      </span>
                      <svg
                        width="7"
                        height="5"
                        viewBox="0 0 7 5"
                        className="fill-white-black"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0.420825 2.11557L2.84342 4.69967C3.19898 5.07894 3.80102 5.07894 4.15658 4.69967L6.57918 2.11557C7.11805 1.54077 6.71049 0.600024 5.92259 0.600024L1.07741 0.600024C0.289513 0.600024 -0.118049 1.54077 0.420825 2.11557Z" />
                      </svg>
                    </div>
                    <div className="flex items-center gap-5">
                      <span className="text-white-black font-semibold text-[14px] tracking-wider ">
                        0.05 BTC
                      </span>
                      <span className="bg-purple-color text-[10px] text-white-black font-bold tracking-wider  py-[2px] px-2 rounded-[20px]">
                        MIN
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" rounded-lg text-wrap w-[124px] h-[131px] flex items-center justify-center  bg-[#1E2A41]">
                <button className="text-white  font-medium text-[18px]  text-wrap ">
                  Buy <br /> Bitcoin
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))]  gap-7">
            <CardCoin
              Title="Bitcoin"
              Desc="BTC"
              Icon={
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="44"
                    height="44"
                    rx="10"
                    className="fill-icon-bg"
                  />
                  <path
                    d="M24.97 22.75H24.2H19.53V25.58H20.84H24.97C25.92 25.58 26.7 24.94 26.7 24.16C26.7 23.38 25.92 22.75 24.97 22.75Z"
                    fill="#FFC01E"
                  />
                  <path
                    d="M22 12C16.48 12 12 16.48 12 22C12 27.52 16.48 32 22 32C27.52 32 32 27.52 32 22C32 16.48 27.52 12 22 12ZM24.97 27.08H23.32V28.5C23.32 28.91 22.98 29.25 22.57 29.25C22.16 29.25 21.82 28.91 21.82 28.5V27.08H20.84H20.61V28.5C20.61 28.91 20.27 29.25 19.86 29.25C19.45 29.25 19.11 28.91 19.11 28.5V27.08H18.78H17.05C16.64 27.08 16.3 26.74 16.3 26.33C16.3 25.92 16.64 25.58 17.05 25.58H18.03V22V18.42H17.05C16.64 18.42 16.3 18.08 16.3 17.67C16.3 17.26 16.64 16.92 17.05 16.92H18.78H19.11V15.5C19.11 15.09 19.45 14.75 19.86 14.75C20.27 14.75 20.61 15.09 20.61 15.5V16.92H20.84H21.82V15.5C21.82 15.09 22.16 14.75 22.57 14.75C22.98 14.75 23.32 15.09 23.32 15.5V16.92H24.2C25.75 16.92 27.12 18.28 27.12 19.84C27.12 20.51 26.88 21.12 26.5 21.62C27.51 22.11 28.2 23.07 28.2 24.18C28.2 25.77 26.75 27.08 24.97 27.08Z"
                    fill="#FFC01E"
                  />
                  <path
                    d="M25.62 19.83C25.62 19.17 25 18.41 24.2 18.41H20.84H19.53V21.24H24.2C24.98 21.25 25.62 20.61 25.62 19.83Z"
                    fill="#FFC01E"
                  />
                </svg>
              }
              Stock="$52,291"
              Chart={
                <svg
                  width="117"
                  height="51"
                  viewBox="0 0 117 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_f_3_601)">
                    <circle cx="107" cy="20" r="5" fill="#3A6FF8" />
                  </g>
                  <path
                    d="M1 49.5L8.5 26.5L17 37L22 19.5L31 37L44.5 3L57.5 26.5L72 19.5L83.5 31L93.5 6.5L101 19.5H108"
                    stroke="#3A6FF8"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <defs>
                    <filter
                      id="filter0_f_3_601"
                      x="97"
                      y="10"
                      width="20"
                      height="20"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="2.5"
                        result="effect1_foregroundBlur_3_601"
                      />
                    </filter>
                  </defs>
                </svg>
              }
              Profite="+0.25%"
              THWP="YES"
            />
            <CardCoin
              Title="Litecoin"
              THWP="YES"
              Icon={
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="44"
                    height="44"
                    rx="10"
                    className="fill-icon-bg"
                  />
                  <path
                    d="M22 12C16.48 12 12 16.48 12 22C12 27.52 16.48 32 22 32C27.52 32 32 27.52 32 22C32 16.48 27.52 12 22 12ZM25.82 26.32C25.73 26.8 25.32 27.14 24.84 27.14H19.3C18.64 27.14 18.16 26.5 18.34 25.87L19.18 22.92L17.47 23.26C17.42 23.27 17.37 23.27 17.32 23.27C16.97 23.27 16.66 23.02 16.59 22.67C16.51 22.26 16.77 21.87 17.18 21.79L19.65 21.3L20.96 16.73C21.02 16.52 21.22 16.37 21.44 16.37H22.8C23.46 16.37 23.94 16.99 23.77 17.63L22.96 20.64L24.89 20.25C25.29 20.17 25.69 20.43 25.77 20.84C25.85 21.25 25.59 21.64 25.18 21.72L22.52 22.25L21.97 24.3H25C25.62 24.3 26.09 24.86 25.98 25.48L25.82 26.32Z"
                    fill="#64CFF9"
                  />
                </svg>
              }
              Chart={
                <svg
                  width="117"
                  height="51"
                  viewBox="0 0 117 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_f_3_619)">
                    <circle cx="107" cy="20" r="5" fill="#64CFF9" />
                  </g>
                  <path
                    d="M1 49.5L8.5 26.5L17 37L22 19.5L31 37L44.5 3L57.5 26.5L72 19.5L83.5 31L93.5 6.5L101 19.5H108"
                    stroke="#64CFF9"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <defs>
                    <filter
                      id="filter0_f_3_619"
                      x="97"
                      y="10"
                      width="20"
                      height="20"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="2.5"
                        result="effect1_foregroundBlur_3_619"
                      />
                    </filter>
                  </defs>
                </svg>
              }
              Stock="$8,291"
              Profite="+0.25%"
              Desc="ITC"
            />
            <CardCoin
              Title="Ethereum"
              Icon={
                <svg
                  width="44"
                  height="45"
                  viewBox="0 0 44 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="0.400024"
                    width="44"
                    height="44"
                    rx="8"
                    className="fill-icon-bg"
                  />
                  <path
                    d="M18.7701 24.8299L20.3801 25.5499C21.4101 26.0099 22.5901 26.0099 23.6301 25.5499L25.2401 24.8299C26.6801 24.1899 28.0101 25.9299 27.0101 27.1499L23.5501 31.3799C22.7001 32.4199 21.3101 32.4199 20.4501 31.3799L17.0001 27.1499C15.9901 25.9299 17.3201 24.1899 18.7701 24.8299Z"
                    fill="#3A6FF8"
                  />
                  <path
                    d="M18.5703 22.0699C18.2703 22.2899 18.3103 22.7499 18.6503 22.9199L21.0003 24.0899C21.5503 24.3699 22.4403 24.3699 22.9803 24.0899L25.3303 22.9199C25.6603 22.7499 25.7003 22.2999 25.4103 22.0699L22.3003 19.7299C22.1203 19.5999 21.8803 19.5999 21.7003 19.7299L18.5703 22.0699Z"
                    fill="#3A6FF8"
                  />
                  <path
                    d="M27.8803 18.64L23.7103 13.44C23.6303 13.34 23.5403 13.25 23.4503 13.16C23.1903 12.91 22.8203 13.14 22.8203 13.5V17.8C22.8203 17.96 22.8903 18.11 23.0203 18.2L27.1703 21.32L27.3503 21.45C27.5303 21.58 27.7803 21.58 27.9303 21.42C28.6303 20.66 28.6203 19.56 27.8803 18.64Z"
                    fill="#3A6FF8"
                  />
                  <path
                    d="M16.111 18.73L20.261 13.45C20.341 13.35 20.421 13.26 20.511 13.17C20.771 12.92 21.141 13.14 21.141 13.51V17.88C21.141 18.04 21.071 18.18 20.941 18.28L16.811 21.45L16.641 21.58C16.461 21.71 16.211 21.71 16.051 21.54C15.371 20.77 15.381 19.67 16.111 18.73Z"
                    fill="#3A6FF8"
                  />
                </svg>
              }
              THWP="YES"
              Chart={
                <svg
                  width="117"
                  height="51"
                  viewBox="0 0 117 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_f_3_601)">
                    <circle cx="107" cy="20" r="5" fill="#3A6FF8" />
                  </g>
                  <path
                    d="M1 49.5L8.5 26.5L17 37L22 19.5L31 37L44.5 3L57.5 26.5L72 19.5L83.5 31L93.5 6.5L101 19.5H108"
                    stroke="#3A6FF8"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <defs>
                    <filter
                      id="filter0_f_3_601"
                      x="97"
                      y="10"
                      width="20"
                      height="20"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="2.5"
                        result="effect1_foregroundBlur_3_601"
                      />
                    </filter>
                  </defs>
                </svg>
              }
              Desc="ETH"
              Stock="$28,291"
              Profite="+0.25%"
            />
            <CardCoin
              Title="Solana"
              Desc="SOL"
              Icon={
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="44"
                    height="44"
                    rx="10"
                    className="fill-icon-bg"
                  />
                  <path
                    d="M30 13.5H15.5C15.19 13.5 14.89 13.65 14.7 13.9L13.2 15.9C12.71 16.56 13.18 17.5 14 17.5H28.5C28.81 17.5 29.11 17.35 29.3 17.1L30.8 15.1C31.29 14.44 30.82 13.5 30 13.5Z"
                    fill="#1ECB4F"
                  />
                  <path
                    d="M14 20H28.5C28.81 20 29.11 20.15 29.3 20.4L30.8 22.4C31.29 23.06 30.82 24 30 24H15.5C15.19 24 14.89 23.85 14.7 23.6L13.2 21.6C12.71 20.94 13.18 20 14 20Z"
                    fill="#1ECB4F"
                  />
                  <path
                    d="M30 26.5H15.5C15.19 26.5 14.89 26.65 14.7 26.9L13.2 28.9C12.71 29.56 13.18 30.5 14 30.5H28.5C28.81 30.5 29.11 30.35 29.3 30.1L30.8 28.1C31.29 27.44 30.82 26.5 30 26.5Z"
                    fill="#1ECB4F"
                  />
                </svg>
              }
              THWP="NO"
              Stock="$14,291"
              Profite="-0.25%"
              Chart={
                <svg
                  width="117"
                  height="51"
                  viewBox="0 0 117 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_f_3_659)">
                    <circle cx="107" cy="20" r="5" fill="#1ECB4F" />
                  </g>
                  <path
                    d="M1 49.5L8.5 26.5L17 37L22 19.5L31 37L44.5 3L57.5 26.5L72 19.5L83.5 31L93.5 6.5L101 19.5H108"
                    stroke="#1ECB4F"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <defs>
                    <filter
                      id="filter0_f_3_659"
                      x="97"
                      y="10"
                      width="20"
                      height="20"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="2.5"
                        result="effect1_foregroundBlur_3_659"
                      />
                    </filter>
                  </defs>
                </svg>
              }
            />
          </div>
          <div className="mt-7 p-6 bg-secondery-color rounded-2xl">
            <h5 className="font-bold tracking-wider text-secondery-color  text-[24px]">
              My Portfolio
            </h5>
            <div className="flex flex-col mt-7 gap-4">
              <PortFolio
                Title="Ethereum"
                Stock="$3,245.03"
                PProfite="-7.40%"
                Icon={
                  <svg
                    width="44"
                    height="45"
                    viewBox="0 0 44 45"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.400024"
                      width="44"
                      height="44"
                      rx="8"
                      className="fill-icon2-bg"
                    />
                    <path
                      d="M18.7701 24.8299L20.3801 25.5499C21.4101 26.0099 22.5901 26.0099 23.6301 25.5499L25.2401 24.8299C26.6801 24.1899 28.0101 25.9299 27.0101 27.1499L23.5501 31.3799C22.7001 32.4199 21.3101 32.4199 20.4501 31.3799L17.0001 27.1499C15.9901 25.9299 17.3201 24.1899 18.7701 24.8299Z"
                      fill="#3A6FF8"
                    />
                    <path
                      d="M18.5703 22.0699C18.2703 22.2899 18.3103 22.7499 18.6503 22.9199L21.0003 24.0899C21.5503 24.3699 22.4403 24.3699 22.9803 24.0899L25.3303 22.9199C25.6603 22.7499 25.7003 22.2999 25.4103 22.0699L22.3003 19.7299C22.1203 19.5999 21.8803 19.5999 21.7003 19.7299L18.5703 22.0699Z"
                      fill="#3A6FF8"
                    />
                    <path
                      d="M27.8803 18.64L23.7103 13.44C23.6303 13.34 23.5403 13.25 23.4503 13.16C23.1903 12.91 22.8203 13.14 22.8203 13.5V17.8C22.8203 17.96 22.8903 18.11 23.0203 18.2L27.1703 21.32L27.3503 21.45C27.5303 21.58 27.7803 21.58 27.9303 21.42C28.6303 20.66 28.6203 19.56 27.8803 18.64Z"
                      fill="#3A6FF8"
                    />
                    <path
                      d="M16.111 18.73L20.261 13.45C20.341 13.35 20.421 13.26 20.511 13.17C20.771 12.92 21.141 13.14 21.141 13.51V17.88C21.141 18.04 21.071 18.18 20.941 18.28L16.811 21.45L16.641 21.58C16.461 21.71 16.211 21.71 16.051 21.54C15.371 20.77 15.381 19.67 16.111 18.73Z"
                      fill="#3A6FF8"
                    />
                  </svg>
                }
                VProfite="0.12543 ETH"
              />
              <PortFolio
                Title="Bitcoin"
                Icon={
                  <svg
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="44"
                      height="44"
                      rx="10"
                      className="fill-icon2-bg"
                    />
                    <path
                      d="M24.97 22.75H24.2H19.53V25.58H20.84H24.97C25.92 25.58 26.7 24.94 26.7 24.16C26.7 23.38 25.92 22.75 24.97 22.75Z"
                      fill="#FFC01E"
                    />
                    <path
                      d="M22 12C16.48 12 12 16.48 12 22C12 27.52 16.48 32 22 32C27.52 32 32 27.52 32 22C32 16.48 27.52 12 22 12ZM24.97 27.08H23.32V28.5C23.32 28.91 22.98 29.25 22.57 29.25C22.16 29.25 21.82 28.91 21.82 28.5V27.08H20.84H20.61V28.5C20.61 28.91 20.27 29.25 19.86 29.25C19.45 29.25 19.11 28.91 19.11 28.5V27.08H18.78H17.05C16.64 27.08 16.3 26.74 16.3 26.33C16.3 25.92 16.64 25.58 17.05 25.58H18.03V22V18.42H17.05C16.64 18.42 16.3 18.08 16.3 17.67C16.3 17.26 16.64 16.92 17.05 16.92H18.78H19.11V15.5C19.11 15.09 19.45 14.75 19.86 14.75C20.27 14.75 20.61 15.09 20.61 15.5V16.92H20.84H21.82V15.5C21.82 15.09 22.16 14.75 22.57 14.75C22.98 14.75 23.32 15.09 23.32 15.5V16.92H24.2C25.75 16.92 27.12 18.28 27.12 19.84C27.12 20.51 26.88 21.12 26.5 21.62C27.51 22.11 28.2 23.07 28.2 24.18C28.2 25.77 26.75 27.08 24.97 27.08Z"
                      fill="#FFC01E"
                    />
                    <path
                      d="M25.62 19.83C25.62 19.17 25 18.41 24.2 18.41H20.84H19.53V21.24H24.2C24.98 21.25 25.62 20.61 25.62 19.83Z"
                      fill="#FFC01E"
                    />
                  </svg>
                }
                Stock="$3,245.03"
                PProfite="-4.40%"
                VProfite="0.12543 BTC"
              />
              <PortFolio
                Title="Litecoin"
                Stock="$3,245.03"
                PProfite="+5.25%"
                VProfite="0.12543 ITC"
                Icon={
                  <svg
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="44"
                      height="44"
                      rx="10"
                      className="fill-icon2-bg"
                    />
                    <path
                      d="M22 12C16.48 12 12 16.48 12 22C12 27.52 16.48 32 22 32C27.52 32 32 27.52 32 22C32 16.48 27.52 12 22 12ZM25.82 26.32C25.73 26.8 25.32 27.14 24.84 27.14H19.3C18.64 27.14 18.16 26.5 18.34 25.87L19.18 22.92L17.47 23.26C17.42 23.27 17.37 23.27 17.32 23.27C16.97 23.27 16.66 23.02 16.59 22.67C16.51 22.26 16.77 21.87 17.18 21.79L19.65 21.3L20.96 16.73C21.02 16.52 21.22 16.37 21.44 16.37H22.8C23.46 16.37 23.94 16.99 23.77 17.63L22.96 20.64L24.89 20.25C25.29 20.17 25.69 20.43 25.77 20.84C25.85 21.25 25.59 21.64 25.18 21.72L22.52 22.25L21.97 24.3H25C25.62 24.3 26.09 24.86 25.98 25.48L25.82 26.32Z"
                      fill="#64CFF9"
                    />
                  </svg>
                }
              />
              <PortFolio
                Title="Binance Coin"
                Stock="$3,245.03"
                Icon={
                  <svg
                    width="44"
                    height="45"
                    viewBox="0 0 44 45"
                    className="fill-icon2-bg"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.599976"
                      width="44"
                      height="44"
                      rx="8"
                      className="fill-icon2-bg"
                    />
                    <path
                      d="M21.65 12.95L16.36 18.24C16.16 18.44 16.16 18.75 16.36 18.95L17.65 20.24C17.85 20.44 18.16 20.44 18.36 20.24L21.65 16.95C21.85 16.75 22.16 16.75 22.36 16.95L25.65 20.24C25.85 20.44 26.16 20.44 26.36 20.24L27.65 18.95C27.85 18.75 27.85 18.44 27.65 18.24L22.36 12.95C22.16 12.76 21.84 12.76 21.65 12.95Z"
                      fill="#FFC01E"
                    />
                    <path
                      d="M21.65 32.2499L16.36 26.9599C16.16 26.7599 16.16 26.4499 16.36 26.2499L17.65 24.9599C17.85 24.7599 18.16 24.7599 18.36 24.9599L21.65 28.2499C21.85 28.4499 22.16 28.4499 22.36 28.2499L25.65 24.9599C25.85 24.7599 26.16 24.7599 26.36 24.9599L27.65 26.2499C27.85 26.4499 27.85 26.7599 27.65 26.9599L22.36 32.2499C22.16 32.4399 21.84 32.4399 21.65 32.2499Z"
                      fill="#FFC01E"
                    />
                    <path
                      d="M30.1 20.7L31.64 22.24C31.84 22.44 31.84 22.75 31.64 22.95L30.1 24.49C29.9 24.69 29.59 24.69 29.39 24.49L27.85 22.95C27.65 22.75 27.65 22.44 27.85 22.24L29.39 20.7C29.59 20.51 29.91 20.51 30.1 20.7Z"
                      fill="#FFC01E"
                    />
                    <path
                      d="M14.6 20.7L16.14 22.24C16.34 22.44 16.34 22.75 16.14 22.95L14.6 24.49C14.4 24.69 14.09 24.69 13.89 24.49L12.35 22.95C12.15 22.75 12.15 22.44 12.35 22.24L13.89 20.7C14.09 20.51 14.41 20.51 14.6 20.7Z"
                      fill="#FFC01E"
                    />
                    <path
                      d="M22.35 20.48L24.12 22.25C24.32 22.45 24.32 22.76 24.12 22.96L22.35 24.73C22.15 24.93 21.84 24.93 21.64 24.73L19.87 22.96C19.67 22.76 19.67 22.45 19.87 22.25L21.64 20.48C21.84 20.28 22.16 20.28 22.35 20.48Z"
                      fill="#FFC01E"
                    />
                  </svg>
                }
                PProfite="+8.00%"
                VProfite="0.12543 ITC"
              />
              <PortFolio
                Title="Solana"
                Stock="$3,245.03"
                Icon={
                  <svg
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="44"
                      height="44"
                      rx="10"
                      className="fill-icon2-bg"
                    />
                    <path
                      d="M30 13.5H15.5C15.19 13.5 14.89 13.65 14.7 13.9L13.2 15.9C12.71 16.56 13.18 17.5 14 17.5H28.5C28.81 17.5 29.11 17.35 29.3 17.1L30.8 15.1C31.29 14.44 30.82 13.5 30 13.5Z"
                      fill="#1ECB4F"
                    />
                    <path
                      d="M14 20H28.5C28.81 20 29.11 20.15 29.3 20.4L30.8 22.4C31.29 23.06 30.82 24 30 24H15.5C15.19 24 14.89 23.85 14.7 23.6L13.2 21.6C12.71 20.94 13.18 20 14 20Z"
                      fill="#1ECB4F"
                    />
                    <path
                      d="M30 26.5H15.5C15.19 26.5 14.89 26.65 14.7 26.9L13.2 28.9C12.71 29.56 13.18 30.5 14 30.5H28.5C28.81 30.5 29.11 30.35 29.3 30.1L30.8 28.1C31.29 27.44 30.82 26.5 30 26.5Z"
                      fill="#1ECB4F"
                    />
                  </svg>
                }
                VProfite="0.12543 ITC"
                PProfite="+8.00%"
              />
            </div>
          </div>
        </div>
      </Container>
    </motion.div>
  );
}

export default OverView;
