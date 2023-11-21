import Registration from './pages/Registration/Registration.jsx';
import Main from './pages/Main/Main.jsx';

import { Route, Routes } from 'react-router';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
