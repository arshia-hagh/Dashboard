import React from "react";
import { motion } from "framer-motion";
function Wallet() {
  return (
    <motion.div className="p-3" initial="hidden" exit="exit" animate="visible">
      <div className="flex gap-5 lg:flex-nowrap sm:flex-wrap">
        <div className="lg:w-[70%] sm:w-full flex flex-col gap-5">
          <div className="flex lg:flex-row sm:flex-col gap-4">
            <div className="rounded-xl lg:w-[50%] sm:w-full  px-3 py-5 bg-gradient-to-tr h-[222px] from-[#3E3D45,50%] to-[#202020] w-[50%]">
              <div>
                <svg
                  width="21"
                  height="18"
                  viewBox="0 0 21 18"
                  fill="none"
                  className="mb-6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4342 18L13.6566 13.2C12.7615 12.45 11.6426 12 10.4342 12C9.22575 12 8.10685 12.45 7.21172 13.2L10.4342 18ZM10.4342 0C6.80892 0 3.46116 1.34 0.766846 3.6L2.37807 6C4.61587 4.12 7.40865 3 10.4342 3C13.4597 3 16.2525 4.12 18.4903 6L20.1015 3.6C17.4072 1.34 14.0594 0 10.4342 0ZM10.4342 6C8.01733 6 5.78848 6.89 3.98928 8.4L5.6005 10.8C6.94319 9.67 8.61707 9 10.4342 9C12.2513 9 13.9251 9.67 15.2678 10.8L16.879 8.4C15.0798 6.89 12.851 6 10.4342 6Z"
                    fill="white"
                  />
                </svg>
                <div className="font-bold flex gap-3 text-[20px] text-white">
                  <span>4562</span>
                  <span>1122</span>
                  <span>4594</span>
                  <span>7852</span>
                </div>
              </div>
              <div className="mt-11 flex items-center justify-between">
                <div>
                  <div className="font-light mb-3 flex gap-4 text-[14px] text-white opacity-60">
                    <span>Card Holder</span>
                    <span>Expires</span>
                  </div>
                  <div className="text-[16px] font-bold text-white flex gap-4">
                    <span>Jack Peterson</span>
                    <span>11/22</span>
                  </div>
                </div>

                <svg
                  width="38"
                  height="33"
                  viewBox="0 0 38 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.0559 2.78101H13.8821V23.2192H24.0559V2.78101Z"
                    fill="#FB8C00"
                  />
                  <path
                    d="M14.5605 13C14.5605 8.84757 16.3063 5.16214 18.9852 2.78091C17.0137 1.04757 14.5267 0 11.8139 0C5.38753 0 0.187744 5.81424 0.187744 13C0.187744 20.1858 5.38753 26 11.8139 26C14.5267 26 17.0137 24.9524 18.9852 23.2191C16.3026 20.8715 14.5605 17.1524 14.5605 13Z"
                    fill="#E91F63"
                  />
                  <path
                    d="M37.7829 13C37.7829 20.1858 32.5831 26 26.1567 26C23.4439 26 20.9569 24.9524 18.9854 23.2191C21.6981 20.8337 23.4101 17.1524 23.4101 13C23.4101 8.84757 21.6643 5.16214 18.9854 2.78091C20.9531 1.04757 23.4402 0 26.1529 0C32.5831 0 37.7829 5.8521 37.7829 13Z"
                    fill="#FB8C00"
                  />
                </svg>
              </div>
            </div>
            <div className="flex gap-2 lg:[50%] lg:flex-nowrap sm:flex-wrap sm:w-full ">
              <div className="rounded-xl lg:w-[50%] sm:w-full flex gap-2 flex-col items-center justify-center bg-secondery-color p-5 shadow-[0_2px_6px_rgba(0, 0, 0, 0.25)]">
                <div className="flex flex-col items-center gap-5 w-full">
                  <div className="bg-gradient-to-b mb- flex items-center rounded-md  h-[64px] w-[64px] justify-center from-[#E93B77] to-[#DA1F63]">
                    <svg
                      width="19"
                      height="21"
                      viewBox="0 0 19 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.5 0L0 5V7H19V5L9.5 0ZM14 9V16H17V9H14ZM0 21H19V18H0V21ZM8 9V16H11V9H8ZM2 9V16H5V9H2Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-2 text items-center">
                    <span className="text-secondery-color text-[16px] font-bold">
                      Salary
                    </span>
                    <span className="text-secondery-gray-black opacity-60 text-[12px] font-normal">
                      Belong Interactive
                    </span>
                  </div>
                </div>
                <div className="border-t-[1px] py-1 w-full text-center border-[#F0F2F5]  border-collapse">
                  <span className="font-boldm  text-[20px] text-secondery-color">
                    +$2000
                  </span>
                </div>
              </div>
              <div className="rounded-xl lg:w-[50%] sm:w-full flex gap-2 flex-col items-center justify-center bg-secondery-color p-5 shadow-[0_2px_6px_rgba(0, 0, 0, 0.25)]">
                <div className="flex flex-col items-center gap-5 w-full">
                  <div className="bg-gradient-to-b mb- flex items-center rounded-md  h-[64px] w-[64px] justify-center from-[#E93B77] to-[#DA1F63]">
                    <svg
                      width="19"
                      height="21"
                      viewBox="0 0 19 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.5 0L0 5V7H19V5L9.5 0ZM14 9V16H17V9H14ZM0 21H19V18H0V21ZM8 9V16H11V9H8ZM2 9V16H5V9H2Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-2 text items-center">
                    <span className="text-secondery-color text-[16px] font-bold">
                      PayPal
                    </span>
                    <span className="text-secondery-gray-black opacity-60 text-[12px] font-normal">
                      Freelance Payment
                    </span>
                  </div>
                </div>
                <div className="border-t-[1px] py-1 w-full text-center border-[#F0F2F5]  border-collapse">
                  <span className="font-boldm  text-[20px] text-secondery-color">
                    $455
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-xl shadow-[0_2px_6px_rgba(0, 0, 0, 0.25)] p-5 bg-secondery-color">
            <div className="flex items-center justify-between">
              <h6 className="font-bold text-[16px] text-secondery-color">
                Payment Method
              </h6>
              <button className="shadow-[0_2px_6px_rgba(0, 0, 0, 0.25)]  bg-gradient-to-br from-[#3E3D45] to-[#202020] max-w-[200px] gap-3 flex rounded-lg px-6 py-5 ">
                <svg
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.0034 9.75H10.5034V14.25H9.00342V9.75H4.50342V8.25H9.00342V3.75H10.5034V8.25H15.0034V9.75Z"
                    fill="white"
                  />
                </svg>
                <span className="text-[12px] text-nowrap font-bold text-white">
                  ADD NEW CARD
                </span>
              </button>
            </div>
            <div className="flex lg:flex-nowrap sm:flex-wrap gap-7 mt-4">
              <div className="lg:w-1/2 sm:w-full p-5 flex items-center justify-between rounded-lg border-[1px] border-[#7B809A]">
                <div className="flex items-center gap-3 ">
                  <svg
                    width="30"
                    height="25"
                    viewBox="0 0 30 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.7332 2.10669H10.9883V17.5902H18.7332V2.10669Z"
                      fill="#FB8C00"
                    />
                    <path
                      d="M11.5047 9.84848C11.5047 6.70271 12.8337 3.91071 14.873 2.10675C13.3722 0.793616 11.4789 0 9.41378 0C4.52163 0 0.563232 4.40473 0.563232 9.84848C0.563232 15.2922 4.52163 19.697 9.41378 19.697C11.4789 19.697 13.3722 18.9034 14.873 17.5902C12.8308 15.8118 11.5047 12.9943 11.5047 9.84848Z"
                      fill="#E91F63"
                    />
                    <path
                      d="M29.1829 9.84848C29.1829 15.2922 25.2245 19.697 20.3323 19.697C18.2672 19.697 16.3739 18.9034 14.873 17.5902C16.9382 15.7831 18.2414 12.9943 18.2414 9.84848C18.2414 6.70271 16.9124 3.91071 14.873 2.10675C16.3711 0.793616 18.2643 0 20.3294 0C25.2245 0 29.1829 4.43341 29.1829 9.84848Z"
                      fill="#FB8C00"
                    />
                    <path
                      d="M5.75052 24.9451V23.286C5.75052 22.6513 5.40681 22.2357 4.81677 22.2357C4.52175 22.2357 4.20096 22.3453 3.98041 22.7061C3.80855 22.4033 3.56223 22.2357 3.19274 22.2357C2.94641 22.2357 2.70008 22.3195 2.50531 22.6223V22.2905H1.98975V24.9451H2.50531V23.4793C2.50531 23.0089 2.72586 22.7866 3.06957 22.7866C3.41329 22.7866 3.58514 23.0347 3.58514 23.4793V24.9451H4.10071V23.4793C4.10071 23.0089 4.34703 22.7866 4.66497 22.7866C5.00868 22.7866 5.18054 23.0347 5.18054 23.4793V24.9451H5.75052ZM13.3981 22.2905H12.5617V21.4883H12.0462V22.2905H11.5793V22.8156H12.0462V24.0334C12.0462 24.6423 12.2667 24.9999 12.8568 24.9999C13.0773 24.9999 13.3236 24.9161 13.4955 24.8066L13.3465 24.3072C13.1976 24.4168 13.0258 24.4458 12.9026 24.4458C12.6563 24.4458 12.5589 24.2783 12.5589 24.0044V22.8156H13.3952V22.2905H13.3981ZM17.7747 22.2325C17.4797 22.2325 17.282 22.4 17.1589 22.6191V22.2873H16.6433V24.9419H17.1589V23.4471C17.1589 23.0057 17.3307 22.7544 17.6515 22.7544C17.7489 22.7544 17.8721 22.7834 17.9723 22.8092L18.1213 22.2551C18.0182 22.2325 17.8721 22.2325 17.7747 22.2325ZM11.1611 22.5096C10.9148 22.3163 10.5711 22.2325 10.2016 22.2325C9.61155 22.2325 9.21915 22.5643 9.21915 23.0895C9.21915 23.5308 9.51417 23.7821 10.0297 23.8627L10.2761 23.8917C10.5453 23.9464 10.6942 24.0302 10.6942 24.1687C10.6942 24.362 10.4966 24.5005 10.1529 24.5005C9.80919 24.5005 9.53708 24.362 9.36522 24.2235L9.1189 24.6648C9.38814 24.8871 9.75763 24.9967 10.1271 24.9967C10.8145 24.9967 11.2098 24.6359 11.2098 24.1397C11.2098 23.6694 10.889 23.4213 10.3992 23.3375L10.1529 23.3085C9.93235 23.2795 9.76049 23.2248 9.76049 23.0605C9.76049 22.8672 9.93235 22.7576 10.2045 22.7576C10.4995 22.7576 10.7945 22.8962 10.9434 22.9799L11.1611 22.5096ZM24.8781 22.2325C24.5831 22.2325 24.3854 22.4 24.2623 22.6191V22.2873H23.7467V24.9419H24.2623V23.4471C24.2623 23.0057 24.4341 22.7544 24.7549 22.7544C24.8523 22.7544 24.9755 22.7834 25.0757 22.8092L25.2247 22.2615C25.1244 22.2325 24.9783 22.2325 24.8781 22.2325ZM18.2903 23.6178C18.2903 24.42 18.7829 24.9999 19.5448 24.9999C19.8885 24.9999 20.1349 24.9161 20.3812 24.6971L20.1349 24.2267C19.9372 24.3942 19.7425 24.4748 19.519 24.4748C19.1009 24.4748 18.8058 24.1429 18.8058 23.6178C18.8058 23.1185 19.1009 22.7866 19.519 22.7609C19.7396 22.7609 19.9372 22.8446 20.1349 23.0089L20.3812 22.5386C20.1349 22.3163 19.8885 22.2357 19.5448 22.2357C18.7829 22.2325 18.2903 22.8156 18.2903 23.6178ZM23.0593 23.6178V22.2905H22.5437V22.6223C22.3718 22.3743 22.1255 22.2357 21.8047 22.2357C21.1402 22.2357 20.6246 22.8156 20.6246 23.6178C20.6246 24.42 21.1402 24.9999 21.8047 24.9999C22.1484 24.9999 22.3948 24.8614 22.5437 24.6133V24.9451H23.0593V23.6178ZM21.166 23.6178C21.166 23.1475 21.4352 22.7609 21.8792 22.7609C22.2974 22.7609 22.5924 23.1217 22.5924 23.6178C22.5924 24.0882 22.2974 24.4748 21.8792 24.4748C21.4381 24.4458 21.166 24.085 21.166 23.6178ZM14.9964 22.2325C14.3089 22.2325 13.8163 22.7866 13.8163 23.6146C13.8163 24.4458 14.3089 24.9967 15.0221 24.9967C15.3659 24.9967 15.7096 24.8871 15.9817 24.6359L15.7353 24.2203C15.5377 24.3878 15.2914 24.4973 15.0479 24.4973C14.7271 24.4973 14.4092 24.3298 14.3347 23.8627H16.0791C16.0791 23.7789 16.0791 23.7241 16.0791 23.6404C16.102 22.7866 15.658 22.2325 14.9964 22.2325ZM14.9964 22.7319C15.3172 22.7319 15.5377 22.9542 15.5864 23.3665H14.3576C14.4063 23.0089 14.6269 22.7319 14.9964 22.7319ZM27.8054 23.6178V21.2402H27.2898V22.6223C27.1179 22.3743 26.8716 22.2357 26.5508 22.2357C25.8863 22.2357 25.3707 22.8156 25.3707 23.6178C25.3707 24.42 25.8863 24.9999 26.5508 24.9999C26.8945 24.9999 27.1408 24.8614 27.2898 24.6133V24.9451H27.8054V23.6178ZM25.9121 23.6178C25.9121 23.1475 26.1813 22.7609 26.6253 22.7609C27.0435 22.7609 27.3385 23.1217 27.3385 23.6178C27.3385 24.0882 27.0435 24.4748 26.6253 24.4748C26.1813 24.4458 25.9121 24.085 25.9121 23.6178ZM8.65202 23.6178V22.2905H8.13646V22.6223C7.9646 22.3743 7.71827 22.2357 7.39748 22.2357C6.73297 22.2357 6.2174 22.8156 6.2174 23.6178C6.2174 24.42 6.73297 24.9999 7.39748 24.9999C7.74119 24.9999 7.98751 24.8614 8.13646 24.6133V24.9451H8.65202V23.6178ZM6.73583 23.6178C6.73583 23.1475 7.00507 22.7609 7.44903 22.7609C7.86721 22.7609 8.16223 23.1217 8.16223 23.6178C8.16223 24.0882 7.86721 24.4748 7.44903 24.4748C7.00507 24.4458 6.73583 24.085 6.73583 23.6178Z"
                      fill="#191919"
                    />
                  </svg>
                  <div className="font-bold text-[16px] text-secondery-color">
                    <span>****</span>
                    <span>****</span>
                    <span>****</span>
                    <span>7852</span>
                  </div>
                </div>
                <svg
                  width="17"
                  height="18"
                  viewBox="0 0 17 18"
                  className="fill-secondery-color"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14.124 5.27992C14.3856 4.98742 14.3856 4.49992 14.124 4.22242L12.5544 2.46742C12.3062 2.17492 11.8702 2.17492 11.6086 2.46742L10.3744 3.83992L12.8898 6.65242L14.124 5.27992ZM2.24463 12.9374V15.7499H4.76003L12.1788 7.44742L9.66339 4.63492L2.24463 12.9374Z" />
                </svg>
              </div>
              <div className="lg:w-1/2 sm:w-full p-5 flex items-center justify-between rounded-lg border-[1px] border-[#7B809A]">
                <div className="flex items-center gap-3 ">
                  <svg
                    width="30"
                    height="25"
                    viewBox="0 0 30 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_10059_318)">
                      <path
                        d="M12.8103 18.0287H10.4919L11.942 7.76172H14.2603L12.8103 18.0287Z"
                        fill="#00579F"
                      />
                      <path
                        d="M21.2148 8.01279C20.7575 7.80505 20.0322 7.57568 19.1354 7.57568C16.8459 7.57568 15.2337 8.97366 15.2238 10.9724C15.2048 12.447 16.3781 13.266 17.2556 13.7577C18.1526 14.2601 18.4575 14.5881 18.4575 15.0359C18.4484 15.7237 17.7327 16.0408 17.0652 16.0408C16.1396 16.0408 15.6437 15.8773 14.89 15.4947L14.5847 15.3306L14.2603 17.6353C14.804 17.919 15.8058 18.1707 16.8459 18.1818C19.2785 18.1818 20.8622 16.8054 20.881 14.6755C20.8903 13.5067 20.2707 12.6112 18.935 11.8794C18.1241 11.4096 17.6275 11.0928 17.6275 10.6122C17.637 10.1752 18.0475 9.72767 18.9628 9.72767C19.7165 9.70575 20.2703 9.9132 20.6898 10.1208L20.8995 10.2298L21.2148 8.01279Z"
                        fill="#00579F"
                      />
                      <path
                        d="M24.2959 14.3915C24.4869 13.8016 25.2215 11.5188 25.2215 11.5188C25.2119 11.5408 25.4121 10.9181 25.5266 10.5359L25.6886 11.4206C25.6886 11.4206 26.1276 13.8781 26.223 14.3915C25.8606 14.3915 24.7538 14.3915 24.2959 14.3915ZM27.1577 7.76172H25.3644C24.8114 7.76172 24.3913 7.94725 24.1527 8.61357L20.709 18.0285H23.1416C23.1416 18.0285 23.5421 16.7613 23.6282 16.4884C23.8951 16.4884 26.2615 16.4884 26.6048 16.4884C26.6714 16.8489 26.8814 18.0285 26.8814 18.0285H29.0281L27.1577 7.76172Z"
                        fill="#00579F"
                      />
                      <path
                        d="M8.55547 7.76172L6.28499 14.7628L6.03688 13.3429C5.61712 11.7045 4.30065 9.92445 2.83154 9.03935L4.91122 18.0178H7.36286L11.007 7.76172H8.55547Z"
                        fill="#00579F"
                      />
                      <path
                        d="M4.17668 7.76172H0.446607L0.408447 7.96917C3.31814 8.82116 5.24517 10.8749 6.0369 13.3433L5.22603 8.62475C5.09253 7.96902 4.68228 7.78335 4.17668 7.76172Z"
                        fill="#FB8C00"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_10059_318">
                        <rect
                          width="28.6197"
                          height="10.6061"
                          fill="white"
                          transform="translate(0.408447 7.57568)"
                        />
                      </clipPath>
                    </defs>
                  </svg>

                  <div className="font-bold text-[16px] text-secondery-color">
                    <span>****</span>
                    <span>****</span>
                    <span>****</span>
                    <span>7852</span>
                  </div>
                </div>
                <svg
                  width="17"
                  height="18"
                  viewBox="0 0 17 18"
                  className="fill-secondery-color"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14.124 5.27992C14.3856 4.98742 14.3856 4.49992 14.124 4.22242L12.5544 2.46742C12.3062 2.17492 11.8702 2.17492 11.6086 2.46742L10.3744 3.83992L12.8898 6.65242L14.124 5.27992ZM2.24463 12.9374V15.7499H4.76003L12.1788 7.44742L9.66339 4.63492L2.24463 12.9374Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-[30%] sm:w-full bg-secondery-color rounded-xl p-5">
          <div className="flex items-center justify-between">
            <h6 className="text-[16px] font-bold text-secondery-color">
              Invoices
            </h6>
            <button className="py-2 text-[12px] font-bold max-w-[100px]  text-[#E91F63] px-4 border-[1px] border-[#E91F63] rounded-lg">
              VIEW ALL
            </button>
          </div>
          <div className="mt-5 flex flex-col gap-7">
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-start">
                <h4 className="text-[14px] font-bold text-secondery-color">
                  March, 01, 2020
                </h4>
                <span className="opacity-60 text-gray-black font-normal text-[12px]">
                  #MS-415646
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="opacity-60 text-gray-black font-normal text-[14px]">
                  $180
                </span>
                <div className="flex gap-1 items-center">
                  <svg
                    width="17"
                    height="18"
                    viewBox="0 0 17 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.81687 7.875H9.48765V10.125H8.81687V7.875ZM5.46301 8.625H6.13378V7.875H5.46301V8.625ZM14.1831 4.5V13.5C14.1831 13.8978 14.0417 14.2794 13.7901 14.5607C13.5385 14.842 13.1973 15 12.8415 15H4.79223C4.43643 15 4.0952 14.842 3.84361 14.5607C3.59202 14.2794 3.45068 13.8978 3.45068 13.5V4.5C3.45068 4.10218 3.59202 3.72064 3.84361 3.43934C4.0952 3.15804 4.43643 3 4.79223 3H12.8415C13.1973 3 13.5385 3.15804 13.7901 3.43934C14.0417 3.72064 14.1831 4.10218 14.1831 4.5ZM7.13994 7.875C7.13994 7.57663 7.03393 7.29048 6.84524 7.0795C6.65655 6.86853 6.40063 6.75 6.13378 6.75H4.45684V11.25H5.46301V9.75H6.13378C6.40063 9.75 6.65655 9.63147 6.84524 9.4205C7.03393 9.20952 7.13994 8.92337 7.13994 8.625V7.875ZM10.4938 7.875C10.4938 7.57663 10.3878 7.29048 10.1991 7.0795C10.0104 6.86853 9.7545 6.75 9.48765 6.75H7.81071V11.25H9.48765C9.7545 11.25 10.0104 11.1315 10.1991 10.9205C10.3878 10.7095 10.4938 10.4234 10.4938 10.125V7.875ZM13.1769 6.75H11.1646V11.25H12.1707V9.75H13.1769V8.625H12.1707V7.875H13.1769V6.75Z"
                      fill="#344767"
                    />
                  </svg>
                  <span className="text-[14px] font-bold text-secondery-color">
                    PDF
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-start">
                <h4 className="text-[14px] font-bold text-secondery-color">
                  February, 10, 2021
                </h4>
                <span className="opacity-60 text-gray-black font-normal text-[12px]">
                  #RV-126749
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="opacity-60 text-gray-black font-normal text-[14px]">
                  $250
                </span>
                <div className="flex gap-1 items-center">
                  <svg
                    width="17"
                    height="18"
                    viewBox="0 0 17 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.81687 7.875H9.48765V10.125H8.81687V7.875ZM5.46301 8.625H6.13378V7.875H5.46301V8.625ZM14.1831 4.5V13.5C14.1831 13.8978 14.0417 14.2794 13.7901 14.5607C13.5385 14.842 13.1973 15 12.8415 15H4.79223C4.43643 15 4.0952 14.842 3.84361 14.5607C3.59202 14.2794 3.45068 13.8978 3.45068 13.5V4.5C3.45068 4.10218 3.59202 3.72064 3.84361 3.43934C4.0952 3.15804 4.43643 3 4.79223 3H12.8415C13.1973 3 13.5385 3.15804 13.7901 3.43934C14.0417 3.72064 14.1831 4.10218 14.1831 4.5ZM7.13994 7.875C7.13994 7.57663 7.03393 7.29048 6.84524 7.0795C6.65655 6.86853 6.40063 6.75 6.13378 6.75H4.45684V11.25H5.46301V9.75H6.13378C6.40063 9.75 6.65655 9.63147 6.84524 9.4205C7.03393 9.20952 7.13994 8.92337 7.13994 8.625V7.875ZM10.4938 7.875C10.4938 7.57663 10.3878 7.29048 10.1991 7.0795C10.0104 6.86853 9.7545 6.75 9.48765 6.75H7.81071V11.25H9.48765C9.7545 11.25 10.0104 11.1315 10.1991 10.9205C10.3878 10.7095 10.4938 10.4234 10.4938 10.125V7.875ZM13.1769 6.75H11.1646V11.25H12.1707V9.75H13.1769V8.625H12.1707V7.875H13.1769V6.75Z"
                      fill="#344767"
                    />
                  </svg>
                  <span className="text-[14px] font-bold text-secondery-color">
                    PDF
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-start">
                <h4 className="text-[14px] font-bold text-secondery-color">
                  April, 05, 2020
                </h4>
                <span className="opacity-60 text-gray-black font-normal text-[12px]">
                  #FB-212562
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="opacity-60 text-gray-black font-normal text-[14px]">
                  $560
                </span>
                <div className="flex gap-1 items-center">
                  <svg
                    width="17"
                    height="18"
                    viewBox="0 0 17 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.81687 7.875H9.48765V10.125H8.81687V7.875ZM5.46301 8.625H6.13378V7.875H5.46301V8.625ZM14.1831 4.5V13.5C14.1831 13.8978 14.0417 14.2794 13.7901 14.5607C13.5385 14.842 13.1973 15 12.8415 15H4.79223C4.43643 15 4.0952 14.842 3.84361 14.5607C3.59202 14.2794 3.45068 13.8978 3.45068 13.5V4.5C3.45068 4.10218 3.59202 3.72064 3.84361 3.43934C4.0952 3.15804 4.43643 3 4.79223 3H12.8415C13.1973 3 13.5385 3.15804 13.7901 3.43934C14.0417 3.72064 14.1831 4.10218 14.1831 4.5ZM7.13994 7.875C7.13994 7.57663 7.03393 7.29048 6.84524 7.0795C6.65655 6.86853 6.40063 6.75 6.13378 6.75H4.45684V11.25H5.46301V9.75H6.13378C6.40063 9.75 6.65655 9.63147 6.84524 9.4205C7.03393 9.20952 7.13994 8.92337 7.13994 8.625V7.875ZM10.4938 7.875C10.4938 7.57663 10.3878 7.29048 10.1991 7.0795C10.0104 6.86853 9.7545 6.75 9.48765 6.75H7.81071V11.25H9.48765C9.7545 11.25 10.0104 11.1315 10.1991 10.9205C10.3878 10.7095 10.4938 10.4234 10.4938 10.125V7.875ZM13.1769 6.75H11.1646V11.25H12.1707V9.75H13.1769V8.625H12.1707V7.875H13.1769V6.75Z"
                      fill="#344767"
                    />
                  </svg>
                  <span className="text-[14px] font-bold text-secondery-color">
                    PDF
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-start">
                <h4 className="text-[14px] font-bold text-secondery-color">
                  June, 25, 2019
                </h4>
                <span className="opacity-60 text-gray-black font-normal text-[12px]">
                  #QW-103578
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="opacity-60 text-gray-black font-normal text-[14px]">
                  $120
                </span>
                <div className="flex gap-1 items-center">
                  <svg
                    width="17"
                    height="18"
                    viewBox="0 0 17 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.81687 7.875H9.48765V10.125H8.81687V7.875ZM5.46301 8.625H6.13378V7.875H5.46301V8.625ZM14.1831 4.5V13.5C14.1831 13.8978 14.0417 14.2794 13.7901 14.5607C13.5385 14.842 13.1973 15 12.8415 15H4.79223C4.43643 15 4.0952 14.842 3.84361 14.5607C3.59202 14.2794 3.45068 13.8978 3.45068 13.5V4.5C3.45068 4.10218 3.59202 3.72064 3.84361 3.43934C4.0952 3.15804 4.43643 3 4.79223 3H12.8415C13.1973 3 13.5385 3.15804 13.7901 3.43934C14.0417 3.72064 14.1831 4.10218 14.1831 4.5ZM7.13994 7.875C7.13994 7.57663 7.03393 7.29048 6.84524 7.0795C6.65655 6.86853 6.40063 6.75 6.13378 6.75H4.45684V11.25H5.46301V9.75H6.13378C6.40063 9.75 6.65655 9.63147 6.84524 9.4205C7.03393 9.20952 7.13994 8.92337 7.13994 8.625V7.875ZM10.4938 7.875C10.4938 7.57663 10.3878 7.29048 10.1991 7.0795C10.0104 6.86853 9.7545 6.75 9.48765 6.75H7.81071V11.25H9.48765C9.7545 11.25 10.0104 11.1315 10.1991 10.9205C10.3878 10.7095 10.4938 10.4234 10.4938 10.125V7.875ZM13.1769 6.75H11.1646V11.25H12.1707V9.75H13.1769V8.625H12.1707V7.875H13.1769V6.75Z"
                      fill="#344767"
                    />
                  </svg>
                  <span className="text-[14px] font-bold text-secondery-color">
                    PDF
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-start">
                <h4 className="text-[14px] font-bold text-secondery-color">
                  March, 01, 2020
                </h4>
                <span className="opacity-60 text-gray-black font-normal text-[12px]">
                  #AR-803481
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="opacity-60 text-gray-black font-normal text-[14px]">
                  $300
                </span>
                <div className="flex gap-1 items-center">
                  <svg
                    width="17"
                    height="18"
                    viewBox="0 0 17 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.81687 7.875H9.48765V10.125H8.81687V7.875ZM5.46301 8.625H6.13378V7.875H5.46301V8.625ZM14.1831 4.5V13.5C14.1831 13.8978 14.0417 14.2794 13.7901 14.5607C13.5385 14.842 13.1973 15 12.8415 15H4.79223C4.43643 15 4.0952 14.842 3.84361 14.5607C3.59202 14.2794 3.45068 13.8978 3.45068 13.5V4.5C3.45068 4.10218 3.59202 3.72064 3.84361 3.43934C4.0952 3.15804 4.43643 3 4.79223 3H12.8415C13.1973 3 13.5385 3.15804 13.7901 3.43934C14.0417 3.72064 14.1831 4.10218 14.1831 4.5ZM7.13994 7.875C7.13994 7.57663 7.03393 7.29048 6.84524 7.0795C6.65655 6.86853 6.40063 6.75 6.13378 6.75H4.45684V11.25H5.46301V9.75H6.13378C6.40063 9.75 6.65655 9.63147 6.84524 9.4205C7.03393 9.20952 7.13994 8.92337 7.13994 8.625V7.875ZM10.4938 7.875C10.4938 7.57663 10.3878 7.29048 10.1991 7.0795C10.0104 6.86853 9.7545 6.75 9.48765 6.75H7.81071V11.25H9.48765C9.7545 11.25 10.0104 11.1315 10.1991 10.9205C10.3878 10.7095 10.4938 10.4234 10.4938 10.125V7.875ZM13.1769 6.75H11.1646V11.25H12.1707V9.75H13.1769V8.625H12.1707V7.875H13.1769V6.75Z"
                      fill="#344767"
                    />
                  </svg>
                  <span className="text-[14px] font-bold text-secondery-color">
                    PDF
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-nowrap sm:flex-wrap gap-3 mt-3">
        <div className="rounded-lg lg:w-1/2 sm:w-full bg-secondery-color p-4">
          <h6 className="font-bold text-[16px] text-primery-color">
            Billing Information
          </h6>
          <div className="mt-6 p-3 bg-primery-color rounded-lg">
            <div className="flex items-center justify-between">
              <h6 className="font-bold text-[14px] text-primery-color">
                Oliver Liam
              </h6>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.5804 2.66667H11.2471L10.5804 2H7.24707L6.5804 2.66667H4.24707V4H13.5804V2.66667ZM4.91374 12.6667C4.91374 13.0203 5.05421 13.3594 5.30426 13.6095C5.55431 13.8595 5.89345 14 6.24707 14H11.5804C11.934 14 12.2732 13.8595 12.5232 13.6095C12.7733 13.3594 12.9137 13.0203 12.9137 12.6667V4.66667H4.91374V12.6667Z"
                      fill="#F44334"
                    />
                  </svg>
                  <span className="text-[12px] font-bold text-[#F44334]">
                    DELETE
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.4851 4.69329C14.7451 4.43329 14.7451 3.99996 14.4851 3.75329L12.9251 2.19329C12.6785 1.93329 12.2451 1.93329 11.9851 2.19329L10.7585 3.41329L13.2585 5.91329L14.4851 4.69329ZM2.67847 11.5V14H5.17847L12.5518 6.61996L10.0518 4.11996L2.67847 11.5Z"
                      fill="#344767"
                    />
                  </svg>
                  <span className="text-primery-color font-bold text-[12px]">
                    EDIT
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-3 flex flex-col gap-5">
              <div>
                <span className="text-[12px] font-normal opacity-60 text-gray-black">
                  Company Name:
                </span>
                <span className="text-[12px] font-bold text-primery-color">
                  Oliver Liam
                </span>
              </div>
              <div>
                <span className="text-[12px] font-normal opacity-60 text-gray-black">
                  Email Address:
                </span>{" "}
                <span className="text-[12px] font-bold text-primery-color">
                  oliver@burrito.com
                </span>
              </div>
              <div>
                <span className="text-[12px] font-normal opacity-60 text-gray-black">
                  VAT Number:
                </span>{" "}
                <span className="text-[12px] font-bold text-primery-color">
                  FRB1235476
                </span>
              </div>
            </div>
          </div>
          <div className="mt-6 p-3 bg-primery-color rounded-lg">
            <div className="flex items-center justify-between">
              <h6 className="font-bold text-[14px] text-primery-color">
                Oliver Liam
              </h6>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.5804 2.66667H11.2471L10.5804 2H7.24707L6.5804 2.66667H4.24707V4H13.5804V2.66667ZM4.91374 12.6667C4.91374 13.0203 5.05421 13.3594 5.30426 13.6095C5.55431 13.8595 5.89345 14 6.24707 14H11.5804C11.934 14 12.2732 13.8595 12.5232 13.6095C12.7733 13.3594 12.9137 13.0203 12.9137 12.6667V4.66667H4.91374V12.6667Z"
                      fill="#F44334"
                    />
                  </svg>
                  <span className="text-[12px] font-bold text-[#F44334]">
                    DELETE
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.4851 4.69329C14.7451 4.43329 14.7451 3.99996 14.4851 3.75329L12.9251 2.19329C12.6785 1.93329 12.2451 1.93329 11.9851 2.19329L10.7585 3.41329L13.2585 5.91329L14.4851 4.69329ZM2.67847 11.5V14H5.17847L12.5518 6.61996L10.0518 4.11996L2.67847 11.5Z"
                      fill="#344767"
                    />
                  </svg>
                  <span className="text-primery-color font-bold text-[12px]">
                    EDIT
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-3 flex flex-col gap-5">
              <div>
                <span className="text-[12px] font-normal opacity-60 text-gray-black">
                  Company Name:
                </span>
                <span className="text-[12px] font-bold text-primery-color">
                  Oliver Liam
                </span>
              </div>
              <div>
                <span className="text-[12px] font-normal opacity-60 text-gray-black">
                  Email Address:
                </span>
                <span className="text-[12px] font-bold text-primery-color">
                  oliver@burrito.com
                </span>
              </div>
              <div>
                <span className="text-[12px] font-normal opacity-60 text-gray-black">
                  VAT Number:
                </span>
                <span className="text-[12px] font-bold text-primery-color">
                  FRB1235476
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-lg lg:w-1/2 sm:w-full bg-secondery-color p-4">
          <div className="flex items-center justify-between">
            <h6 className="font-bold text-secondery-color text-[16px]">
              Your Transaction’s
            </h6>
            <div className="flex gap-2 items-center">
              <svg
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.55424 7.5H6.0137V9H7.55424V7.5ZM10.6353 7.5H9.09478V9H10.6353V7.5ZM13.7164 7.5H12.1759V9H13.7164V7.5ZM15.2569 2.25H14.4867V0.75H12.9461V2.25H6.78397V0.75H5.24343V2.25H4.47316C3.61816 2.25 2.93262 2.925 2.93262 3.75V14.25C2.93262 14.6478 3.09492 15.0294 3.38383 15.3107C3.67274 15.592 4.06458 15.75 4.47316 15.75H15.2569C15.6655 15.75 16.0574 15.592 16.3463 15.3107C16.6352 15.0294 16.7975 14.6478 16.7975 14.25V3.75C16.7975 3.35218 16.6352 2.97064 16.3463 2.68934C16.0574 2.40804 15.6655 2.25 15.2569 2.25ZM15.2569 14.25H4.47316V6H15.2569V14.25Z"
                  fill="#7B809A"
                />
              </svg>
              <span className="text-[14px] font-normal text-gray-black opacity-50">
                23 - 30 March 2020
              </span>
            </div>
          </div>
          <div className="mt-5">
            <div>
              <h5 className="text-gray-black opacity-60 text-[12px]">NEWEST</h5>
              <div className="mt-5 flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 items-center">
                    <svg
                      width="36"
                      height="34"
                      viewBox="0 0 36 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="17.4324" cy="17" r="16.5" stroke="#F44334" />
                      <path
                        d="M13.4324 15.5859L17.675 19.8286L21.9177 15.5859"
                        stroke="#E91F63"
                      />
                    </svg>
                    <div className="flex flex-col items-start gap-1">
                      <h6 className="text-secondery-color font-bold text-[14px]">
                        Netflix
                      </h6>
                      <span className="text-[12px] font-normal text-gray-black opacity-60">
                        27 March 2020, at 12:30 PM
                      </span>
                    </div>
                  </div>
                  <span className="font-bold text-[#F44334] text-[14px]">
                    - $ 2,500
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 items-center">
                    <svg
                      width="36"
                      height="34"
                      viewBox="0 0 36 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="17.4324" cy="17" r="16.5" stroke="#4CAF50" />
                      <path
                        d="M22.4324 19.4141L18.1897 15.1714L13.9471 19.4141"
                        stroke="#4CAF50"
                      />
                    </svg>

                    <div className="flex flex-col items-start gap-1">
                      <h6 className="text-secondery-color font-bold text-[14px]">
                        Apple
                      </h6>
                      <span className="text-[12px] font-normal text-gray-black opacity-60">
                        27 March 2020, at 04:30 AM
                      </span>
                    </div>
                  </div>
                  <span className="font-bold text-[#4CAF50] text-[14px]">
                    + $ 2,000
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div>
              <h5 className="text-gray-black opacity-60 text-[12px]">
                YESTERDAY
              </h5>
              <div className="mt-5 flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 items-center">
                    <svg
                      width="36"
                      height="34"
                      viewBox="0 0 36 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="17.4324" cy="17" r="16.5" stroke="#4CAF50" />
                      <path
                        d="M22.4324 19.4141L18.1897 15.1714L13.9471 19.4141"
                        stroke="#4CAF50"
                      />
                    </svg>

                    <div className="flex flex-col items-start gap-1">
                      <h6 className="text-secondery-color font-bold text-[14px]">
                        Stripe
                      </h6>
                      <span className="text-[12px] font-normal text-gray-black opacity-60">
                        26 March 2020, at 13:45 PM
                      </span>
                    </div>
                  </div>
                  <span className="font-bold text-[#4CAF50] text-[14px]">
                    + $ 750
                  </span>
                </div>
                 <div className="flex justify-between items-center">
                  <div className="flex gap-2 items-center">
                    <svg
                      width="36"
                      height="34"
                      viewBox="0 0 36 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="17.4324" cy="17" r="16.5" stroke="#4CAF50" />
                      <path
                        d="M22.4324 19.4141L18.1897 15.1714L13.9471 19.4141"
                        stroke="#4CAF50"
                      />
                    </svg>

                    <div className="flex flex-col items-start gap-1">
                      <h6 className="text-secondery-color font-bold text-[14px]">
                        HubSpot
                      </h6>
                      <span className="text-[12px] font-normal text-gray-black opacity-60">
                        26 March 2020, at 12:30 PM
                      </span>
                    </div>
                  </div>
                  <span className="font-bold text-[#4CAF50] text-[14px]">
                    + $ 1,000
                  </span>
                </div>
                  <div className="flex justify-between items-center">
                  <div className="flex gap-2 items-center">
                    <svg
                      width="36"
                      height="34"
                      viewBox="0 0 36 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="17.4324" cy="17" r="16.5" stroke="#4CAF50" />
                      <path
                        d="M22.4324 19.4141L18.1897 15.1714L13.9471 19.4141"
                        stroke="#4CAF50"
                      />
                    </svg>

                    <div className="flex flex-col items-start gap-1">
                      <h6 className="text-secondery-color font-bold text-[14px]">
                        Creative Tim
                      </h6>
                      <span className="text-[12px] font-normal text-gray-black opacity-60">
                        26 March 2020, at 08:30 AM
                      </span>
                    </div>
                  </div>
                  <span className="font-bold text-[#4CAF50] text-[14px]">
                   + $ 2,500
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Wallet;
