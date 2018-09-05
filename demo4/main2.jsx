import './app.css';

import react from 'react';
import { render } from 'react-dom';

// 使用import时，第一个参数不在传入对象，而是直接传入参数值
render(
	'Hello, world!',
	document.querySelector('#wrapper')
	);

