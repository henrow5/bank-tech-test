class BankStatement {
  constructor(account) {
    this.account = account;
    this.statementLines = [];
  }

  print() {
    this.#createLines();

    const statement = this.statementLines.join('\n');

    return statement;
  }

  #createLines() {
    this.statementLines = ['date || credit || debit || balance'];

    this.account.transactions.forEach((transaction) => {
      if (transaction.type === 'credit') {
        this.statementLines.push(
          `${transaction.date} || ${transaction.amount.toFixed(
            2
          )} || || ${transaction.balance.toFixed(2)}`
        );
      } else {
        // transaction.type === 'credit'
        this.statementLines.push(
          `${transaction.date} || || ${transaction.amount.toFixed(
            2
          )} || ${transaction.balance.toFixed(2)}`
        );
      }
    });
  }
}

module.exports = BankStatement;
