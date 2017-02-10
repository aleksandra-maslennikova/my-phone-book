class EditContact {
  constructor() {

  }
  createHeader() {
    return `<header class="header">
		<div class="container top-radius">
			<nav class="user-top-line">
				<a href="user.html">Cansel</a>
				<button class="done-btn">Done</button>
			</nav>
		</div>
	</header>`;
  }


  createMain() {

    return `<main class="main edit-contact"">
		<div class="container">
			<div class="edit-main-info">
				<div class="edit-foto"><img src="images/user-face-mini.png" alt="#" class=" user-img img-circle center-block"></div>
				<div class="main-info-holder">
					<div class="edit-field">
						<span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
						<label class="sr-only" for="firstname">First name</label>
						<input type="text" class="add-btn" id="firstname" placeholder="First Name">
					</div>
					<div class="edit-field">
						<span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
						<label class="sr-only" for="lastname">Last name</label>
						<input type="text" class="add-btn" id="lastname" placeholder="Last Name">
					</div>
					<div class="edit-field">
						<span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
						<label class="sr-only" for="company">Last name</label>
						<input type="text" class="add-btn" id="company" placeholder="Company">
					</div>
				</div>
			</div>
			<div class="scroll-holder">
				<div class="edit-info">
					<div class="edit-field">
						<span class="glyphicon glyphicon-minus-sign" aria-hidden="true"></span>
						<label class="sr-only" for="deletePhone">Add home phone</label>
						<input type="text" class="delete-btn" id ="deletePhone" value="+38 (063) 733 44 55" disabled>
					</div>
					<div class="edit-field">
						<span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
						<label class="sr-only" for="addHomePhone">Add home phone</label>
						<input type="text" class="add-btn" id="addHomePhone" placeholder="add home phone">
					</div>
					<div class="edit-field">
						<span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
						<label class="sr-only" for="email">Add email</label>
						<input type="text" class="add-btn" id="email" placeholder="add email">
					</div>
					<div class="edit-field">
						<span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
						<label class="sr-only" for="addAddress">Add address</label>
						<input type="text" class="add-btn" id="addAddress" placeholder="add address">
					</div>
					<div class="edit-field">
						<span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
						<label class="sr-only" for="birthday">Add birthday</label>
						<input type="text" class="add-btn" id="birthday" placeholder="add birthday">
					</div>
					<div class="edit-field">
						<span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
						<label class="sr-only" for="addSocialProfile">Add social profile</label>
						<input type="text" class="add-btn" id="addSocialProfile" placeholder="add social profile">
					</div>
					<div class="edit-field">
						<span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
						<label class="sr-only" for="addField">Add field</label>
						<input type="text" class="add-btn" id="addField" placeholder="add field">
					</div>
					<div class="edit-field">
						<button href="#" class="delete-contact">delete contact</button>
					</div>
				</div>
			</div>
		</div>
	</main>`
  }
  render() {
		let app = document.getElementById('app')
    //let app = document.createElement('div');
    //document.body.prepend(app);
    //app.id = 'app';
    app.innerHTML = this.createHeader() + this.createMain();
  }
}



let myEditContact = new EditContact();

