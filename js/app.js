class App {
  constructor() {
    this.tableHeaders = ['Name', 'Last Name', 'Email'];
  }

  createHeader() {
    return `<header class="header"><div class="container top-radius"><h2>Contacts</h2></div></header>`;
  }

  createTableBody(param) {
    let users;
    if (param) {
      users = param;
    } else { users = this.users }
    users.forEach(elem => {
      let arr = elem.fullName.split(' ');
      elem.name = arr[0];
      elem.lastname = arr[1];
    })
    let tbody = '<tbody>'
    users.forEach(el => {
      tbody += `<tr><td>${el.name}</td><td>${el.lastname}</td><td class = "email">${el.email}</td></tr>`;
    })
    tbody += `</tbody>`;
    return tbody;
  }

  createTable() {
    let table = `<table class = "table table-hover contacts"><thead><tr>`;
    this.tableHeaders.forEach((el, index) => {
      table += `<th class = "header${index}">${el}</th>`;
    });
    table += `</tr></thead>`;
    table += this.createTableBody();
    table += `</table>`;
    return table;
  }


  createMain() {
    let main =
      `<main class ="main app">
      <div class = "container">
        <form class="form-inline search-form">
          <div class="form-group">
            <label class="sr-only" for="search">Search</label>
            <input type="text" class="form-control" id= "search" placeholder="Search">
          </div>
        </form>`;
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


  findUserByEmail(param) {
    let finedUser;
    this.users.forEach(elem => {
      if (elem.email === param) {
        finedUser = elem;
      }
    })
    return finedUser
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
    this.tbody = document.querySelector('tbody');
    this.search = document.getElementById('search');

    //----Sort users by name-------//
    this.nameHeader.addEventListener('click', e => {
      this.users = this.sortUsers('name');
      this.tbody.innerHTML = this.createTableBody();
    });

    //----Sort users by lastname-------//
    this.lastNameHeader.addEventListener('click', e => {
      this.users = this.sortUsers('lastname');
      this.tbody.innerHTML = this.createTableBody();
    });

    //----Sort users by email-------//
    this.emailHeader.addEventListener('click', e => {
      this.users = this.sortUsers('email');
      this.tbody.innerHTML = this.createTableBody();
    });

    // ------Search user---------------//
    this.search.addEventListener('keyup', e => {
      this.newUsers = this.findUsersByName(this.search.value);
      this.tbody.innerHTML = this.createTableBody(this.newUsers);
    });

    //-----------Open User after click on row------/// 
    this.tbody.addEventListener('click', e => {
      if (e.target.tagName == "TD") {
        this.row = e.target.parentElement;
      } else {
        this.row = e.target;
      }
      this.email = this.row.querySelector('.email').textContent;
      this.user = this.findUserByEmail(this.email);
      let myUser = new User(this.user);
      myUser.render();
    })
  }


  request() {
    const url = 'https://easycode-js.herokuapp.com/alexm/users';
    fetch(url)
      .then(data => data.json())
      .then(data => {
        this.users = data;
        this.render();
      })
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

let myTelephoneBook = new App();
myTelephoneBook.request();



//---------------ROUTER------------------------//
let links = [...document.querySelectorAll('.main-nav>a')];

links.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    let href = link.href;
    this.state = this.app.innerHTML;
    links.forEach(elem => {
      elem.classList.remove('active');
    });

    // ------ INDEX.HTML--------------------------//
    if (link.getAttribute('href') == 'index.html') {
      console.log(state);
      myTelephoneBook.render();
      history.pushState(this.state, href, href);
    }

    //--------------KEYPAD-----------------------------//
    if (link.getAttribute('href') == 'keypad.html') {
      myKeypad.render();
      history.pushState(this.state, href, href);
    }

    // ---------------ADD-USER -----------------//
    if (link.getAttribute('href') == 'add-user.html') {
      myAddUser.render();
      history.pushState(this.state, href, href);
    }
  })

})
window.addEventListener('popstate', function (event) {
 console.log(event);
})