export const ShowTask = ({ tasklist, setTasklist, task, setTask }) => {
	const handleEdit = (id) => {
		const seletedTask = tasklist.find((todo) => todo.id === id);
		setTask(seletedTask);
	};
	/* The code above does the following, explained in English:
1. It creates a new variable called `seletedTask` and assigns it the value of the task with the given `id`.
2. It calls the `setTask` function and passes it the value of `seletedTask`. */
	const handleDelete = (id) => {
		const updatedTasklist = tasklist.filter((todo) => todo.id !== id);
		setTasklist(updatedTasklist);
	};
	/* The code above does the following, explained in English:
1. Create a `const` variable named `handleDelete` that points to an anonymous function.
2. The function takes one parameter, `id`, which is a number.
3. Create a `const` variable named `updatedTasklist` that points to an array. The array is created by filtering the `tasklist` array, removing any elements that do not match the condition.
4. The condition is that the element's `id` property must not be equal to the `id` parameter. In other words, the element's `id` property must not equal the `id` that was passed into the function.

The result of the filtering is a new array that contains all the elements that passed the condition. So the `updatedTasklist` array will contain every element from the `tasklist` array that does not have an `id` that matches the `id` parameter. The `id` parameter is the `id` of the element that was just deleted, so it will not be in the new array.

5. Call the `setTasklist` function with the `updatedTasklist` as the argument. This will set the `tasklist` state to the new array, which will trigger a re-render of the component, which will cause the list to be re-rendered with the deleted element no longer present. */

	return (
		<section className="showTask">
			<div className="head">
				<div>
					<span className="title">Todo</span>
					<span className="count">{tasklist.length}</span>
				</div>
				<button onClick={() => setTasklist([])} className="clearAll">
					Clear All
				</button>
			</div>
			<ul>
				{tasklist.map((todo) => (
					<li key={todo.id}>
						<p>
							<span className="name">{todo.name}</span>
							<span className="time">{todo.time}</span>
						</p>
						<i
							onClick={() => handleEdit(todo.id)}
							className="bi bi-pencil-square"></i>
						<i
							onClick={() => handleDelete(todo.id)}
							className="bi bi-trash"></i>
					</li>
				))}
			</ul>
		</section>
	);
};
/* The code above does the following, explained in English:
1. Create a section with the class name of showTask.
2. Create a div with the class name of head.
3. Inside that div, create a div.
4. Inside that div, create a span with the class name of title, and the text of "Todo".
5. Inside that div, create a span with the class name of count, and the text of the length of the tasklist array.
6. Inside that div, create a button with the class name of clearAll, and the text of "Clear All".
7. Inside that div, create an unordered list.
8. Inside that unordered list, map over the tasklist array.
9. Inside each list item, create a paragraph.
10. Inside that paragraph, create a span with the class name of name, and the text of the name property of each item in the tasklist array.
11. Inside that paragraph, create a span with the class name of time, and the text of the time property of each item in the tasklist array.
12. Inside that unordered list, create an icon with the class name of bi bi-pencil-square, which will call the handleEdit function with the id property of each item in the tasklist array as its argument.
13. Inside that unordered list, create an icon with the class name of bi bi-trash, which will call the handleDelete function with the id property of each item in the tasklist array as its argument. */
