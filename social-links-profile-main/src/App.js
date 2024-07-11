function App() {
  return (
    <div className="container">
      <Header />
      <Section />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <img
        src="./avatar-jessica.jpeg"
        alt="Jessica's Avatar"
        className="header__avatar"
      />
      <h1 className="header__name">Jessica Randall</h1>
      <h3 className="header__address">London, United Kingdom</h3>
      <p className="header__title">"Front-end developer and avid reader."</p>
    </header>
  );
}

function Section() {
  return (
    <section className="links-section">
      <div className="links-list">
        <Links profileLink={"https://github.com/nayera540"}>GitHub</Links>
        <Links profileLink={"https://www.frontendmentor.io/profile/nayera540"}>
          Frontend Mentor
        </Links>
        <Links
          profileLink={"https://www.linkedin.com/in/nayera-hazem-72b1451b3/"}
        >
          LinkedIn
        </Links>
        <Links profileLink={"https://x.com/nanzoo26"}>Twitter</Links>
        <Links profileLink={"https://www.instagram.com/"}>Instagram</Links>
      </div>
    </section>
  );
}

function Links({ profileLink, children }) {
  return (
    <div className="links-list__item">
      <button>
        <a className="links" href={profileLink} target="_blank">
          {children}
        </a>
      </button>
    </div>
  );
}

export default App;
