import { useDispatch, useSelector } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import authSelectors from 'redux/auth/auth-selectors';
import defaultAvatar from './defaultAvatar.png';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};
const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(authSelectors.getEmail);
  const avatar = defaultAvatar;

  return (
    <div style={styles.container}>
      <img src={avatar} alt="" width="32" style={styles.avatar} />
      <span style={styles.name}>Welcome, {email}</span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Sign Out
      </button>
    </div>
  );
};

export { UserMenu };
