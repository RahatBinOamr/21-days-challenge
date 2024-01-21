import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { Toaster } from './components/ui/Toaster';
import MainLayout from './layouts/MainLayout';
import { auth } from './lib/firebase';
import { setLading, setUser } from './redux/features/user/userSlice';
import { useAppDispatch } from './redux/hooks';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLading(true));

    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email));
        dispatch(setLading(false));
      } else {
        dispatch(setLading(false));
      }
    });
  }, [dispatch]);

  return (
    <div>
      <Toaster />
      <MainLayout />
    </div>
  );
}

export default App;
