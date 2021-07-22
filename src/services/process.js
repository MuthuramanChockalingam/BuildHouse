const process = (task) => {
	const tasks = (task.tasks || []).map(process);

	return {
		name: task.name,
		totalCost: (task.cost || 0) + tasks.reduce((a, childTask) =>
			a + childTask.totalCost, 0),
		tasks: tasks,
	};
};

export default process;
