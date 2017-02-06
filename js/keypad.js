class Keypad {
  constructor() {

  }
  createHeader() {
    return `<header class="header"><div class="container top-radius"><h2>Keypad</h2></div></header>`;
  }


  createMain() {

    return `<main class = "main keypad"><div class="container">
			<div class="number">
				<span id = "addUser" class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
				<span class ="numbers"></span>
				<span id = "deleteNumber" class="glyphicon glyphicon-circle-arrow-left" aria-hidden="true"></span>
			</div>
			<div class="keypad-holder">
				<button class="key">1</button>
				<button class="key">2</button>
				<button class="key">3</button>
				<button class="key">4</button>
				<button class="key">5</button>
				<button class="key">6</button>
				<button class="key">7</button>
				<button class="key">8</button>
				<button class="key">9</button>
				<button class="key">*</button>
				<button class="key">0</button>
				<button class="key">#</button>
				<button class="key"> <span class="glyphicon glyphicon-earphone" aria-hidden="true"></span></button>
			</div>
		</div>
	</main>`
  }
  render() {
    let app = document.createElement('div');
    document.body.prepend(app);
    app.id = 'app';
    app.innerHTML += this.createHeader() + this.createMain();
  }
}



let myKeypad = new Keypad();
myKeypad.render();



let keypad = document.querySelector('.keypad-holder');
let numbers = document.querySelector('.numbers');

keypad.addEventListener('click', e => {
  if (e.target.classList.contains('key')) {
    numbers.textContent += e.target.textContent;
  }
});



let deleteNumber = document.getElementById('deleteNumber');

deleteNumber.addEventListener('click', e => {
  let length;
  length = numbers.textContent.length - 1;
  if (length >= 0) {
    numbers.textContent = numbers.textContent.slice(0, length);
  }
});

