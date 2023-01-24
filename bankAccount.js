class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  deposit(amount) {
    if (amount < 0.01) {
      throw new Error('Deposit amount must a minimum of 0.01');
    } else {
      this.balance += amount;
      this.#createTransaction('credit', amount);
    }
  }

  withdraw(amount) {
    if (amount > this.balance) {
      throw new Error('Withdrawal amount cannot exceed balance');
    } else if (amount < 0.01) {
      throw new Error('Withdrawal amount cannot be less than 0.01');
    } else {
      this.balance -= amount;
      this.#createTransaction('debit', amount);
    }
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

module.exports = BankAccount;
