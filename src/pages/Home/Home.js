const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'blue',
    fontWeight: 500,
    fontSize: 70,
    textAlign: 'center',
  },
};

const Home = () => (
  <div style={styles.container}>
    <h1 style={styles.title}>Phone Book</h1>
  </div>
);

export { Home };
