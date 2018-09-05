let React = require('react');
let ReactDOM = require('react-dom');
let style = require('./app.css');

ReactDOM.render(
	<div>
		<h1 class={style.h1}>Hello World2</h1>
		<h1 class="h2">Hello Webpack2</h1>
	</div>,
	document.getElementById('example')
	)