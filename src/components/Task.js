import { React } from 'react';

const Task = ({ name, totalCost, tasks }) =>
	<div className="task">
		<div className="task-name">{ name }</div>
		<div className="total-cost">{ totalCost }</div>
		<div>{ tasks.map(Task) }</div>
	</div>;

export default Task;
