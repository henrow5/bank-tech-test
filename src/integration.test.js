const BankAccount = require('./bankAccount');
const BankStatement = require('./bankStatement');

describe('Integration', () => {
  beforeEach(() => {
    account = new BankAccount();
    statement = new BankStatement(account);
    jest.useFakeTimers('modern');
    jest.setSystemTime(new Date('2021-01-20'));
  });

  it('returns only the statement header with no transactions', () => {
    expect(statement.print()).toBe('date || credit || debit || balance');
  });

  it('returns a statement string with 1 transaction type', () => {
    account.deposit(5000);

    expect(statement.print()).toBe(
      `date || credit || debit || balance\n20/01/2021 || 5000.00 || || 5000.00`
    );
  });

  it('returns a statement string with both transaction types', () => {
    account.deposit(5000);
    account.withdraw(500);

    expect(statement.print()).toBe(
      `date || credit || debit || balance\n20/01/2021 || || 500.00 || 4500.00\n20/01/2021 || 5000.00 || || 5000.00`
    );
  });

  it('returns a statement string with multiple transactions with the most recent movement listed first', () => {
    account.deposit(5000);
    account.withdraw(500);
    account.deposit(100);
    account.withdraw(600);

    expect(statement.print()).toBe(
      `date || credit || debit || balance\n20/01/2021 || || 600.00 || 4000.00\n20/01/2021 || 100.00 || || 4600.00\n20/01/2021 || || 500.00 || 4500.00\n20/01/2021 || 5000.00 || || 5000.00`
    );
  });
});
