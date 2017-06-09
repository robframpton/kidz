import core from 'metal';
import JSXComponent from 'metal-jsx';


class ListOfKidz extends JSXComponent {
	render() {
		return(
			<div class="list-of-kids-container">
				<ul class="list-of-kids">
					{this.props.kids.length > 0 ?
						this.props.kids.map(
							(kid) => {
								let url = `kid/${kid.id}`;

								return (
									<li>
										<a href={url}>
											{kid.name}
										</a>

										{kid.gender} {kid.birthday}
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