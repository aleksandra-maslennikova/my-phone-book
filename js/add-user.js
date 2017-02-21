class AddUser {
	constructor() {
		this.newUser = {};
	}
	createHeader() {
		return `<header class="header">
		<div class="container top-radius">
			<nav class="user-top-line">
				<a href="user.html" id = "cansel">Cansel</a>
				<button class="done-btn" id = "done">Done</button>
			</nav>
		</div>
	</header>`;
	}


	createMain() {

		return `<main class="main add-user" id= "main">
		<div class="container">
			<div class="edit-main-info">
				<div class="edit-foto">
					<button class="add-foto-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
						<span>add foto</span></button>
				</div>
				<div class="main-info-holder">
					<div class="edit-field">
						<span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
						<label class="sr-only" for="name">First name</label>
						<input type="text" class="add-btn" id="name" placeholder="First Name">
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
						<span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
						<label class="sr-only" for="phone">Add phone</label>
						<input type="text" class="add-btn" id="phone" placeholder="add phone">
					</div>
					<div class="edit-field">
						<span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
						<label class="sr-only" for="email">Add email</label>
						<input type="text" class="add-btn" id="email" placeholder="add email">
					</div>
					<div class="edit-field">
						<span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
						<label class="sr-only" for="address">Add address</label>
						<input type="text" class="add-btn" id="address" placeholder="add address">
					</div>
					<div class="edit-field">
						<span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
						<label class="sr-only" for="birthday">Add birthday</label>
						<input type="text" class="add-btn" id="birthday" placeholder="add birthday">
					</div>
					<div class="edit-field">
						<span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
						<label class="sr-only" for="socialProfile">Add social profile</label>
						<input type="text" class="add-btn" id="socialProfile" placeholder="add social profile">
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

	events() {
		this.cancel = document.getElementById('cancel');
		this.done = document.getElementById('done');
		this.main = document.getElementById('main');
		this.inputs = [...this.main.getElementsByTagName('input')];
		this.done.addEventListener('click', e => {
			const url = 'https://easycode-js.herokuapp.com/alexm/users';
			this.inputs.forEach(elem => {
				let prop = elem.id;
				if (elem.value) {
					this.newUser[prop] = elem.value;
				}
			})
			if (this.newUser.name && this.newUser.lastname) {
				this.newUser.fullName = `${this.newUser.name} ${this.newUser.lastname}`
				delete this.newUser.name;
				delete this.newUser.lastname;
			}
			console.log(this.newUser);
			fetch(url, {
				method: "POST",
				body: JSON.stringify(this.newUser),
				headers: { "Content-Type": "application/json" },
			})
				.then(data => {
					myTelephoneBook.request();
				})
		});
		}

	render() {
				let app = document.getElementById('app')
		app.innerHTML = this.createHeader() + this.createMain();
				this.events();
			}
}

let myAddUser = new AddUser();

