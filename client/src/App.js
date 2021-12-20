import './App.css';
import Sidebar from './components/Sidebar';
import HomePage from './pages/home/HomePage';
import ChannelPage from './pages/channel/ChannelPage';
import MemberPage from './pages/member/MemberPage';
import ChannelStatsPage from './pages/channelstats/ChannelStatsPage';
import MemberStatsPage from './pages/memberstats/MemberStatsPage';
import { Routes, Route, Outlet } from "react-router-dom";

function App() {
  return (
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/channels/:id" element={<ChannelPage />} />
          <Route path="/members/:id" element={<MemberPage />} />
          <Route path="channels" element={<ChannelStatsPage />} />
          <Route path="members" element={<MemberStatsPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
  );
}


function PageLayout() {
  return (
    <div className="page-root">
      <Sidebar />
      <Outlet />
    </div>
  );
}


function PageNotFound(){
  return (
    <h1>Page Not Found!! Fuck off.</h1>
  );
}
export default App;
