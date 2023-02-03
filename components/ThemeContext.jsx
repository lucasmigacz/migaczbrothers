import { createContext } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [switchTheme, setSwitchTheme] = useState("#161616");
  const handleSwitchTheme = () => {
    setSwitchTheme(() => (switchTheme === "#161616" ? "#f6f6f6" : "#161616"));
    console.log(switchTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        switchTheme,
        handleSwitchTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
