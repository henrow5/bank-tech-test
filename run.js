const BankAccount = require('./src/bankAccount');
const BankStatement = require('./src/bankStatement');

const account = new BankAccount();
const statement = new BankStatement(account);

account.deposit(1000);
account.deposit(2000);
account.withdraw(500);

console.log(statement.print());
