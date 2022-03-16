/*
  Create an array of 'pet' objects.
  Each object should have the following properties: 
  name, type, breed, age, and photo
*/

const pets = [
    { 
    name: 'Josie',
    type: 'Dog',
    breed: 'Lab',
    age: 12,
    photo: 'img/dachshund.jpg'    
  },
    {
    name: 'Bredna',
    type: 'Dog',
    breed: 'Australian Shepherd',
    age: '6 but acts like 1',
    photo: 'img/aussie.jpg' 
  },
    {
    name: 'Devil',
    type: 'Cat',
    breed: 'Demon',
    age: '&infin;',
    photo: 'img/tabby.jpg' 
  },
    {
    name: 'Prince',
    type: 'Dog',
    breed: 'Pug',
    age: 4,
    photo: 'img/pug.jpg' 
  },
    {
    name: 'Lucifer',
    type: 'Cat',
    breed: 'Demon Lead',
    age: -2000,
    photo: 'img/persian.jpg' 
  }
]

let profile = '';

  for (let i = 0; i < pets.length; i++) {
      profile += `
        <h2>${pets[i].name}</h2>
        <h3>${pets[i].type} | ${pets[i].breed}</h3>
        <p>Age: ${pets[i].age}</p>
        <img src="${pets[i].photo}" alt="${pets[i]}.breed}">
      `;
  }

document.querySelector('main').innerHTML = profile;