import React from 'react';
import UserRegister from './pages/user';
import Login from './pages/login';
import useToken from './components/token';

const App = () => {
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <UserRegister />
  );
}

export default App;
