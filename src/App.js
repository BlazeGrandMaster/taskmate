import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { AddTask } from "./components/AddTask";
import { ShowTask } from "./components/ShowTask";
import "./App.css";

function App() {
	const [tasklist, setTasklist] = useState(
		JSON.parse(localStorage.getItem("tasklist")) || []
	);
	const [task, setTask] = useState({});

	useEffect(() => {
		localStorage.setItem("tasklist", JSON.stringify(tasklist));
	}, [tasklist]);
	/* The code above does the following, explained in English:
1. If there is no tasklist in local storage, then set the tasklist to an empty array.
2. If there is a tasklist in local storage, then set the tasklist to the contents of local storage.
3. When the tasklist changes, update local storage with the new tasklist. */
	return (
		<div className="App">
			<Header />
			<AddTask
				tasklist={tasklist}
				setTasklist={setTasklist}
				task={task}
				setTask={setTask}
			/>
			<ShowTask
				tasklist={tasklist}
				setTasklist={setTasklist}
				task={task}
				setTask={setTask}
			/>
		</div>
	);
}

export default App;
/* The code above does the following, explained in English:
1. Import React
2. Import Header, AddTask, and ShowTask from their respective files
3. Declare a function called App
4. Declare a variable called tasklist and set its initial value to an empty array
5. Declare a variable called task and set its initial value to an empty string
6. Add a div with a className of App
7. Add the Header component to the div
8. Add the AddTask component to the div
9. Add the ShowTask component to the div
10. Export the App function */
