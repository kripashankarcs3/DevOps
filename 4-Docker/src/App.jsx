function App() {
  const appEnv = import.meta.env.VITE_APP_ENV || 'development';

  return (
    <div
      style={{
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
        marginTop: '4em'
      }}
    >
      <h1>Hello from a containerized React app</h1>
      <p>
        App Environment: <strong>{appEnv}</strong>
      </p>
    </div>
  );
}

export default App;