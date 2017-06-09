import core from 'metal';
import JSXComponent from 'metal-jsx';
import moment from 'moment';

class ListOfKidz extends JSXComponent {
	render() {
		let headerCSSClass = `collapsible-header ${this.props.kids.length <= 10 ? 'active' : ''}`;

		return(
			<ul class="collapsible" data-collapsible="accordion">
				<li>
					<div class={headerCSSClass}><i class="material-icons">filter_drama</i>My Kidz</div>

					<div class="collapsible-body">
						<ul class="list-of-kids collection">
							{this.props.kids.length > 0 ?
								this.props.kids.map(
									(kid) => {
										let url = `kid/${kid.id}`;

										return (
											<li class="collection-item avatar">
												<span class="circle">
													<p class="gener-icon">{kid.gender}</p>
												</span>

												<span class="title">{kid.name}</span>

												<p>
													Birthday: {moment(kid.birthday).format('MMMM Do YYYY')} <br />

													Rating: {kid.rating ? kid.rating : '11'}/10
												</p>

												<a href={url} class="secondary-content">
													<i class="material-icons">link</i>
												</a>
											</li>
										);
									}
								)

								:

								''
							}
						</ul>
					</div>
				</li>
			</ul>
		);
	}

	rendered() {
		$(document).ready(function() {
			$('.collapsible').collapsible();
		});
	}
}

ListOfKidz.PROPS = {
	kids: {
		validator: core.isObject()
	}
}

export default ListOfKidz;