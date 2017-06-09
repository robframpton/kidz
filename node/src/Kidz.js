'use strict';

import Component from 'metal-component';
import Home from './views/Home';
import Kid from './views/Kid';
import Router from 'metal-router';

// Routing from JavaScript -----------------------------------------------------

var Kidz = {
	run() {
		Component.render(Router, {
			element: '#container',
			path: '/',
			component: Home
		});

		Component.render(Router, {
			component: Kid,
			element: '#container',
			path: '/kid/:kidId'
		});

		// Dispatch router to the current browser url --------------------------

		Router.router().dispatch();
	}
};

export default Kidz;