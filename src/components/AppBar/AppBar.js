import s from './AppBar.module.css';
import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from './AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';

const AppBar = () => {
  const isLogIn = useSelector(authSelectors.getIsLogedIn);
  return (
    <nav className={s.navigation}>
      <Navigation />
      {isLogIn ? <UserMenu /> : <AuthNav />}
    </nav>
  );
};

export { AppBar };
