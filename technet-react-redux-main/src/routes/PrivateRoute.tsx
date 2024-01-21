import { useAppSelector } from '@/redux/hooks';
import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface IProp {
  children: ReactNode;
}

export const PrivateRoute = ({ children }: IProp) => {
  const { pathname } = useLocation();
  const { user, isLoading } = useAppSelector((state) => state.user);

  if (isLoading) {
    <p>Loading...</p>;
  }
  if (user.email && !isLoading) {
    return <Navigate to={'/login'} state={{ path: pathname }} />;
  }

  return children;
};
