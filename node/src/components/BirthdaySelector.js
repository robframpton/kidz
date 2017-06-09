import Component, {Config} from 'metal-jsx';

class BirthdaySelector extends Component {
	created() {
		this._increment = 2;
	}

	handleClick(type) {
		return () => {
			this.state[type] += this._increment;

			if (this._increment === 2) {
				this._increment = -1;
			}
			else {
				this._increment = 2;
			}
		}
	}

	handleReset() {
		this.setState({
			month: 1,
			day: 1,
			year: 1980
		});
	}

	render() {
		const {month, day, year} = this.state;

		return (
			<div style="padding-top: 46px;">
				<label for="birthday">Kid's Birthdate</label>
				<input id="birthday" name="birthday" type="hidden" value={`${month}/${day}/${year}`} />

				<button class="btn btn-flat" onClick={this.handleClick('month')} type="button">Month - {month}</button>
				<button class="btn btn-flat" onClick={this.handleClick('day')} type="button">Day - {day}</button>
				<button class="btn btn-flat" onClick={this.handleClick('year')} type="button">Year - {year}</button>
				<button class="btn btn-flat" onClick={this.handleReset.bind(this)} type="button">Reset</button>
			</div>
		);
	}
}

BirthdaySelector.PROPS = {
};

BirthdaySelector.STATE = {
	month: {
		value: 1
	},
	day: {
		value: 1
	},
	year: {
		value: 1980
	}
};

export default BirthdaySelector;