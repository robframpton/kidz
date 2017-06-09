import core from 'metal';
import JSXComponent from 'metal-jsx';
import moment from 'moment';

class ListOfKidz extends JSXComponent {
	render() {
		let {kids} = this.props;

		kids = kids || [];

		let headerCSSClass = `collapsible-header ${kids.length <= 10 ? 'active' : ''}`;

		let kidItems = kids.map(kid => {
			let url = `/kid/${kid.id}`;

			return (
				<li class="collection-item avatar">
					<span class="circle">
						{kid.gender}
					</span>

					<span class="title">{kid.name}</span>

					<p>
						Birthday: {kid.birthday ? moment(kid.birthday).format('MMMM Do YYYY') : ''} <br />

						Rating: {kid.rating ? kid.rating : '11'}/10
					</p>

					<a href={url} class="secondary-content">
						<i class="material-icons">link</i>
					</a>
				</li>
			);
		});

		return(
			<ul class="collapsible" data-collapsible="accordion">
				<li>
					<div class={headerCSSClass}>My Kidz</div>

					<div class="collapsible-body">
						<ul class="list-of-kids collection">
							{kidItems}
						</ul>
					</div>
				</li>
			</ul>
		);
	}

	rendered() {
		$('.collapsible').collapsible();
	}
}

ListOfKidz.PROPS = {
	kids: {
		validator: core.isObject(),
		value: []
	}
}

export default ListOfKidz;