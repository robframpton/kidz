'use strict';

import Component from 'metal-component';
import Home from './Home';
import Router from 'metal-router';

// Routing from JavaScript -----------------------------------------------------

var Kidz = {
	run() {
		Component.render(Router, {
			element: '#container',
			path: '/',
			component: Home
		});

		// Dispatch router to the current browser url --------------------------

		Router.router().dispatch();
	}
};

export default Kidz;