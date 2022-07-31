import { Route, Routes } from 'react-router-dom';
import { Contacts } from './components/Contacts/Contacts';
import { Home } from './pages/Home/Home';
import { Register } from './pages/Register/Register';
import { AppBar } from './components/AppBar/AppBar';
import { Login } from 'pages/Login/Login';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoutes';
import { PublicRoutes } from './components/PublicRoutes';
import authOperations from 'redux/auth/auth-operations';

const App = () => {
  const distpatch = useDispatch();
  useEffect(() => {
    distpatch(authOperations.fetchCurrentUser());
  }, [distpatch]);
  return (
    <>
      <AppBar />
      <Routes>
        <Route extact path="/" element={<Home />} />
        <Route
          path="login"
          element={
            <PublicRoutes>
              <Login />
            </PublicRoutes>
          }
        />
        <Route
          path="register"
          element={
            <PublicRoutes>
              <Register />
            </PublicRoutes>
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute>
              <Contacts />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
