import users from './users.js'


const getUsersWithEyeColor = (users, color) => {
    // твой код
    return users.filter(user => user.eyeColor === color && user);
  };
console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]    