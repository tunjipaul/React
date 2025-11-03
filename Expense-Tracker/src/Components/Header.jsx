function Header() {
  const today = new Date().toLocaleDateString("en-NG", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <h1 className="header-title">🇳🇬 NairaTrack</h1>
      <p className="header-date">{today}</p>
    </header>
  );
}

export default Header;
