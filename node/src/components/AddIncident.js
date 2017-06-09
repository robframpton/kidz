import JSXComponent from 'metal-jsx';

class AddIncident extends JSXComponent {
	created() {
		this.data = WeDeploy.data('data.' + window.location.host || window.location.hostname);
	}

	render() {
		return (
			<div class="add-incident">
				<form onSubmit={this.handleAddIncident_.bind(this)}>
<<<<<<< 21441284c07c2718cf59cdf83ba5b5695219c14b
<<<<<<< 5e5a14bd1b3a4f62ee709c6f66a3e00bf575423c
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
=======
=======
>>>>>>> Add more styling
					<select name="type">
						<option value="candy" selected>Candy</option>
						<option value="snack">Snack</option>
						<option value="video-games">Video Games</option>
						<option value="tv">TV</option>
					</select>

					<select name="answer">
						<option value="yes">Yes</option>
						<option value="no" selected>No</option>
					</select>

					<button type="submit">Add</button>
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
