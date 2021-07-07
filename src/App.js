import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { checkAuth } from 'store/slices/userSlice';
import Routes from './Routes';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const access = localStorage.getItem('access');

    if (access) {
      dispatch(checkAuth(access));
    }
  }, []);

  return (
    <div>
      <Routes />
    </div>
  );
}

export default App;
