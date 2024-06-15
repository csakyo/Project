import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const [theme, setTheme] = useTheme();
  const THEMES = ['light', 'dark', 'red'];
  return (
    <header className={`content-${theme}`}>
      {THEMES.map((item) => {
        const changeTheme = (e) => {
          setTheme(e.target.value);
        };
        return (
          <label key={item}>
            <input
              type='radio'
              value={item}
              checked={item === theme}
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
