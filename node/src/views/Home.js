import JSXComponent from 'metal-jsx';
import core from 'metal';
import ListOfKidz from '../components/ListOfKidz';
import AddNewKid from '../components/AddNewKid';

class Home extends JSXComponent {
	created() {
		this.data = WeDeploy.data('data.' + window.location.host || window.location.hostname);

		this.data
			.get('kids')
			.then((kids) => this.setState({kids: kids}));

		this.data
			.watch('kids')
			.on('changes', (data) => this.setState({kids: data}));

		this.data
			.watch('incidents')
			.on('changes', (data) => {
				let latest = data.pop();

				let utterThis = new SpeechSynthesisUtterance(latest.answer);

				window.speechSynthesis.speak(utterThis);

				if (window.navigator.vibrate) {
					window.navigator.vibrate(500);
				}
			});
	}

	render() {
		return (
			<div class="row">
				<div class="col s12">
					{this.state.kids.length > 0 ?
						<ListOfKidz kids={this.state.kids} />
						:
						''
					}

				</div>

				<div class="col s12">
					<AddNewKid />
				</div>
			</div>
		);
	}
}

Home.STATE = {
	kids: {
		validator: core.isObject,
		value: []
	},

	parentId: {
		validator: core.isString,
		value: ""
	}
}

export default Home;
