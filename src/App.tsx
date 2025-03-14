import { Route, Routes, useLocation } from "react-router";
import Layout from "./components/layout/Layout";
import OverView from "./Pages/Overview/OverView";
import Chart from "./Pages/Chart/Chart";
import Transactions from "./Pages/Transactions/Transactions";
import Chat from "./Pages/News/Chat";
import { AnimatePresence } from "framer-motion";
import Wallet from "./Pages/wallet/Wallet";
import MailBox from "./Pages/Mail-Box/MailBox";
import Swal from "sweetalert2";
import { useEffect } from "react";
import { useThemeContext } from "./Context/ThemeContext";
function App() {
  const location = useLocation()
  const {theme}  = useThemeContext()
  useEffect(() => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      background: theme ? "#14161d" : "#f8f8f8",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "success",
      title: `Welcome To Page ${location.pathname.substring(1)}`
    });
  },[location.pathname])
  return (
    <AnimatePresence >
      <Layout>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<OverView />} />
          <Route path="/chart" element={<Chart />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/wallet" element={<Wallet/>} />
          <Route path="/mail-box" element={<MailBox/>} />
        </Routes>
      </Layout>
    </AnimatePresence>
  );
}

export default App;
