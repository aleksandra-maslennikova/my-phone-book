let app = document.createElement('div');
document.body.prepend(app);
app.id = 'app';

class App {
  constructor() {
    this.tableHeaders = ['Name', 'Last Name', 'Email'];
    this.users = [
      { name: 'Иван', lastname: 'Петров', email: 'IvanPetrov@ec.ua' },
      { name: 'Сергей', lastname: 'Сергеев', email: 'SergeiSergeev@ec.ua' },
      { name: 'Иван', lastname: 'Иванов', email: 'IvanIvanov@ec.ua' },
      { name: 'Александр', lastname: 'Александров', email: 'AlexAlex@ec.ua' },
      { name: 'Алекс', lastname: 'Смирнов', email: 'AlexSmirnov@ec.ua' },
      { name: 'Сергей', lastname: 'Волков', email: 'VolkovSergey@ec.ua' },
      { name: 'Мария', lastname: 'Шарапова', email: 'MariyaSharapova@ec.ua' },
      { name: 'Александр', lastname: 'Винник', email: 'AlexVinnik@ec.ua' },
      { name: 'Дарий', lastname: 'Смирнов', email: 'DariySmirnov@ec.ua' },
      { name: 'Елена', lastname: 'Лещенко', email: 'ElenaLeshenko@ec.ua' },
      { name: 'Ольга', lastname: 'Новикова', email: 'OlgaNovikova@ec.ua' },
      { name: 'Наталья', lastname: 'Шемякина', email: 'ShemyakinaN@ec.ua' },
      { name: 'Анна', lastname: 'Донцова', email: 'AnnaDontsova@ec.ua' },
      { name: 'Влад', lastname: 'Яма', email: 'VladYama@ec.ua' },
      { name: 'Кира', lastname: 'Воробьева', email: 'Kira1990@ec.ua' },
      { name: 'Виктор', lastname: 'Кривенко', email: 'ViktorKriv@ec.ua' },
    ];

  }


  createHeader() {
    return `<header class="header"><div class="container top-radius"><h2>Contacts</h2></div></header>`;


  }
  createTableBody(param) {
    let users;
    if (param) {
      users = param;
    } else {
      users = this.users;
    }
    let tbody = ''
    users.forEach(el => {
      let user = el;
      tbody += `<tr>`;
      for (let key in user) {
        tbody += `<td>${user[key]}</td>`;
      }
      tbody += `</tr>`;
    })
    return tbody;
  }
  createTable() {
    let table = `<table class = "table table-hover contacts"><thead>`;
    this.tableHeaders.forEach(el => {
      table += `<th>${el}</th>`;
    });
    table += `</thead>`;
    table += this.createTableBody();
    table += `</tbody></table>`;
    return table;
  }


  createMain() {
    let main = `<main class ="main app"><div class = "container"><form class="form-inline search-form"><div class="form-group"><label class="sr-only" for="search">Search</label><input type="text" class="form-control" id= "search" placeholder="Search"></div></form>`;
    main += this.createTable();
    return main += `</div></main>`
  }

  sortUsers(param) {
    return this.users.sort(function (a, b) {
      var nameA = a[param].toUpperCase();
      var nameB = b[param].toUpperCase();
      if (nameA > nameB) {
        return 1;
      }
      if (nameA < nameB) {
        return -1;
      }
      return 0;
    })
  }

  findUsersByName(param) {
    let finedUsers = [];
    this.users.forEach(elem => {
      if (elem.name.search([param]) != -1) {
        finedUsers.push(elem);
      }
    })
    return finedUsers
  }
  render() {
    let app = document.getElementById('app');

    app.innerHTML = this.createHeader() + this.createMain();
  }

}

let myTelephoneBook = new App();
myTelephoneBook.render();


let nameHeader = document.querySelector('th:first-child');
let lastNameHeader = document.querySelector('th:nth-child(2)');
let emailHeader = document.querySelector('th:last-child');

nameHeader.addEventListener('click', e => {
  myTelephoneBook.users = myTelephoneBook.sortUsers('name');
  let table = document.querySelector('tbody');
  table.innerHTML = myTelephoneBook.createTableBody();

});

lastNameHeader.addEventListener('click', e => {
  myTelephoneBook.users = myTelephoneBook.sortUsers('lastname');
  let table = document.querySelector('tbody');
  table.innerHTML = myTelephoneBook.createTableBody();
});

emailHeader.addEventListener('click', e => {
  myTelephoneBook.users = myTelephoneBook.sortUsers('email');
  let table = document.querySelector('tbody');
  table.innerHTML = myTelephoneBook.createTableBody();
});



let search = document.getElementById('search');

search.addEventListener('keyup', e => {
  let table = document.querySelector('tbody');
  let newUsers = myTelephoneBook.findUsersByName(search.value);
  table.innerHTML = myTelephoneBook.createTableBody(newUsers);
})









//---------------ROUTER------------------------//
let links = [...document.querySelectorAll('.main-nav>a')];

links.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();

    // ------ INDEX.HTML--------------------------//
    if (link.getAttribute('href') == 'index.html') {
      myTelephoneBook.render();


      let nameHeader = document.querySelector('th:first-child');
      let lastNameHeader = document.querySelector('th:nth-child(2)');
      let emailHeader = document.querySelector('th:last-child');

      nameHeader.addEventListener('click', e => {
        myTelephoneBook.users = myTelephoneBook.sortUsers('name');
        let table = document.querySelector('tbody');
        table.innerHTML = myTelephoneBook.createTableBody();

      });

      lastNameHeader.addEventListener('click', e => {
        myTelephoneBook.users = myTelephoneBook.sortUsers('lastname');
        let table = document.querySelector('tbody');
        table.innerHTML = myTelephoneBook.createTableBody();
      });

      emailHeader.addEventListener('click', e => {
        myTelephoneBook.users = myTelephoneBook.sortUsers('email');
        let table = document.querySelector('tbody');
        table.innerHTML = myTelephoneBook.createTableBody();
      });


      let search = document.getElementById('search');

      search.addEventListener('keyup', e => {
        let table = document.querySelector('tbody');
        let newUsers = myTelephoneBook.findUsersByName(search.value);
        table.innerHTML = myTelephoneBook.createTableBody(newUsers);
      })

    }


    //--------------KEYPAD-----------------------------//
    if (link.getAttribute('href') == 'keypad.html') {

      myKeypad.render();


      let body = document.querySelector('body');
      let keypad = document.querySelector('.keypad-holder');
      let numbers = document.querySelector('.numbers');
      let deleteNumber = document.getElementById('deleteNumber');


      keypad.addEventListener('click', e => {
        if (e.target.classList.contains('key')) {
          myKeypad.transformPhoneNumber(numbers, e.target.textContent);
        }
      });


      deleteNumber.addEventListener('click', e => {
        myKeypad.deleteNumbers(numbers);
      });

      document.body.addEventListener('keydown', (e) => {
        if (Number(e.key) >= 0 || e.key == '*' || e.key == '#') {
          myKeypad.transformPhoneNumber(numbers, e.key);
        }
        if (e.key == 'Backspace') {
          myKeypad.deleteNumbers(numbers)
        }
      })
    }


//-----------------EDIT-CONTACT---------------//
    if (link.getAttribute('href') == 'edit-contact.html') {
      myEditContact.render()
    }

//-----------------USER---------------------//
 if (link.getAttribute('href') == 'user.html') {
      myUser.render()
    }

// ---------------ADD-USER -----------------//
 if (link.getAttribute('href') == 'add-user.html') {
      myAddUser.render()
    }

  })
}) 
