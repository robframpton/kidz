import JSXComponent from 'metal-jsx';

class Incident extends JSXComponent {
	render() {
		let {incidents} = this.props;

		incidents = incidents || [];

		let incidentItems = incidents.map(incident => {
			return (
				<li class="collection-item incident">
					<span class="incident-property">{this.formatType_(incident.type)}</span>
					<span class={'incident-property answer-' + incident.answer}>{incident.answer}</span>
					<span class="incident-property">{this.formatDate_(incident.time)}</span>
				</li>
			);
		});

		return (
			<div class="incidents">
				<ul class="collection">
					{incidentItems}
				</ul>
			</div>
		);
	}

	formatDate_(date) {
		return moment(date).format('h:mm:ss a, MMMM Do');
	}

	formatType_(type) {
		if (type === 'candy') {
			type = '🍬 Candy';
		}
		else if (type === 'snack') {
			type = '🍪 Snack';
		}
		else if (type === 'tv') {
			type = '📺 TV';
		}
		else if (type === 'video_games') {
			type = '🎮 Video Games';
		}

		return type;
	}
}

Incident.PROPS = {
	incidents: {
		value: []
	}
};

export default Incident;
