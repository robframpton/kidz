import core from 'metal';
import JSXComponent from 'metal-jsx';


class ListOfKidz extends JSXComponent {
	render() {
		return(
			<div class="list-of-kids-container">
				<ul class="list-of-kids collection">
					{this.props.kids.length > 0 ?
						this.props.kids.map(
							(kid) => {
								let url = `kid/${kid.id}`;

								return (
									<li class="collection-item avatar">
										<span class="circle">{kid.gender}</span>

										<span class="title">{kid.name}</span>

										<p>
											Birthday: {kid.birthday} <br />
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
		);
	}
}

ListOfKidz.PROPS = {
	kids: {
		validator: core.isObject()
	}
}

export default ListOfKidz;