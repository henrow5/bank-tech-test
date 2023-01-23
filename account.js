class Account {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  deposit(amount) {
    if (amount < 1) throw new Error('Invalid deposit amount');

    this.balance += amount;
    this.#createTransaction('credit', amount);
  }

  withdraw(amount) {
    if (amount > this.balance)
      throw new Error('Withdrawal amount cannot exceed balance');

    this.balance -= amount;
    this.#createTransaction('debit', amount);
  }

  #createTransaction(type, amount) {
    this.transactions.unshift({
      date: new Date().toLocaleDateString('en-GB'),
      type: type,
      amount: amount,
      balance: this.balance,
    });
  }
}

module.exports = Account;
