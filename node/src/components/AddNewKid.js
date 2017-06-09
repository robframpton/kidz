import core from 'metal';
import JSXComponent from 'metal-jsx';
import BirthdaySelector from './BirthdaySelector';

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
			//birthday: birthday.value,
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

					<input id="name" name="name" required type="text" />
				</div>

				<div class="input-field col s12 m6">
					<label for="gender">Kid's Gender</label>

					<select id="gender" name="gender">
						<option value="" disabled selected>Choose your kid's gender</option>
						<option value="boy">👦 Boy</option>
						<option value="girl">👧 Girl</option>
						<option value="gorilla">🦍 Gorilla</option>
						<option value="poop">💩 Poop</option>
					</select>
				</div>

				<div class="input-field">
					<BirthdaySelector />
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
		$('.datepicker').pickadate();

		$('select').material_select();
	}
}

AddNewKid.STATE = {
	isAddingKid: {
		validator: core.isBoolean,
		value: false
	}
}

export default AddNewKid;