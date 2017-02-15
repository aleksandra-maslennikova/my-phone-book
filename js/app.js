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
    this.tableHeaders.forEach((el, index) => {
      table += `<th class = "header${index}">${el}</th>`;
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
      if (elem.name.search([param]) != -1 || elem.name.toLowerCase().search([param]) != -1) {
        finedUsers.push(elem);
      }
    })
    return finedUsers
  }


  events() {
    this.nameHeader = document.querySelector('.header0');
    this.lastNameHeader = document.querySelector('.header1');
    this.emailHeader = document.querySelector('.header2');
    this.table = document.querySelector('tbody');
    this.search = document.getElementById('search');
    this.nameHeader.addEventListener('click', e => {
      this.users = this.sortUsers('name');
      this.table.innerHTML = this.createTableBody();

    });

    this.lastNameHeader.addEventListener('click', e => {
      this.users = this.sortUsers('lastname');
      this.table.innerHTML = this.createTableBody();
    });

    this.emailHeader.addEventListener('click', e => {
      this.users = this.sortUsers('email');
      this.table.innerHTML = this.createTableBody();
    });

    this.search.addEventListener('keyup', e => {
      this.newUsers = this.findUsersByName(this.search.value);
      this.table.innerHTML = this.createTableBody(this.newUsers);
    })
  }

  render() {
    let app = document.getElementById('app');
    app.innerHTML = this.createHeader() + this.createMain();
  }

}

let myTelephoneBook = new App();
myTelephoneBook.render();
myTelephoneBook.events();






//---------------ROUTER------------------------//
let links = [...document.querySelectorAll('.main-nav>a')];

links.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();

    // ------ INDEX.HTML--------------------------//
    if (link.getAttribute('href') == 'index.html') {
      myTelephoneBook.render();
      myTelephoneBook.events();
    }
    //--------------KEYPAD-----------------------------//
    if (link.getAttribute('href') == 'keypad.html') {
    let myKeypad = new Keypad();
      myKeypad.render();
      myKeypad.events();
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
