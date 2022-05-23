import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './pages/public/Login';
import { CreateAccount } from './pages/public/CreateAccount';
import { ForgotPaassword } from './pages/public/ForgotPassword';
import { Feed } from './pages/private/Feed';
import { Me } from './pages/private/Me';
import Global from './styles/global';
import { ChatUsers } from './pages/private/ChatUsers';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/forgot-password" element={<ForgotPaassword />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/me" element={<Me />} />
          <Route path="/chatUsers" element={<ChatUsers />} />
        </Routes>
      </BrowserRouter>
      <Global />
    </>
  );
}

export default App;
