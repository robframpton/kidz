import JSXComponent from 'metal-jsx';

class AddIncident extends JSXComponent {
	created() {
		this.data = WeDeploy.data('data.' + window.location.host || window.location.hostname);
	}

	render() {
		return (
			<div class="add-incident">
				<form onSubmit={this.handleAddIncident_.bind(this)}>
					<div class="row">
						<div class="input-field col s6">
							<div class="select-wrapper">
								<select name="type">
									<option value="candy" selected>Candy</option>
									<option value="snack">Snack</option>
									<option value="video_games">Video Games</option>
									<option value="tv">TV</option>
								</select>
							</div>
						</div>

						<div class="input-field col s6">
							<div class="select-wrapper">
								<select name="answer">
									<option value="yes">Yes</option>
									<option value="no" selected>No</option>
								</select>
							</div>
						</div>

						<div class="col s12">
							<button class="btn btn-submit" type="submit">Add</button>
						</div>
					</div>
				</form>
			</div>
		);
	}

	rendered() {
		$(document).ready(function() {
			$('select').material_select();
		});
	}

	addIncident_(data) {
		const {kid} = this.props;

		data.kidId = kid.id;

		this.data
			.create('incidents', data)
			.then(this.afterAddIncident_.bind(this));
	}

	afterAddIncident_(incident) {
		console.log(incident);
	}

	handleAddIncident_(event) {
		event.preventDefault();

		const {elements} = event.target;

		this.addIncident_({
			answer: elements.answer.value,
			time: Date.now(),
			type: elements.type.value
		});
	}
}

AddIncident.PROPS = {
	kid: {
		value: null
	}
};

export default AddIncident;
