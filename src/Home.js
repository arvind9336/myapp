import React from 'react';

const Home = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <h1>Landing Page</h1>
      </header>
      <main className="main">
        <section className="content">
          <p>This is the main content area.</p>
        </section>
        <aside className="sidebar">
          <p>This is the sidebar content.</p>
        </aside>
      </main>
      <footer className="footer">
        <p>About</p>
        <p>News</p>
        <p>ShowCase</p>
      </footer>
    </div>
  );
};

export default Home;
