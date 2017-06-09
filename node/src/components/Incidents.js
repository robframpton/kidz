import JSXComponent from 'metal-jsx';

class Incident extends JSXComponent {
	render() {
		let {incidents} = this.props;

		incidents = incidents || [];

		let incidentItems = incidents.map(incident => {
			return (
				<li>
					<span>{incident.type}: </span>
					<span>{incident.answer}: </span>
					<span>{incident.time}</span>
				</li>
			);
		});

		return (
			<div class="incidents">
				<ul>
					{incidentItems}
				</ul>
			</div>
		);
	}
}

Incident.PROPS = {
	incidents: {
		value: []
	}
};

export default Incident;
