import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import { AuthContextProvider } from './context/authContext';
import Dashboard from './pages/Dashboard';
import Portfolio from './pages/Portfolio';
import Messages from './pages/Messages';
import NotFound from './pages/NotFound';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <AuthContextProvider>
      <ToastContainer />
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />}>
            <Route index element={<Portfolio />} />
            <Route path='messages' element={<Messages />} />
            <Route path='*' element={<NotFound />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
