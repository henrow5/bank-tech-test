const BankAccount = require('./bankAccount');
const BankStatement = require('./bankStatement');

const account = new BankAccount();
const statement = new BankStatement(account);

account.deposit(1000);
account.deposit(2000);
account.withdraw(500);

console.log(statement.print());
