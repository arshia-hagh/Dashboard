import { useDispatch } from "react-redux";
import imgProfile from "../../assets/img/Photo.png";
import { MenuSlice } from "../../Redux/MenuSlice";
import TextAniamtion from "../textanimation/AnmationText";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import DropNotif from "../dropnotif/DropNotif";
import DropAcc from "../dropacc/DropAcc";
function NavBar() {
  const dispath = useDispatch();
  const [showDropNotif, setShowDropNotif] = useState<boolean>(false);
  const [showDropAcc, setShowDropAcc] = useState<boolean>(false);
  console.log(showDropAcc, showDropNotif);
  return (
    <div className="row-span-1 p-7 max-h-[100px] flex items-center justify-between  border-b-2 border-[#00000040]">
      <div className="lg:hidden rounded-xl bg-secondery-color sm:block">
        <button
          onClick={() => dispath(MenuSlice.actions.openMenu({ menu: true }))}
          className="p-3 "
        >
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-gray-black"
          >
            <path
              d="M18.04 8.30989C18.6924 8.30989 19.3181 8.05071 19.7795 7.58938C20.2408 7.12804 20.5 6.50232 20.5 5.84989C20.5 5.19746 20.2408 4.57175 19.7795 4.11041C19.3181 3.64907 18.6924 3.38989 18.04 3.38989C17.3876 3.38989 16.7619 3.64907 16.3005 4.11041C15.8392 4.57175 15.58 5.19746 15.58 5.84989C15.58 6.50232 15.8392 7.12804 16.3005 7.58938C16.7619 8.05071 17.3876 8.30989 18.04 8.30989ZM6.96 8.30989C7.61243 8.30989 8.23814 8.05071 8.69948 7.58938C9.16082 7.12804 9.42 6.50232 9.42 5.84989C9.42 5.19746 9.16082 4.57175 8.69948 4.11041C8.23814 3.64907 7.61243 3.38989 6.96 3.38989C6.30757 3.38989 5.68186 3.64907 5.22052 4.11041C4.75918 4.57175 4.5 5.19746 4.5 5.84989C4.5 6.50232 4.75918 7.12804 5.22052 7.58938C5.68186 8.05071 6.30757 8.30989 6.96 8.30989ZM18.04 20.6099C18.3631 20.6099 18.6829 20.5463 18.9814 20.4226C19.2799 20.299 19.551 20.1178 19.7795 19.8894C20.0079 19.6609 20.1891 19.3898 20.3127 19.0913C20.4364 18.7928 20.5 18.4729 20.5 18.1499C20.5 17.8268 20.4364 17.507 20.3127 17.2085C20.1891 16.91 20.0079 16.6388 19.7795 16.4104C19.551 16.182 19.2799 16.0008 18.9814 15.8771C18.6829 15.7535 18.3631 15.6899 18.04 15.6899C17.3876 15.6899 16.7619 15.9491 16.3005 16.4104C15.8392 16.8717 15.58 17.4975 15.58 18.1499C15.58 18.8023 15.8392 19.428 16.3005 19.8894C16.7619 20.3507 17.3876 20.6099 18.04 20.6099ZM6.96 20.6099C7.28305 20.6099 7.60294 20.5463 7.9014 20.4226C8.19986 20.299 8.47105 20.1178 8.69948 19.8894C8.92792 19.6609 9.10912 19.3898 9.23274 19.0913C9.35637 18.7928 9.42 18.4729 9.42 18.1499C9.42 17.8268 9.35637 17.507 9.23274 17.2085C9.10912 16.91 8.92792 16.6388 8.69948 16.4104C8.47105 16.182 8.19986 16.0008 7.9014 15.8771C7.60294 15.7535 7.28305 15.6899 6.96 15.6899C6.30757 15.6899 5.68186 15.9491 5.22052 16.4104C4.75918 16.8717 4.5 17.4975 4.5 18.1499C4.5 18.8023 4.75918 19.428 5.22052 19.8894C5.68186 20.3507 6.30757 20.6099 6.96 20.6099Z"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="lg:block sm:hidden ">
        <TextAniamtion
          text={"Dashboard"}
          className="font-semibold text-nowrap text-[32px] text-primery-color"
        />
      </div>
      <form
        action=""
        className="relative lg:block  sm:hidden rounded-xl w-[50%] h-[44px]"
      >
        <input
          className="w-full p-5 font-normal  rounded-xl text-search-color text-[14px] bg-secondery-color  outline-none h-full"
          type="text"
          placeholder="Search..."
        />
        <div className="absolute right-3 top-2">
          <svg
            className="fill-gray-black"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z"
              fill-opacity="0.5"
            />
            <path
              d="M22.0004 22.7502C21.8104 22.7502 21.6204 22.6802 21.4704 22.5302L19.4704 20.5302C19.1804 20.2402 19.1804 19.7602 19.4704 19.4702C19.7604 19.1802 20.2404 19.1802 20.5304 19.4702L22.5304 21.4702C22.8204 21.7602 22.8204 22.2402 22.5304 22.5302C22.3804 22.6802 22.1904 22.7502 22.0004 22.7502Z"
              fill-opacity="0.5"
            />
          </svg>
        </div>
      </form>
      <div className="flex lg:gap-10 sm:gap-5">
        <div className="bg-secondery-color rounded-md ">
          <button
            onClick={() => {
              setShowDropNotif(!showDropNotif), setShowDropAcc(false);
            }}
            className="p-3"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="24" height="24" className="bg-secondery-color" />
              <path
                d="M12.02 20.53C9.68999 20.53 7.35999 20.16 5.14999 19.42C4.30999 19.13 3.66999 18.54 3.38999 17.77C3.09999 17 3.19999 16.15 3.65999 15.39L4.80999 13.48C5.04999 13.08 5.26999 12.28 5.26999 11.81V8.91998C5.26999 5.19998 8.29999 2.16998 12.02 2.16998C15.74 2.16998 18.77 5.19998 18.77 8.91998V11.81C18.77 12.27 18.99 13.08 19.23 13.49L20.37 15.39C20.8 16.11 20.88 16.98 20.59 17.77C20.3 18.56 19.67 19.16 18.88 19.42C16.68 20.16 14.35 20.53 12.02 20.53ZM12.02 3.66998C9.12999 3.66998 6.76999 6.01998 6.76999 8.91998V11.81C6.76999 12.54 6.46999 13.62 6.09999 14.25L4.94999 16.16C4.72999 16.53 4.66999 16.92 4.79999 17.25C4.91999 17.59 5.21999 17.85 5.62999 17.99C9.80999 19.39 14.24 19.39 18.42 17.99C18.78 17.87 19.06 17.6 19.19 17.24C19.32 16.88 19.29 16.49 19.09 16.16L17.94 14.25C17.56 13.6 17.27 12.53 17.27 11.8V8.91998C17.27 6.01998 14.92 3.66998 12.02 3.66998Z"
                className="fill-gray-black"
              />
              <path
                d="M13.88 3.93999C13.81 3.93999 13.74 3.92999 13.67 3.90999C13.38 3.82999 13.1 3.76999 12.83 3.72999C11.98 3.61999 11.16 3.67999 10.39 3.90999C10.11 3.99999 9.80999 3.90999 9.61999 3.69999C9.42999 3.48999 9.36999 3.18999 9.47999 2.91999C9.88999 1.86999 10.89 1.17999 12.03 1.17999C13.17 1.17999 14.17 1.85999 14.58 2.91999C14.68 3.18999 14.63 3.48999 14.44 3.69999C14.29 3.85999 14.08 3.93999 13.88 3.93999Z"
                className="fill-gray-black"
              />
              <path
                d="M12.02 22.81C11.03 22.81 10.07 22.41 9.36999 21.71C8.66999 21.01 8.26999 20.05 8.26999 19.06H9.76999C9.76999 19.65 10.01 20.23 10.43 20.65C10.85 21.07 11.43 21.31 12.02 21.31C13.26 21.31 14.27 20.3 14.27 19.06H15.77C15.77 21.13 14.09 22.81 12.02 22.81Z"
                className="fill-gray-black"
              />
              <circle cx="17" cy="5" r="2.5" fill="#F46D22" stroke="#E6EFFE" />
            </svg>
          </button>
          <AnimatePresence>{showDropNotif && <DropNotif />}</AnimatePresence>
        </div>
        <div className="flex lg:gap-6 sm:gap-3 items-center">
          <div>
            <img src={imgProfile} alt="" />
          </div>
          <div className="flex items-center  gap-7">
            <span className="font-semibold lg:inline-block sm:hidden text-nowrap text-primery-color text-[14px]">
              Arshia Hagh
            </span>
            <button
              onClick={() => {
                setShowDropAcc(!showDropAcc), setShowDropNotif(false);
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 14.91C11.81 14.91 11.62 14.84 11.47 14.69L7.93997 11.16C7.64997 10.87 7.64997 10.39 7.93997 10.1C8.22997 9.81001 8.70997 9.81001 8.99997 10.1L12 13.1L15 10.1C15.29 9.81001 15.77 9.81001 16.06 10.1C16.35 10.39 16.35 10.87 16.06 11.16L12.53 14.69C12.38 14.84 12.19 14.91 12 14.91Z"
                  fill="#9E9E9E"
                />
              </svg>
            </button>
          </div>
          <AnimatePresence>{showDropAcc && <DropAcc />}</AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
