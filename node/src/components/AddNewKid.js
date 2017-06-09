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

				<div class="input-field">
					<p>
						<input id="gorilla" name="gender" type="radio" value="🦍" /> <label for="gorilla" >🦍</label>
					</p>

					<p>
						<input id="girl" name="gender" type="radio" value="👧" /> <label for="girl" >👧</label>
					</p>

					<p>
						<input id="boy" name="gender" type="radio" value="👦" /> <label for="boy" >👦</label>
					</p>

					<p>
						<input id="poop" name="gender" type="radio" value="💩" /> <label for="poop" >💩</label>
					</p>
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
}

AddNewKid.STATE = {
	isAddingKid: {
		validator: core.isBoolean,
		value: false
	}
}

export default AddNewKid;