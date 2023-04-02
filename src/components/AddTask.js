export const AddTask = ({ tasklist, setTasklist, task, setTask }) => {
	const handleSubmit = (e) => {
		e.preventDefault();

		if (task.id) {
			const date = new Date();
			const updatedTasklist = tasklist.map((todo) =>
				todo.id === task.id
					? {
							id: task.id,
							name: task.name,
							time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
					  }
					: todo
			);
			setTasklist(updatedTasklist);
			setTask({});
		} else {
			const date = new Date();
			const newTask = {
				id: date.getTime(),
				name: e.target.task.value,
				time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
			};
			setTasklist([...tasklist, newTask]);
			setTask({});
		}
	};
	/* The code above does the following, explained in English:
1. If the task has an id, it means that the task has already been added.
2. The task is updated with the new name and time.
3. If the task doesn't have an id, it means that the task is new.
4. The task is added to the tasklist with a new id, name and time. */

	return (
		<section className="addTask">
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="task"
					value={task.name || ""}
					autoComplete="off"
					placeholder="add task"
					maxLength="25"
					onChange={(e) => setTask({ ...task, name: e.target.value })}
				/>
				<button type="submit">{task.id ? "Update" : "Add"}</button>
			</form>
		</section>
	);
};
/* The code above does the following, explained in English:
1. Create a new task object with the name of the task and the id of the task.
2. If there is a task id, update the task, otherwise add a new task.
3. Update the task name with the input value. */
