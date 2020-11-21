
console.clear();

let friends = [
    {
        firstName: 'Artsiom',
        lastName: 'Mezin',
    },
    {
        firstName: 'Ilia',
        lastName: 'Kantor',
    },
    {
        firstName: 'Christopher',
        lastName: 'Michael',
    }
];



function makeFriendsList() {
 
  let ul = document.createElement('ul') ;

 
 
  for( let friend of friends ){
    ul.innerHTML += `<li>${friend.firstName} ${friend.lastName}</li>`; 
  
  }
return ul;
}
  makeFriendsList(friends);
