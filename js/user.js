class User {
	constructor(user) {
		this.user = user;
	}


	createHeader() {
		return `<header class="header">
		<div class="container top-radius">
			<div class="user-top-line">
				<a href ="index.html" id ="backToContacts">
					<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span> Contacts
				</a>
				<a href ="edit-contact.html" id ="editContact">Edit</a>
			</div>
		</div>
	</header>`;
	}


	fillData() {
		let string = '';
		for (let key in this.user) {
			let data = this.user[key];
			if (key !== '_id' && key !== 'fullName' && key !== 'name' && key !== "lastname" && key !== "created") {
				string += `<div class="user-data">
					<h3>${key}</h3>
					<div> ${data}</div>
				</div>`
			}
		}
		return string;
	}

	createMain() {
		let main = `<main class="main">
		<div class="container">
			<img src="images/user-face.png" alt="#" class=" user-img img-circle center-block">
			<div class="user-name">${this.user.fullName}</div>
			<div class="options-line">
				<div class="message">
					<div class="options-icon"><span class="icon glyphicon glyphicon-comment" aria-hidden="true"></span></div>
					<span class="options-text">message</span>
				</div>
				<div class="call">
					<div class="options-icon"><span class="icon glyphicon glyphicon-earphone" aria-hidden="true"></span></div>
					<span class="options-text">call</span>
				</div>
				<div class="video">
					<div class="options-icon"><span class="icon glyphicon glyphicon-facetime-video" aria-hidden="true"></span></div>
					<span class="options-text">video</span>
				</div>
				<div class="mail">
					<div class="options-icon"><span class="icon glyphicon glyphicon-envelope" aria-hidden="true"></span></div>
					<span class="options-text">mail</span>
				</div>
			</div>
			<div class="options-table">
			<div class = user-data-all>`;
		main += this.fillData();
		main += `</div><div class="options-item"><a href="#">Notes</a></div>
				<div class="options-item"><a href="#">Send message</a></div>
				<div class="options-item"><a href="#">Share contact</a></div>
				<div class="options-item"><a href="#">Add to favorites</a></div>
				<div class="options-item"><a href="#">Share my location</a></div>
				<div class="options-item"><a href="#">Block this caller</a></div>
			</div>
		</div>
	</main>`;
		return main
	}


	events() {
		this.edit = document.getElementById('editContact');
		this.back = document.getElementById('backToContacts')

		//----Open page edit-contact on click on Edit-------//
		this.edit.addEventListener('click', e => {
			e.preventDefault();
			let myEditContact = new EditContact(this.user);
			myEditContact.render();
		});

		//----Open page index.html on click on Back--------//
		this.back.addEventListener('click', e => {
			e.preventDefault();
			myTelephoneBook.render();
		});
	}


	render() {
		this.app = document.getElementById('app');
    if (this.app) {
      this.app.innerHTML = this.createHeader() + this.createMain();
      this.events();
    } else {
      this.app = document.createElement('div');
      document.body.prepend(this.app);
      this.app.id = 'app';
      this.app.innerHTML = this.createHeader() + this.createMain();
      this.events();
    }
	}
}