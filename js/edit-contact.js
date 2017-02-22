class EditContact {
	constructor(user) {
		this.user = user;
		this.newUser = {};
		this.mainData = ['name', 'lastname', 'company'];
		this.additionalData = ['phone', 'email', 'address', 'birthday', 'sotialProfile'];
	}

	createHeader() {
		return `<header class="header">
		<div class="container top-radius">
			<nav class="user-top-line">
				<a href="user.html" id ="cancel">Cancel</a>
				<a href = "index.html" class="done-btn" id ="done">Done</button>
			</nav>
		</div>
	</header>`;
	}

	createMainData() {
		let string = '';
		this.mainData.forEach(elem => {
			if (this.user[elem]) {
				string += `<div class="edit-field">
						<span class="glyphicon glyphicon-minus-sign" aria-hidden="true"></span>
						<label class="sr-only" for="${elem}">${this.user[elem]}</label>
						<input type="text" class="delete-btn" id="${elem}" value ="${this.user[elem]}" disabled>
					</div>`;
			} else {
				string += `<div class="edit-field">
						<span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
						<label class="sr-only" for="${elem}">${elem}</label>
						<input type="text" class="add-btn" id="${elem}" placeholder="${elem}">
					</div>`;
			}
		})
		string += `</div></div>`;
		return string
	}


	createAdditionalData() {
		let string = '';
		string += `<div class="scroll-holder">
				<div class="edit-info">`;
		this.additionalData.forEach(elem => {
			if (this.user[elem]) {
				string += `<div class="edit-field">
						<span class="glyphicon glyphicon-minus-sign" aria-hidden="true"></span>
						<label class="sr-only" for="${elem}">${this.user[elem]}</label>
						<input type="text" class="delete-btn" id="${elem}" value ="${this.user[elem]}" disabled>
					</div>`;
			} else {
				string += `<div class="edit-field">
						<span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
						<label class="sr-only" for="${elem}">${elem}</label>
						<input type="text" class="add-btn" id="${elem}" placeholder="${elem}">
					</div>`;
			}
		});
		string += `</div>`
		return string
	}


	createMain() {
		let main = '';
		main += `<main class="main edit-contact" id = "main">
		<div class="container">
			<div class="edit-main-info">
				<div class="edit-foto"><img src="images/user-face-mini.png" alt="#" class=" user-img img-circle center-block"></div>
				<div class="main-info-holder">`;
		main += this.createMainData();
		main += this.createAdditionalData();
		main +=
			`<div class="edit-field">
						<button href="#" class="delete-contact">delete contact</button>
					</div>
				</div>
			</div>
		</div>
	</main>`;
		return main
	}


	events() {
		this.cancel = document.getElementById('cancel');
		this.done = document.getElementById('done');
		this.main = document.getElementById('main');

		//-------Delete attribute disabled for input after click on red minus sign----//
		this.main.addEventListener('click', e => {
			e.preventDefault();
			if (e.target.classList.contains('glyphicon-minus-sign')) {
				this.selectedInput = e.target.parentElement.getElementsByTagName('input');
				this.input = this.selectedInput[0];
				this.input.removeAttribute('disabled');
				this.input.value = '';
			}
		});

		// ------ Return to User page after click on Cancel----//
		this.cancel.addEventListener('click', e => {
			e.preventDefault();
			let myUser = new User(this.user);
			myUser.render();
		});

		//----Update User data after click on Done, render index.html with updated User----// 
		this.done.addEventListener('click', e => {
			e.preventDefault();
			const url = 'https://easycode-js.herokuapp.com/alexm/users';
			let inputs = [...this.main.getElementsByTagName('input')];
			inputs.forEach(elem => {
				let prop = elem.id;
				if (elem.value) {
					this.newUser[prop] = elem.value;
				}
			});
			if (this.newUser.name && this.newUser.lastname) {
				this.newUser.fullName = `${this.newUser.name} ${this.newUser.lastname}`
				delete this.newUser.name;
				delete this.newUser.lastname;
			};

			fetch(`${url}/${this.user._id}`, {
				method: "PATCH",
				body: JSON.stringify(this.newUser),
				headers: { "Content-Type": "application/json" },
			})
				.then(data => {
					myTelephoneBook.request();
				})
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