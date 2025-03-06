import { Route, Routes, useLocation } from "react-router";
import Layout from "./components/layout/Layout";
import OverView from "./Pages/Overview/OverView";
import Chart from "./Pages/Chart/Chart";
import Transactions from "./Pages/Transactions/Transactions";
import Chat from "./Pages/News/Chat";
import { AnimatePresence } from "framer-motion";
import Wallet from "./Pages/wallet/Wallet";
import MailBox from "./Pages/Mail-Box/MailBox";
function App() {
  const location = useLocation()
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
