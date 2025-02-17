import { useDarkMode } from "../../context/DarkModeContext";

export function Header({ filters, filter, onFilterChange }) {
  const [darkMode, toggleDarkMode] = useDarkMode();
  return (
    <header>
      <ul>
        {filters.map((value, index) => (
          <li key={index}>
            <button onClick={() => onFilterChange(value)}>{value}</button>
          </li>
        ))}
      </ul>
    </header>
  );
}
