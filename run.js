const Account = require('./account');
const Statement = require('./statement');

const account = new Account();
const statement = new Statement(account);

account.deposit(1000);
account.deposit(2000);
account.withdraw(500);

console.log(statement.print());
