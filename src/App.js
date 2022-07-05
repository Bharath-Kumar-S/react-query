import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Userspage from "./components/Users.page";
import RQuserspage from "./components/RQ.users.page";
import Homepage from "./components/Home.page";
import {QueryClient, QueryClientProvider} from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools'

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="users" element={<Userspage />} />
          <Route path="rqusers" element={<RQuserspage />} />
          <Route path="home" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
    </QueryClientProvider>
  );
}

export default App;
