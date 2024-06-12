const Header = () => {
  const THEMES = ['light', 'dark', 'red'];
  const changeTheme = (e) => setTheme(e.target.value);
  return (
    <header className={`content-${theme}`}>
      {THEMES.map((item) => {
        return (
          <label>
            <input
              type='radio'
              key={item}
              value={item}
              checked={theme === item}
              onChange={changeTheme}
            />
            {item}
          </label>
        );
      })}
    </header>
  );
};

export default Header;
