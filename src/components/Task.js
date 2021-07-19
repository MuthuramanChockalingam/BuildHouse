import { React } from 'react';

const Task = ({ name, totalCost, tasks }) =>
	<div key={ name } className="task">
		<div className="title-bar">
			<div className="task-name">{ name }</div>
			<div className="total-cost">{ totalCost }</div>
		</div>
		<div>{ tasks.map(Task) }</div>
	</div>;

export default Task;
