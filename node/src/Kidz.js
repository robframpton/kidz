'use strict';

import Component from 'metal-component';
import Home from './views/Home';
import Help from './views/Help';
import Kid from './views/Kid';
import KonamiCode from 'konami-code';
import Router from 'metal-router';

const konami = new KonamiCode();

konami.listen(() => {
	window.location.href = 'http://harambe.wedeploy.io';
});

const TYPE_INCIDENT_MAP = {
	candy: 'candy',
	snack: 'snack',
	tv: 'tv',
	video_games: 'video games'
}

WeDeploy.data('data.' + window.location.host || window.location.hostname)
	.watch('incidents')
	.on('changes', (data) => {
		let latest = data.pop();

		let utterThis = new SpeechSynthesisUtterance(`Parent answered
			${latest.kidName ? latest.kidName : ''} ${latest.answer},to request
			for ${TYPE_INCIDENT_MAP[latest.type]} ${moment(latest.time).fromNow()}`);

		window.speechSynthesis.speak(utterThis);

		if (window.navigator.vibrate) {
			window.navigator.vibrate(500);
		}
	});

// Routing from JavaScript -----------------------------------------------------

var Kidz = {
	run() {
		Component.render(Router, {
			element: '#container',
			path: '/',
			component: Home
		});

		Component.render(Router, {
			element: '#container',
			path: '/help',
			component: Help
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