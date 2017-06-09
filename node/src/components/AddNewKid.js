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

		let {name, gender, birthday, rating} = target;

		data.create('kids', {
			name: name.value,
			gender: gender.value,
			birthday: birthday.value,
			rating: rating.value
		}).then(
			(data) =>  {
				name.value = '';
				gender.value = '';
				birthday.value = '';
				rating.value = 10;

				this.setState({isAddingKid: false});
			}
		)
	}

	render() {
		return(
			<form class="add-new-kid-form" onSubmit={this._handleAddNewKid.bind(this)}>
				<div class="input-field">
					<label for="name">Name</label>

					<input id="name" name="name" placeholder="Name" required type="text" />
				</div>

				<div class="input-field col s12 m6">
					<select class="icons" id="gender" name="gender">
						<option value="" disabled selected>Choose your Gender</option>
						<option value="👦" data-icon="👦" class="circle">Boy</option>
						<option value="👧" data-icon="👧" class="circle">Girl</option>
						<option value="🦍" data-icon="🦍" class="circle">Gorilla</option>
						<option value="💩" data-icon="💩" class="circle">Poop</option>
					</select>
				</div>

				<div class="input-field">
					<label for="birthday">Birthday</label>

					<input class="datepicker" id="birthday" name="birthday" placeholder="dd/mm/yyyy" required type="date" />
				</div>

				<div class="input-field">
					<label for="rating">How much do you love this child?</label>

					<p class="range-field">
						<input type="range" id="rating" name="rating" min="0" max="10" />
					</p>
				</div>

				{this.state.isAddingKid ?'':
					<button class="btn btn-submit" type="submit">
						Submit
					</button>
				}
			</form>
		);
	}

	rendered() {
		$('.datepicker').pickadate({
			selectMonths: true, // Creates a dropdown to control month
			selectYears: 50 // Creates a dropdown of 15 years to control year
		});
	}
}

AddNewKid.STATE = {
	isAddingKid: {
		validator: core.isBoolean,
		value: false
	}
}

export default AddNewKid;