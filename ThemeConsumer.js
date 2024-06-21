import { useContext } from "react";
import ThemeContext from "./ThemeContext";

export default function ThemeConsumer(){
    const {theme, toggleTheme} = useContext(ThemeContext);

    return (
        <div style = {{backgroundColor: theme === "light"?"white":"black", color: theme === "light"?"black":"white", paddingBottom: "20px"}}>
            <button onClick={toggleTheme}>Change Theme</button>
        </div>
    );
}