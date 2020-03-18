import users from './users.js';

const calculateTotalBalance = users => {
    // твой код
    return users.reduce((totalBalance, user) => totalBalance += user.balance, 0);
  };
  
  console.log(calculateTotalBalance(users)); // 20916
