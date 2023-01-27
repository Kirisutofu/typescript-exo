// Import stylesheets
import './style.css';
import { User } from './user';

export const user1: User = {
  firstname: 'Christophe',
  name: 'Mensah',
  age: 50,
};

export const user2: User = {
  firstname: 'kirisutofu',
  name: 'Mensah',
  age: 50,
};

interface UsersList {
  [key: string]: User;
}

let list: UsersList = {};
list["1"] = user1;
list["2"] = user2;

function getUser() {
  let table = "<table><th>n°</th><th>firstname</th><th>name</th><th>age</th>";
  for (let key in list) {
      table += "<tr>";
      for(let value of key){
        table += "<td>" + key + "</td><td>" + list[key].firstname + "</td><td>"
        + list[key].name + "</td><td>" + list[key].age + "</td>";
      }
      table += "</tr>";
  }
  table += "</table>";
  return table;
}

let a = getUser();

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = a;
