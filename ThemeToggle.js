import React from "react";

const ThemeToggle = () => {
  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return <button onClick={toggleTheme}>Toggle Theme</button>;
};

export default ThemeToggle;
