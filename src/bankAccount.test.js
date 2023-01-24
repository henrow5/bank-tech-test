const BankAccount = require('./bankAccount');

describe('Account', () => {
  beforeEach(() => {
    account = new BankAccount();
    todaysDate = new Date().toLocaleDateString('en-GB');
  });

  it('can make deposits', () => {
    account.deposit(5000.21);
    account.deposit(0.79);

    expect(account.balance).toBe(5001);
    expect(account.transactions[0].date).toBe(todaysDate);
    expect(account.transactions[0].type).toBe('credit');
    expect(account.transactions[0].amount).toBe(0.79);
    expect(account.transactions[0].balance).toBe(5001);
  });

  it('can make a withdrawal', () => {
    account.deposit(5000);
    account.withdraw(500.49);

    expect(account.balance).toBe(4499.51);
    expect(account.transactions[0].date).toBe(todaysDate);
    expect(account.transactions[0].type).toBe('debit');
    expect(account.transactions[0].amount).toBe(500.49);
    expect(account.transactions[0].balance).toBe(4499.51);
  });

  it('throws an error with an invalid deposit amount', () => {
    expect(() => account.deposit(0)).toThrow(
      'Deposit amount must a minimum of 0.01'
    );
    expect(() => account.deposit(-1)).toThrow(
      'Deposit amount must a minimum of 0.01'
    );
  });

  it('throws an error if the withdrawal amount exceeds the balance', () => {
    account.deposit(5000);

    expect(() => account.withdraw(5001)).toThrow(
      'Withdrawal amount cannot exceed balance'
    );
  });

  it('throws an error if the withdrawal amount is less than 0.01', () => {
    account.deposit(5000);

    expect(() => account.withdraw(0)).toThrow(
      'Withdrawal amount cannot be less than 0.01'
    );
    expect(() => account.withdraw(-1)).toThrow(
      'Withdrawal amount cannot be less than 0.01'
    );
  });
});
