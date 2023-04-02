import { useEffect } from "react";
import { useState } from "react";
import Logo from "../assets/logo.png";

export const Header = () => {
	const [theme, setTheme] = useState(
		JSON.parse(localStorage.getItem("theme")) || "medium"
	);
	/* The code above does the following, explained in English:
1. Create a state variable called theme.
2. Create a function called setTheme that will update the theme state variable.
3. Initialize the theme state variable to the value stored in localStorage, or if there is no value stored in localStorage, initialize it to "medium". */

	useEffect(() => {
		localStorage.setItem("theme", JSON.stringify(theme));
		document.documentElement.removeAttribute("class");
		document.documentElement.classList.add(theme);
	}, [theme]);
	/* The code above does the following, explained in English:
1. When the theme changes, update the local storage item "theme" with the new value.
2. Remove all classes from the html element.
3. Add the class "theme" to the html element. */

	return (
		<header>
			<div className="logo">
				<img src={Logo} alt="Taskmate Logo" />
				<span>Taskmate</span>
			</div>
			<div className="themeSelector">
				<span
					onClick={() => setTheme("light")}
					className={theme === "light" ? "light activeTheme" : "light"}></span>
				<span
					onClick={() => setTheme("medium")}
					className={
						theme === "medium" ? "medium activeTheme" : "medium"
					}></span>
				<span
					onClick={() => setTheme("dark")}
					className={theme === "dark" ? "dark activeTheme" : "dark"}></span>
				<span
					onClick={() => setTheme("gOne")}
					className={theme === "gOne" ? "gOne activeTheme" : "gOne"}></span>
				<span
					onClick={() => setTheme("gTwo")}
					className={theme === "gTwo" ? "gTwo activeTheme" : "gTwo"}></span>
				<span
					onClick={() => setTheme("gThree")}
					className={
						theme === "gThree" ? "gThree activeTheme" : "gThree"
					}></span>
			</div>
		</header>
	);
};
/* The code above does the following, explained in English:
1. It returns the header with the logo and the theme selector
2. It also has a function called setTheme, which sets the theme state to the value of the theme being clicked on
3. It also has a variable called theme, which is equal to the state in the App.js file
4. It then checks if the theme state is equal to the theme being clicked on, if it is then it adds the class activeTheme, if not then it adds the default class */
