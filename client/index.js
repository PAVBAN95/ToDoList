
const React = require('react'),
	ReactDom = require('react-dom');
const {taskReducer} = require('./reducers/taskReducer');
const {createStore} = require('redux');
const store = createStore(taskReducer);

store.dispatch({});	

const App = require('./components/App/App.js')


ReactDom.render(
	<App/>,
	document.getElementById('app')
)