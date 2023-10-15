const App = () => {
  return (
    <div className="app">
      <section className="side-bar">
        <button>New chat</button>
        <ul className="history">
          <li>blugh </li>
        </ul>
        <nav></nav>
      </section>
      <section className="main">
        <h1>Gabes GPT</h1>
        <ul className="feed"></ul>
        <div className="bottom-section">
          <div className="input-container">
            <input />
            <div id="submit">➲</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
