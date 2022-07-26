import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import Toolbar from "./components/Toolbar";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import SignUpPage from "./pages/SignUpPage";
import AllUsersPage from "./pages/AllUsersPage";
import SingleUserPage from "./pages/SingleUserPage";
import ChatPage from "./pages/ChatPage";
import UserChatsPage from "./pages/UserChatsPage";

function App() {

    const isOnline = useSelector((state) => state.users.value.isOnline);

  return (
    <div className="App">
      <BrowserRouter>
        {isOnline && <Toolbar/>}
        <Routes>

          <Route path='/' element={<LoginPage/>}/>
          <Route path='/signup' element={<SignUpPage/>}/>

          <Route path='/profile' element={<ProfilePage/>}/>
          <Route path='/users' element={<AllUsersPage/>}/>
          <Route path='/users/:id' element={<SingleUserPage/>}/>
          <Route path='/chat/:chatId' element={<ChatPage/>}/>
          <Route path='/chats' element={<UserChatsPage/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
