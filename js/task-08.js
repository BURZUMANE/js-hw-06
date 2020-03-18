import users from './users.js';

const getUsersWithFriend = (users, friendName) => {
    // твой код
    // return users.filter(user => (user.friends.indexOf(friendName) !== -1) && user);
    return users.filter(user => user.friends.includes(friendName)).filter(user => user.name)
    .map(x => x.name);

  };
  
  console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
  console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]