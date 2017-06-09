import core from 'metal';
import JSXComponent from 'metal-jsx';

class AddNewKid extends JSXComponent {
	created() {
		this.data = WeDeploy.data('data.' + window.location.host || window.location.hostname);
	}

	_handleAddNewKid(event) {
		event.preventDefault();
		let {target} = event;
		let {data} = this;
		this.setState({isAddingKid: true});



		data.create('kids', {
			name: target.name.value,
			gender: target.gender.value,
			birthday: target.birthday.value
		}).then(
			(data) => this.setState({isAddingKid: false})
		)
	}

	render() {
		return(
			<form class="add-new-kid-form" onSubmit={this._handleAddNewKid.bind(this)}>
				<div class="control-group">
					<label for="name">Name</label>

					<input id="name" name="name" placeholder="Name" required type="text" />
				</div>

				<div class="control-group">
					<label for="gender">Gender</label>

					<select id="gender" name="gender" required>
						<option value="">Select Gender</option>
						<option value="male">Male</option>
						<option value="female">Female</option>
					</select>
				</div>

				<div class="control-group">
					<label for="birthday">Birthday</label>

					<input id="birthday" name="birthday" placeholder="dd/mm/yyyy" required type="date" />
				</div>

				{this.state.isAddingKid ?'':
					<button class="btn btn-submit" type="submit">
						Submit
					</button>
				}
			</form>
		);
	}
}

AddNewKid.STATE = {
	isAddingKid: {
		validator: core.isBoolean,
		value: false
	}
}

export default AddNewKid;