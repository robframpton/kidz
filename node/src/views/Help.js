import JSXComponent from 'metal-jsx';

class Help extends JSXComponent {
	render() {
		return (
			<div class="row">
				<div class="col s12">
					<h1>F.A.Q.</h1>
					<h3>Whats the purpose of kidz?</h3>
					<blockquote>
						Our aim is for parents across the world to be one in a united front. There is nothing worse that telling your child conflicting answers on things such as candy, video games, etc. We feel our calling is to make the world a better place, one step at a time.
					</blockquote>

					<h3>Are there separate profiles?</h3>
					<blockquote>
						No. Our heart behind the project really stems from the idea that "it takes a village to raise a chid." We see the world as our village, it is going to take the world to raise our children.
					</blockquote>

					<h3>Why kidz with a "z" and not an "s"?</h3>
					<blockquote>
						We chose a Z to honor a public television TV show that brought joy and laughter to kids in the 90s. Please consider the clip below...
					</blockquote>

					<div class="video-container">
						<iframe style="height: 300px;width: auto;" src="https://www.youtube.com/embed/jwmslRaINno" frameborder="0"></iframe>
					</div>

					<h3>Why is there a gorilla as a gender?</h3>
					<blockquote>
						On May 28, 2016, a three-year-old boy climbed into a gorilla enclosure at the Cincinnati Zoo and Botanical Garden and was grabbed and dragged by Harambe, a 17-year-old Western lowland gorilla. Fearing for the boy's life, a zoo worker shot and killed Harambe. We choose to honor this noble gorilla. He lived a life full of love and laughter, may we live our lives in honor of him.
					</blockquote>

					<h3>Contributing Guide?</h3>
					<blockquote>
						no.
					</blockquote>

					<h3>Who made this site?</h3>
					<div class="col s12 m8 offset-m2 l6 offset-l3">
					  <div class="card-panel grey lighten-5 z-depth-1">
						<div class="row valign-wrapper">
						  <div class="col s2">
							<img src="https://avatars2.githubusercontent.com/u/2466445?v=3&s=460" alt="" class="circle responsive-img" />
						  </div>
						  <div class="col s10">
							<span class="black-text">
							  This is Rob. The brains behind the project.
							</span>
						  </div>
						</div>
					  </div>
					</div>

					<div class="col s12 m8 offset-m2 l6 offset-l3">
					  <div class="card-panel grey lighten-5 z-depth-1">
						<div class="row valign-wrapper">
						  <div class="col s2">
							<img src="https://avatars0.githubusercontent.com/u/4721348?v=3&s=460" alt="" class="circle responsive-img" />
						  </div>
						  <div class="col s10">
							<span class="black-text">
							  This is Trayvis. He likes carrots. 13/10
							</span>
						  </div>
						</div>
					  </div>
					</div>

					<div class="col s12 m8 offset-m2 l6 offset-l3">
					  <div class="card-panel grey lighten-5 z-depth-1">
						<div class="row valign-wrapper">
						  <div class="col s2">
							<img src="https://avatars1.githubusercontent.com/u/1609196?v=3&s=460" alt="" class="circle responsive-img" />
						  </div>
						  <div class="col s10">
							<span class="black-text">
							  This is Evan. The thoughtfulness behind the project.
							</span>
						  </div>
						</div>
					  </div>
					</div>

					<div class="col s12 m8 offset-m2 l6 offset-l3">
					  <div class="card-panel grey lighten-5 z-depth-1">
						<div class="row valign-wrapper">
						  <div class="col s2">
							<img src="https://avatars1.githubusercontent.com/u/6843530?v=3&s=460" alt="" class="circle responsive-img" />
						  </div>
						  <div class="col s10">
							<span class="black-text">
							  This is Bryce. He likes Zoom.
							</span>
						  </div>
						</div>
					  </div>
					</div>
				</div>
			</div>
		);
	}
}


export default Help;
