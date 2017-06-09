import JSXComponent from 'metal-jsx';
import core from 'metal';
import ListOfKidz from '../components/ListOfKidz';
import AddNewKid from '../components/AddNewKid';

class Home extends JSXComponent {
	created() {
		this.data = WeDeploy.data('data.' + window.location.host || window.location.hostname);

		this._fetchChildren();

		this._handleKidzUpdate();
	}

	_fetchChildren() {
		// TO DO: Fetch based on parentIds
		this.data.get('kids')
			.then((kids) => this.setState({kids: kids}));
	}

	_handleKidzUpdate() {
		// TO DO: Fetch based on parentId
		this.data.watch('kids')
			.on('changes', (data) => this.setState({kids: data}));
	}

	render() {
		return (
			<div>
				<ListOfKidz kids={this.state.kids} />

				<AddNewKid />
			</div>
		);
	}
}

Home.STATE = {
	kids: {
		validator: core.isObject,
		value: {}
	},

	parentId: {
		validator: core.isString,
		value: ""
	}
}

export default Home;
