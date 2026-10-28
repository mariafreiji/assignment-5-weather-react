export default function Header() {
  return (
    <header className="header">
      <div className="sky-symbols" aria-hidden="true">
        <span className="sun-symbol">☀</span>
        <span className="cloud-symbol">☁</span>
      </div>

      <h1>
        Sunny<span className="rainy-word">Rainy</span>
      </h1>
    </header>
  );
}