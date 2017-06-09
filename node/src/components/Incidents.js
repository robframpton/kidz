import JSXComponent from 'metal-jsx';

class Incident extends JSXComponent {
	render() {
		let {incidents} = this.props;

		incidents = incidents || [];

		let incidentItems = incidents.map(incident => {
			return (
				<li class="collection-item incident">
					<div class="row">
						<div class="col s4">
							<span class="incident-property">{this.formatType_(incident.type)}</span>
						</div>
						<div class="col s2">
							<span class={'incident-property answer-' + incident.answer}>{incident.answer}</span>
						</div>
						<div class="col s6">
							<span class="incident-property">{this.formatDate_(incident.time)}</span>
						</div>
					</div>
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
		return moment(date).fromNow();
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
