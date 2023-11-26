import Registration from './pages/Registration/Registration.jsx';
import Main from './pages/Main/Main.jsx';
import Profile from './pages/Profile/Profile.jsx';
import Chat from './pages/Chat/Chat.jsx';
import Activities from './pages/Activities/Activities.jsx';
import Football from './pages/Football/Football.jsx';
import Coffee from './pages/Coffee/Coffee.jsx';

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
        <Route path="/football" element={<Football />} />
        <Route path="/coffee" element={<Coffee />} />
      </Routes>
    </>
  );
}

export default App;
