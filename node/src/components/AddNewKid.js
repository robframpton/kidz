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
					<label for="name">Kid's Name</label>

					<input id="name" name="name" placeholder="Name" required type="text" />
				</div>

				<div class="input-field col s12 m6">
					<select id="gender" name="gender">
						<option value="" disabled selected>Choose your kid's gender</option>
						<option value="👦">Boy</option>
						<option value="👧">Girl</option>
						<option value="🦍">Gorilla</option>
						<option value="💩">Poop</option>
					</select>
				</div>

				<div class="input-field">
					<label for="birthdate">Kid's Birthdate</label>

					<input id="birthday" name="birthday" class="datepicker" type="date" />
				</div>

				<p>
					<label for="rating">How much do you love this kid?</label>
				</p>


				<div class="range-field">
					<input type="range" id="rating" name="rating" min="0" max="10" />
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
		$(document).ready(function() {
			$('.datepicker').pickadate({
				selectMonths: true, // Creates a dropdown to control month
				selectYears: 50 // Creates a dropdown of 15 years to control year
			});

			$('select').material_select();
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