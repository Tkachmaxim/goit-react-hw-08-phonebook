const getIsLogedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;
const getEmail = state => state.auth.user.email;

const authSelectors = { getIsLogedIn, getUserName, getEmail };

export default authSelectors;
