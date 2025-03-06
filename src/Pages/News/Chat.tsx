import React, { useEffect, useRef } from "react";
import imageChat from "../../assets/img/Ellipse 2828.png";
import {motion} from 'framer-motion'
import { ShowPage } from "../../utils/FramerAniamtion";
function Chat() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if(ref.current){
      ref.current.scrollTo(0,ref.current.scrollHeight)
    }
  },[])
  return (
    <motion.div variants={ShowPage} exit="exit" initial={"hidden"} animate={"visible"}   className="h-screen flex  bg-secondery-color">
      <div className="w-[30%] lg:block sm:hidden h-full border-r-[1px] border-collapse border-secondery-gray-black ">
        <div className="flex p-5  border-b-[1px] border-collapse border-secondery-gray-black items-center justify-between">
          <span className="text-[20px] text-secondery-color font-medium">
            Active
            <br />
            Conversations
          </span>
          <span className="py-1 px-3 text-[14px] font-semibold rounded-md bg-[#EFF4FB]">
            4
          </span>
        </div>
        <div className="p-4 flex flex-col gap-7">
          <form className="h-[56px] rounded-md relative bg-primery-color">
            <input
              className="outline-none text-black-gray text-[14px] font-normal p-5 w-full h-full bg-transparent "
              placeholder="Search"
              type="text"
            />
            <button className="absolute right-6 top-5">
              <svg
                width="17"
                height="18"
                viewBox="0 0 17 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.81221 3C5.18917 3 3.06279 5.3505 3.06279 8.25C3.06279 11.1495 5.18917 13.5 7.81221 13.5C10.4352 13.5 12.5616 11.1495 12.5616 8.25C12.5616 5.3505 10.4352 3 7.81221 3ZM1.70581 8.25C1.70581 4.52208 4.43974 1.5 7.81221 1.5C11.1847 1.5 13.9186 4.52208 13.9186 8.25C13.9186 11.9779 11.1847 15 7.81221 15C4.43974 15 1.70581 11.9779 1.70581 8.25Z"
                  fill="#64748B"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.166 11.9572C11.431 11.6643 11.8606 11.6643 12.1255 11.9572L15.077 15.2197C15.3419 15.5126 15.3419 15.9875 15.077 16.2804C14.812 16.5733 14.3824 16.5733 14.1174 16.2804L11.166 13.0179C10.901 12.725 10.901 12.2501 11.166 11.9572Z"
                  fill="#64748B"
                />
              </svg>
            </button>
          </form>
          <div className="flex items-center gap-4 p-2 w-full bg-primery-color rounded-md">
            <div className="relative">
              <img src={imageChat} alt="" />
              <span className="h-2 w-2 rounded-full absolute bottom-1 right-0 bg-green-color"></span>
            </div>
            <div className="flex flex-col items-start gap-2">
              <span className="text-secondery-color text-[14px] font-normal">
                Henry Dholi
              </span>
              <span className="text-gray-black font-normal text-[14px]">
                I cam across your profile and...
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4 p-2 w-full bg-primery-color rounded-md">
            <div className="relative">
              <img src={imageChat} alt="" />
              <span className="h-2 w-2 rounded-full absolute bottom-1 right-0 bg-green-color"></span>
            </div>
            <div className="flex flex-col items-start gap-2">
              <span className="text-secondery-color text-[14px] font-normal">
                Henry Dholi
              </span>
              <span className="text-gray-black font-normal text-[14px]">
                I’m waiting for you response!
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4 p-2 w-full bg-primery-color rounded-md">
            <div className="relative">
              <img src={imageChat} alt="" />
              <span className="h-2 w-2 rounded-full absolute bottom-1 right-0 bg-green-color"></span>
            </div>
            <div className="flex flex-col items-start gap-2">
              <span className="text-secondery-color text-[14px] font-normal">
                Henry Dholi
              </span>
              <span className="text-gray-black font-normal text-[14px]">
                I like your confidence 💪{" "}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4 p-2 w-full bg-primery-color rounded-md">
            <div className="relative">
              <img src={imageChat} alt="" />
              <span className="h-2 w-2 rounded-full absolute bottom-1 right-0 bg-green-color"></span>
            </div>
            <div className="flex flex-col items-start gap-2">
              <span className="text-secondery-color text-[14px] font-normal">
                Henry Dholi
              </span>
              <span className="text-gray-black font-normal text-[14px]">
                Can you share your offer?
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-[70%] sm:w-full ">
        <div className="flex items-center border-b-[1px]    border-collapse border-secondery-gray-black h-[101px]  p-5 justify-between">
          <div className="flex items-center gap-3">
            <img src={imageChat} alt="" />
            <div className="flex flex-col items-start">
              <span className="text-secondery-color font-normal text-[16px]">
                Henry Dholi
              </span>
              <span className="font-normal text-[14px] opacity-60 text-gray-black">
                Reply to message
              </span>
            </div>
          </div>
          <div>
            <svg
              width="15"
              height="4"
              viewBox="0 0 15 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.8093 4C2.80855 4 3.6186 3.10457 3.6186 2C3.6186 0.89543 2.80855 0 1.8093 0C0.810052 0 0 0.89543 0 2C0 3.10457 0.810052 4 1.8093 4Z"
                fill="#64748B"
              />
              <path
                d="M7.23728 4C8.23653 4 9.04658 3.10457 9.04658 2C9.04658 0.89543 8.23653 0 7.23728 0C6.23803 0 5.42798 0.89543 5.42798 2C5.42798 3.10457 6.23803 4 7.23728 4Z"
                fill="#64748B"
              />
              <path
                d="M12.665 4C13.6643 4 14.4743 3.10457 14.4743 2C14.4743 0.89543 13.6643 0 12.665 0C11.6658 0 10.8557 0.89543 10.8557 2C10.8557 3.10457 11.6658 4 12.665 4Z"
                fill="#64748B"
              />
            </svg>
          </div>
        </div>
        <div ref={ref} className="overflow-y-auto h-[90vh]">
          <div className="m-5">
            <span className="text-gray-black  opacity-60 text-[14px] font-normal">
              Andri Thomas
            </span>
            <div className=" bg-primery-color text-secondery-color text-[16px] font-normal p-3 w-[40%] rounded-[0_16px_16px_16px]">
              I want to make an appointment tomorrow from 2:00 to 5:00pm?
            </div>
            <span className="text-gray-black opacity-60 text-[14px] font-normal">
              1:55pm
            </span>
          </div>
          <div className="m-5 rtl">
            <div className=" bg-[#3A6FF8] text-white text-[14px] font-normal p-3 w-[40%] rounded-[16px_16px_0_16px]">
              Hello, Thomas! I will check the schedule and inform you
            </div>
            <span className="text-gray-black opacity-60 text-[14px] font-normal">
              1:58pm
            </span>
          </div>
          <div className="m-5">
            <span className="text-gray-black opacity-60 text-[14px] font-normal">
              Andri Thomas
            </span>
            <div className=" bg-primery-color text-[16px]  text-secondery-color font-normal p-3 w-[40%] rounded-[0_16px_16px_16px]">
              I want to make an appointment tomorrow from 2:00 to 5:00pm?
            </div>
            <span className="text-gray-black opacity-60 text-[14px] font-normal">
              1:59pm
            </span>
          </div>
          <div className="m-5 rtl">
            <div className=" bg-[#3A6FF8] text-white text-[14px] font-normal p-3 w-[40%] rounded-[16px_16px_0_16px]">
              You are welcome!
            </div>
            <span className="text-gray-black opacity-60 text-[14px] font-normal">
              2:00pm
            </span>
          </div>
        </div>
        <div className="fixed bottom-0 w-full p-4 border-t-[1px] border-collapse border-secondery-gray-black bg-secondery-color">
          <form className="h-[52px]   flex gap-3 items-center">
            <div className="h-full rounded-m flex justify-between items-center p-2 bg-primery-color lg:w-[50%] sm:w-[90%]">
              <input
                placeholder="Type something here..."
                className="text-[16px]  p-2 h-full w-[80%] border-none outline-none  bg-transparent  font-normal text-gray-black "
                type="text"
              />
              <div>
                
                <button >
                  <svg
                    width="17"
                    height="18"
                    viewBox="0 0 17 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_6_1099)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.65698 2.25C5.28451 2.25 2.55058 5.27208 2.55058 9C2.55058 12.7279 5.28451 15.75 8.65698 15.75C12.0294 15.75 14.7634 12.7279 14.7634 9C14.7634 5.27208 12.0294 2.25 8.65698 2.25ZM1.1936 9C1.1936 4.44365 4.53507 0.75 8.65698 0.75C12.7789 0.75 16.1203 4.44365 16.1203 9C16.1203 13.5564 12.7789 17.25 8.65698 17.25C4.53507 17.25 1.1936 13.5564 1.1936 9Z"
                        fill="#64748B"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.48359 10.0469C6.25821 9.71825 5.83467 9.6523 5.53584 9.90004C5.23606 10.1486 5.17531 10.6187 5.40014 10.95L5.94293 10.5C5.40014 10.95 5.40031 10.9503 5.40047 10.9505L5.40083 10.9511L5.40161 10.9522L5.40347 10.9549L5.40836 10.962L5.42281 10.9824C5.43451 10.9988 5.45035 11.0204 5.47027 11.0467C5.51006 11.0991 5.56637 11.17 5.6386 11.2533C5.78249 11.4193 5.99276 11.6379 6.26476 11.8566C6.80615 12.2918 7.62183 12.75 8.65689 12.75C9.69194 12.75 10.5076 12.2918 11.049 11.8566C11.321 11.6379 11.5313 11.4193 11.6752 11.2533C11.7474 11.17 11.8037 11.0991 11.8435 11.0467C11.8634 11.0204 11.8793 10.9988 11.891 10.9824L11.9054 10.962L11.9103 10.9549L11.9122 10.9522L11.9129 10.9511L11.9133 10.9505C11.9135 10.9503 11.9136 10.95 11.3708 10.5L11.9136 10.95C12.1385 10.6187 12.0777 10.1486 11.7779 9.90004C11.4791 9.6523 11.0556 9.71825 10.8302 10.0469L10.827 10.0514C10.823 10.057 10.8153 10.0676 10.8041 10.0823C10.7816 10.112 10.7451 10.1582 10.6955 10.2155C10.5955 10.3308 10.4453 10.4872 10.2509 10.6435C9.85935 10.9583 9.31805 11.25 8.65689 11.25C7.99572 11.25 7.45442 10.9583 7.06289 10.6435C6.86844 10.4872 6.71826 10.3308 6.61832 10.2155C6.56863 10.1582 6.53217 10.112 6.50968 10.0823C6.49846 10.0676 6.49078 10.057 6.48674 10.0514L6.48359 10.0469Z"
                        fill="#64748B"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.94312 6.75C5.94312 6.33579 6.24688 6 6.6216 6H6.62839C7.00311 6 7.30688 6.33579 7.30688 6.75C7.30688 7.16421 7.00311 7.5 6.62839 7.5H6.6216C6.24688 7.5 5.94312 7.16421 5.94312 6.75Z"
                        fill="#64748B"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.0139 6.75C10.0139 6.33579 10.3177 6 10.6924 6H10.6992C11.0739 6 11.3777 6.33579 11.3777 6.75C11.3777 7.16421 11.0739 7.5 10.6992 7.5H10.6924C10.3177 7.5 10.0139 7.16421 10.0139 6.75Z"
                        fill="#64748B"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_6_1099">
                        <rect
                          width="16.2837"
                          height="18"
                          fill="white"
                          transform="translate(0.515137)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
                <button className="ml-2">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.5345 1.79077C10.9943 1.79077 10.4761 2.028 10.0941 2.45027L3.85883 9.34277C3.2222 10.0465 2.86454 11.001 2.86454 11.9962C2.86454 12.9914 3.2222 13.9459 3.85883 14.6496C4.49546 15.3533 5.35892 15.7487 6.25925 15.7487C7.15958 15.7487 8.02304 15.3533 8.65967 14.6496L14.895 7.75711C15.1599 7.46422 15.5895 7.46422 15.8545 7.75711C16.1195 8.05 16.1195 8.52488 15.8545 8.81777L9.61919 15.7103C8.72808 16.6953 7.51947 17.2487 6.25925 17.2487C4.99903 17.2487 3.79042 16.6953 2.8993 15.7103C2.00819 14.7252 1.50757 13.3892 1.50757 11.9962C1.50757 10.6031 2.00819 9.26715 2.8993 8.28211L9.13461 1.38961C9.7711 0.686035 10.6344 0.290771 11.5345 0.290771C12.4346 0.290771 13.2979 0.686035 13.9344 1.38961C14.5709 2.09318 14.9284 3.04744 14.9284 4.04244C14.9284 5.03744 14.5709 5.9917 13.9344 6.69527L7.69229 13.5878C7.31042 14.0099 6.7925 14.247 6.25246 14.247C5.71242 14.247 5.1945 14.0099 4.81264 13.5878C4.43078 13.1657 4.21625 12.5932 4.21625 11.9962C4.21625 11.3992 4.43078 10.8267 4.81264 10.4046L10.5733 4.0443C10.8384 3.75158 11.268 3.75186 11.5328 4.04492C11.7976 4.33799 11.7974 4.81286 11.5322 5.10558L5.77217 11.4653C5.64496 11.6061 5.57322 11.7972 5.57322 11.9962C5.57322 12.1953 5.64478 12.3863 5.77217 12.5271C5.89955 12.6679 6.07232 12.747 6.25246 12.747C6.43261 12.747 6.60538 12.6679 6.73276 12.5271L12.9749 5.63461C13.3567 5.21237 13.5715 4.63948 13.5715 4.04244C13.5715 3.44526 13.3569 2.87254 12.9749 2.45027C12.5928 2.028 12.0747 1.79077 11.5345 1.79077Z"
                      fill="#64748B"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <button className="h-full rounded-lg lg:w-[4%] sm:w-[7%] flex items-center justify-center bg-[#3A6FF8]">
              <svg
                width="23"
                height="24"
                viewBox="0 0 23 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.386 2L10.4348 13"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20.386 2L14.0534 22L10.4348 13L2.29297 9L20.386 2Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}

export default Chat;
