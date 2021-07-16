import './App.scss';
import { React } from 'react';
import context from './core/context.js';
import Task from './components/Task.js';
import process from './services/process.js';

const App = () => {
	const { task } = context.config;
	const processedData = process(task);

	return <div className="container">{ Task(processedData) }</div>;
};

export default App;
