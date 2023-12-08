import Registration from './pages/Registration/Registration.jsx';
import Main from './pages/Main/Main.jsx';
import Profile from './pages/Profile/Profile.jsx';
import Chat from './pages/Chat/Chat.jsx';
import Activities from './pages/Activities/Activities.jsx';
import ActivitiesPage from './pages/ActivitiesPage/ActivitiesPage.jsx';
import Schedule from './pages/Schedule/Schedule.jsx';

import { Route, Routes } from 'react-router';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/main" element={<Main />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/activites" element={<Activities />} />
        <Route path="/football" element={<ActivitiesPage />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
    </>
  );
}

export default App;
