class Statement {
  constructor(account) {
    this.account = account;
    this.statementLines = [];
  }

  print() {
    this.createLines(this.account.transactions);

    const statement = this.statementLines.join('\n');

    return statement;
  }

  createLines(transactions) {
    this.statementLines = ['date || credit || debit || balance'];

    this.account.transactions.forEach((transaction) => {
      if (transaction.type === 'credit') {
        this.statementLines.push(
          `${transaction.date} || ${transaction.amount.toFixed(
            2
          )} || || ${transaction.balance.toFixed(2)}`
        );
      } else {
        this.statementLines.push(
          `${transaction.date} || || ${transaction.amount.toFixed(
            2
          )} || ${transaction.balance.toFixed(2)}`
        );
      }
    });
  }
}

module.exports = Statement;
