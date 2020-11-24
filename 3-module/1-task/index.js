
let vasya = { name: 'Вася', age: 25 };
let petya = { name: 'Петя', age: 30 };
let masha = { name: 'Маша', age: 28 };

let users = [ vasya, petya, masha ];

let n = [];
function namify(users) {
  for(let userName of users){
    let nam = userName.name;
    
    n.push(nam);
  }
     return n;
}
