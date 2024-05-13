import "./landing.css";

export default function Landing() {
  return (
    <div className="wrapper">
      <header className="drop-shadow">
        <h1 className="title outfit-font text-shadow">
          Welcome to Beams<span id="gg">.GG</span>
        </h1>
        <p className="subtitle text-shadow">Rust Gaming Community Since 2023</p>
      </header>
      <nav>
        <ul className="nav-list drop-shadow text-shadow">
          <li className="nav-item gradient-border"><a href="https://store.beams.gg/" target="_blank">Store</a></li>
          <li className="nav-item gradient-border"><a href="http://discord.beams.gg/" target="_blank">Discord</a></li>
        </ul>
      </nav>
      <footer>
        <p id="footer-copyright">© Beams.gg</p>
      </footer>
    </div>
  );
}
