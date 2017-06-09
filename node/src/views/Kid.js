import JSXComponent from 'metal-jsx';

import AddIncident from '../components/AddIncident';
import Incidents from '../components/Incidents';

const KID_GENDER_COLOR_MAP = {
	boy: 'blue lighten-4',
	girl: 'pink lighten-4',
	gorilla: 'grey lighten-2',
	poop: 'brown lighten-2'
}

class Kid extends JSXComponent {
	created() {
		this.data = WeDeploy.data('data.' + window.location.host || window.location.hostname);

		this.data
			.where('kidId', this.props.router.params.kidId)
			.get('incidents')
			.then(this.afterFetchIncidents_.bind(this));

		this.data
			.where('kidId', this.props.router.params.kidId)
			.watch('incidents')
			.on('changes', this.afterFetchIncidents_.bind(this));

		this.data
			.where('id', this.props.router.params.kidId)
			.get('kids')
			.then(this.afterFetchKid_.bind(this));
	}

	render() {
		let classes = 'card kid row';

		const {kid} = this.state;

		if (kid) {
			classes = classes + ' ' + KID_GENDER_COLOR_MAP[kid.gender];
		}

		return (
			<div class={classes}>
				<div class="col s12">
					{this.renderKid_()}
				</div>

				<div class="col s12">
					<Incidents incidents={this.state.incidents} />
				</div>

				<div class="col s12">
					<AddIncident kid={this.state.kid} />
				</div>
			</div>
		);
	}

	renderKid_() {
		const {kid} = this.state;

		if (!kid) {
			return '';
		}

		return (
			<h2>Kid: {kid.name}</h2>
		);
	}

	afterFetchIncidents_(incidents) {
		this.state.incidents = incidents;
	}

	afterFetchKid_(kid) {
		this.state.kid = kid.length ? kid[0] : null;
	}
}

Kid.STATE = {
	kid: {
		value: null
	},

	incidents: {
		value: null
	}
};

export default Kid;
